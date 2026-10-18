// Calls to the Care Appointment Service API (Loco), with the Keycloak access
// token attached. Only used when both VITE_API_URL and sign-in are configured;
// the static prototype itself makes no network calls.
import { auth } from './auth.svelte';

const apiUrl = import.meta.env.VITE_API_URL as string | undefined;

export const apiEnabled = Boolean(apiUrl);

export type Me = { id: string; username: string | null; roles: string[] };

/** GET a JSON resource as the signed-in user. Throws on any non-2xx status. */
export async function apiGet<T>(path: string): Promise<T> {
  const token = auth.user?.access_token;
  if (!apiUrl || !token) throw new Error('not signed in');
  const response = await fetch(new URL(path, apiUrl), {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!response.ok) throw new Error(`API ${response.status}`);
  return (await response.json()) as T;
}

export const getMe = () => apiGet<Me>('api/me');
