# Care Appointment Service

Rust API for the Care Appointment Success prototype, built on the [Loco](https://loco.rs) framework (0.16) with SeaORM and PostgreSQL. Staff sign in through Keycloak (OpenID Connect), and the API checks their access tokens.

This is a skeleton. It has users and token checks, and no appointment data yet. The prototype uses fictional data only.

## Quick start

```sh
podman-compose up -d      # Postgres on 5433, Keycloak on 8280
cargo loco start          # http://localhost:5150
cargo check
cargo test
cargo fmt --all -- --check
```

CI (`.github/workflows/ci.yaml`) runs formatting, clippy and tests against Postgres and Redis.

## Layout

| Path | Purpose |
|---|---|
| `src/controllers/` | HTTP routes (`auth`, `me`) |
| `src/auth/oidc.rs` | Keycloak token validation |
| `src/models/`, `migration/` | Users model and migrations |
| `config/*.yaml` | Development, test and production settings |
| `compose.yaml`, `podman/` | Local Postgres and Keycloak |
| `tests/` | Request, model, task and worker tests |

## Authentication with Keycloak

Start the local stack with `podman-compose up -d` (Postgres on 5433, Keycloak on 8280). The UI signs staff in with Keycloak and sends the access token as `Authorization: Bearer <token>`.

- `src/auth/oidc.rs` defines the `KeycloakUser` extractor. It checks the RS256 signature against the realm's published keys (cached for 5 minutes and refetched once on an unknown key), plus the issuer, expiry and the `azp` client. Any handler with a `KeycloakUser` argument returns 401 without a valid token. `user.require_role("navigator")?` returns 403 for a missing role.
- Configure it under `settings.oidc` in `config/*.yaml` (`issuer`, optional `jwks_url`, `allowed_clients`). `OIDC_ISSUER` overrides the issuer.
- Try it: `GET /api/me` returns the caller's id, username and roles. `GET /api/me/navigator` also needs the `navigator` role.
- `cargo test --lib` runs the token checks against a throwaway key in `tests/fixtures/` (never used outside tests).
- Port 5150 may already be taken by another local app. Use `127.0.0.1:5150` to be sure you reach this service.
