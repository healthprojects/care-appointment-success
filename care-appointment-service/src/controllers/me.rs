use loco_rs::prelude::*;
use serde::Serialize;

use crate::auth::oidc::KeycloakUser;

#[derive(Serialize)]
pub struct MeResponse {
    pub id: String,
    pub username: Option<String>,
    pub roles: Vec<String>,
}

/// Who the Keycloak access token says the caller is. 401 without a valid token.
async fn me(user: KeycloakUser) -> Result<Response> {
    format::json(MeResponse {
        id: user.id,
        username: user.username,
        roles: user.roles,
    })
}

/// Example of a role-protected route: navigators only. 403 for other roles.
async fn navigator_check(user: KeycloakUser) -> Result<Response> {
    user.require_role("navigator")?;
    format::json(serde_json::json!({ "ok": true }))
}

pub fn routes() -> Routes {
    Routes::new()
        .prefix("api/me")
        .add("/", get(me))
        .add("/navigator", get(navigator_check))
}
