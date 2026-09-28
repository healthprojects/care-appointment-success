import { resolve } from '$app/paths';
import type { Locale } from './locales';

export type Page = '' | 'appointment' | 'confirmed' | 'barriers' | 'rebook' | 'navigator';

/** Directory-style link to a page in a locale, including the base path. */
export function localePath(locale: Locale, page: Page = ''): string {
  const path = page ? `/locales/${locale}/${page}/` : `/locales/${locale}/`;
  // Route pathnames are typed; these are built from known segments.
  return resolve(path as '/');
}

/** The page segment of a locale-scoped pathname, if any. */
export function pageOf(pathname: string): Page {
  const m = /\/locales\/[^/]+\/([^/]+)\/?$/.exec(pathname);
  return (m?.[1] ?? '') as Page;
}
