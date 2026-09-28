import { LOCALES } from './locales';

/** Prerender every locale-scoped page once per published locale. */
export const entries = () => LOCALES.map((locale) => ({ locale }));
