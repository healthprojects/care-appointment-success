// Optional staff sign-in with Keycloak (OpenID Connect, authorization code
// flow with PKCE). The static prototype needs no account, so sign-in is only
// offered when VITE_OIDC_AUTHORITY is set, for example to
// http://localhost:8280/realms/care-appointment for the local Podman stack.
// Tokens stay in sessionStorage. The prototype stores no personal data.
import { resolve } from '$app/paths';
import { UserManager, WebStorageStateStore, type User } from 'oidc-client-ts';

const authority = import.meta.env.VITE_OIDC_AUTHORITY as string | undefined;
const clientId = (import.meta.env.VITE_OIDC_CLIENT_ID as string | undefined) ?? 'care-appointment-success-ui';

export const authEnabled = Boolean(authority);

let manager: UserManager | undefined;

function getManager(): UserManager {
  manager ??= new UserManager({
    authority: authority!,
    client_id: clientId,
    redirect_uri: new URL(resolve('auth/callback/'), location.origin).href,
    post_logout_redirect_uri: new URL(resolve('/'), location.origin).href,
    response_type: 'code',
    scope: 'openid profile',
    userStore: new WebStorageStateStore({ store: sessionStorage })
  });
  return manager;
}

export const auth = $state<{ user: User | null; error: boolean }>({ user: null, error: false });

/** Restore a signed-in user from sessionStorage, once per page load. */
export async function restore(): Promise<void> {
  if (typeof window === 'undefined' || !authEnabled) return;
  try {
    auth.user = await getManager().getUser();
  } catch {
    auth.user = null;
  }
}

export async function signIn(returnTo: string): Promise<void> {
  try {
    await getManager().signinRedirect({ state: returnTo });
  } catch {
    auth.error = true;
  }
}

export async function signOut(): Promise<void> {
  try {
    await getManager().signoutRedirect();
  } catch {
    await getManager().removeUser();
    auth.user = null;
  }
}

/** Finish the redirect from Keycloak. Returns the page to go back to. */
export async function completeSignIn(): Promise<string> {
  const user = await getManager().signinCallback();
  auth.user = user ?? null;
  return (user?.state as string | undefined) ?? resolve('/');
}
