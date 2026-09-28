import type { Handle } from '@sveltejs/kit';
import { isLocale, langAttr, localeDir } from '$lib/locales';

const LOCALE_PATH_RE = /\/locales\/([^/]+)\//;

// src/app.html declares <html lang="en">. Swap in the page's language and
// direction so prerendered HTML is correct before any client JavaScript runs.
// The bilingual landing page (no locale in the URL) is Welsh-first, so it
// declares Welsh and marks its English parts with their own lang attribute.
export const handle: Handle = async ({ event, resolve }) => {
  const code = LOCALE_PATH_RE.exec(event.url.pathname)?.[1];
  const locale = isLocale(code) ? code : undefined;
  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '<html lang="en">',
        locale ? `<html lang="${langAttr(locale)}" dir="${localeDir(locale)}">` : '<html lang="cy" dir="ltr">'
      )
  });
};
