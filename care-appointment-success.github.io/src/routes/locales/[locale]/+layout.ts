import { error } from '@sveltejs/kit';
import { ui } from '#lib/i18n.js';
import { isLocale } from '#lib/locales.js';
import type { LayoutLoad } from './$types';

// Supplies this locale's strings to every page under /locales/<code>/ and,
// through SvelteKit's merged page.data, to the root layout's header and
// footer, so the whole page chrome reads in the visitor's language.
export const load: LayoutLoad = ({ params }) => {
  if (!isLocale(params.locale)) error(404, 'Not found');
  return { locale: params.locale, ui: ui(params.locale) };
};
