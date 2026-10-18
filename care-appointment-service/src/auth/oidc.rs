//! Keycloak bearer-token authentication.
//!
//! The UI signs staff in with Keycloak and sends the access token as
//! `Authorization: Bearer <token>`. [`KeycloakUser`] is an axum extractor that
//! checks the token's signature against the realm's published keys (JWKS), its
//! issuer, its expiry and the client it was issued to. Controllers that take a
//! `KeycloakUser` argument therefore reject anonymous requests with 401.
//!
//! Settings come from the `settings.oidc` section of the Loco config.
use std::{
    sync::OnceLock,
    time::{Duration, Instant},
};

use axum::{
    extract::FromRequestParts,
    http::{request::Parts, StatusCode},
};
use jsonwebtoken::{decode, decode_header, jwk::JwkSet, Algorithm, DecodingKey, Validation};
use loco_rs::{app::AppContext, controller::ErrorDetail, errors::Error, Result};
use serde::Deserialize;
use tokio::sync::RwLock;

/// How long fetched signing keys are reused before re-fetching.
const JWKS_TTL: Duration = Duration::from_secs(300);

#[derive(Debug, Clone, Deserialize)]
pub struct OidcSettings {
    /// Realm URL, e.g. `http://localhost:8280/realms/care-appointment`. It must
    /// equal the token's `iss` claim.
    pub issuer: String,
    /// Where to fetch signing keys. Defaults to the realm's standard path.
    pub jwks_url: Option<String>,
    /// Client ids (the token's `azp` claim) this API accepts.
    #[serde(default = "default_clients")]
    pub allowed_clients: Vec<String>,
}

fn default_clients() -> Vec<String> {
    vec!["care-appointment-success-ui".to_string()]
}

impl OidcSettings {
    pub fn from_context(ctx: &AppContext) -> Result<Self> {
        let value = ctx
            .config
            .settings
            .as_ref()
            .and_then(|s| s.get("oidc"))
            .cloned()
            .ok_or_else(|| Error::string("settings.oidc is not configured"))?;
        serde_json::from_value(value).map_err(|e| Error::string(&format!("settings.oidc: {e}")))
    }

    fn jwks_url(&self) -> String {
        self.jwks_url.clone().unwrap_or_else(|| {
            format!(
                "{}/protocol/openid-connect/certs",
                self.issuer.trim_end_matches('/')
            )
        })
    }
}

#[derive(Debug, Clone, Deserialize)]
struct RealmAccess {
    #[serde(default)]
    roles: Vec<String>,
}

#[derive(Debug, Clone, Deserialize)]
struct Claims {
    sub: String,
    azp: Option<String>,
    preferred_username: Option<String>,
    realm_access: Option<RealmAccess>,
}

/// The signed-in user, taken from a validated Keycloak access token.
#[derive(Debug, Clone)]
pub struct KeycloakUser {
    /// Keycloak's stable user id (the `sub` claim).
    pub id: String,
    pub username: Option<String>,
    pub roles: Vec<String>,
}

impl KeycloakUser {
    pub fn has_role(&self, role: &str) -> bool {
        self.roles.iter().any(|r| r == role)
    }

    /// Guard for handlers: signed in but missing the role is a 403.
    pub fn require_role(&self, role: &str) -> Result<()> {
        if self.has_role(role) {
            Ok(())
        } else {
            Err(Error::CustomError(
                StatusCode::FORBIDDEN,
                ErrorDetail::with_reason("missing required role"),
            ))
        }
    }
}

/// Check `token` against `keys` and `settings`. Pure, so it can be tested
/// without a running Keycloak.
pub fn validate(token: &str, keys: &JwkSet, settings: &OidcSettings) -> Result<KeycloakUser> {
    let unauthorized = || Error::Unauthorized("invalid token".to_string());
    let header = decode_header(token).map_err(|_| unauthorized())?;
    // Only RS256 is accepted. Rejecting other algorithms stops algorithm
    // confusion (for example `none`, or HS256 signed with a public key).
    if header.alg != Algorithm::RS256 {
        return Err(unauthorized());
    }
    let kid = header.kid.ok_or_else(unauthorized)?;
    let jwk = keys.find(&kid).ok_or_else(unauthorized)?;
    let key = DecodingKey::from_jwk(jwk).map_err(|_| unauthorized())?;

    let mut validation = Validation::new(Algorithm::RS256);
    validation.set_issuer(&[settings.issuer.as_str()]);
    // Keycloak access tokens carry `aud: account` by default; the client is
    // checked through `azp` below instead.
    validation.validate_aud = false;
    validation.set_required_spec_claims(&["exp", "iss", "sub"]);

    let claims = decode::<Claims>(token, &key, &validation)
        .map_err(|_| unauthorized())?
        .claims;
    let client_ok = claims
        .azp
        .as_ref()
        .is_some_and(|azp| settings.allowed_clients.contains(azp));
    if !client_ok {
        return Err(unauthorized());
    }
    Ok(KeycloakUser {
        id: claims.sub,
        username: claims.preferred_username,
        roles: claims.realm_access.map(|r| r.roles).unwrap_or_default(),
    })
}

struct CachedKeys {
    fetched: Instant,
    keys: JwkSet,
}

static KEYS: OnceLock<RwLock<Option<CachedKeys>>> = OnceLock::new();

async fn signing_keys(settings: &OidcSettings, force: bool) -> Result<JwkSet> {
    let cell = KEYS.get_or_init(|| RwLock::new(None));
    if !force {
        if let Some(cached) = cell.read().await.as_ref() {
            if cached.fetched.elapsed() < JWKS_TTL {
                return Ok(cached.keys.clone());
            }
        }
    }
    let keys: JwkSet = reqwest::Client::new()
        .get(settings.jwks_url())
        .timeout(Duration::from_secs(5))
        .send()
        .await
        .and_then(|r| r.error_for_status())
        .map_err(|e| Error::string(&format!("could not fetch signing keys: {e}")))?
        .json()
        .await
        .map_err(|e| Error::string(&format!("invalid signing keys: {e}")))?;
    *cell.write().await = Some(CachedKeys {
        fetched: Instant::now(),
        keys: keys.clone(),
    });
    Ok(keys)
}

impl FromRequestParts<AppContext> for KeycloakUser {
    type Rejection = Error;

    async fn from_request_parts(parts: &mut Parts, ctx: &AppContext) -> Result<Self> {
        let token = parts
            .headers
            .get(axum::http::header::AUTHORIZATION)
            .and_then(|v| v.to_str().ok())
            .and_then(|v| v.strip_prefix("Bearer "))
            .ok_or_else(|| Error::Unauthorized("missing bearer token".to_string()))?;
        let settings = OidcSettings::from_context(ctx)?;

        let keys = signing_keys(&settings, false).await?;
        match validate(token, &keys, &settings) {
            // An unknown `kid` can mean Keycloak rotated its keys: refetch once.
            Err(Error::Unauthorized(_)) => {
                let fresh = signing_keys(&settings, true).await?;
                validate(token, &fresh, &settings)
            }
            other => other,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use jsonwebtoken::{encode, EncodingKey, Header};
    use serde_json::json;

    const PRIVATE_KEY: &str = include_str!("../../tests/fixtures/oidc-test-private-key.pem");
    const JWKS: &str = include_str!("../../tests/fixtures/oidc-test-jwk.json");
    const ISSUER: &str = "http://localhost:8280/realms/care-appointment";

    fn settings() -> OidcSettings {
        OidcSettings {
            issuer: ISSUER.to_string(),
            jwks_url: None,
            allowed_clients: default_clients(),
        }
    }

    fn token(overrides: serde_json::Value) -> String {
        let mut claims = json!({
            "sub": "user-1",
            "iss": ISSUER,
            "azp": "care-appointment-success-ui",
            "exp": 4_102_444_800_u64,
            "preferred_username": "dev-navigator",
            "realm_access": { "roles": ["navigator"] }
        });
        for (k, v) in overrides.as_object().unwrap() {
            claims[k] = v.clone();
        }
        let mut header = Header::new(Algorithm::RS256);
        header.kid = Some("test-key".to_string());
        encode(
            &header,
            &claims,
            &EncodingKey::from_rsa_pem(PRIVATE_KEY.as_bytes()).unwrap(),
        )
        .unwrap()
    }

    fn check(token: &str) -> Result<KeycloakUser> {
        validate(token, &serde_json::from_str(JWKS).unwrap(), &settings())
    }

    #[test]
    fn accepts_a_valid_token_and_reads_roles() {
        let user = check(&token(json!({}))).unwrap();
        assert_eq!(user.id, "user-1");
        assert_eq!(user.username.as_deref(), Some("dev-navigator"));
        assert!(user.has_role("navigator"));
        assert!(user.require_role("booking-staff").is_err());
    }

    #[test]
    fn rejects_an_expired_token() {
        assert!(check(&token(json!({ "exp": 1_000_000_000_u64 }))).is_err());
    }

    #[test]
    fn rejects_the_wrong_issuer() {
        assert!(check(&token(json!({ "iss": "http://evil.example/realms/x" }))).is_err());
    }

    #[test]
    fn rejects_a_client_that_is_not_allowed() {
        assert!(check(&token(json!({ "azp": "some-other-client" }))).is_err());
    }

    #[test]
    fn rejects_a_token_signed_with_another_key() {
        let other = token(json!({}));
        // Flip a character in the signature.
        let mut bytes = other.into_bytes();
        let last = bytes.len() - 3;
        bytes[last] = if bytes[last] == b'A' { b'B' } else { b'A' };
        assert!(check(&String::from_utf8(bytes).unwrap()).is_err());
    }

    #[test]
    fn rejects_garbage() {
        assert!(check("not-a-token").is_err());
    }
}
