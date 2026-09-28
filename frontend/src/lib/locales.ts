// Locale codes this prototype publishes. Each has a directory under
// ../locales/<code>/ holding its messages.json. Codes use the CLDR "-001"
// (World) region, matching the sibling Health Projects repos. Welsh is
// listed first, following the Welsh Language Active Offer.
export const LOCALES = ['cy-001', 'en-001'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en-001';

/** Each locale's own name for itself (endonym), for the locale picker. */
export const LOCALE_LABELS: Record<Locale, string> = {
  'cy-001': 'Cymraeg',
  'en-001': 'English'
};

export function isLocale(code: string | undefined): code is Locale {
  return !!code && (LOCALES as readonly string[]).includes(code);
}

/**
 * BCP 47 tag for the `lang` attribute and `Intl` formatting. "-001" is a
 * CLDR region, not a useful BCP 47 region, so strip it ("cy-001" -> "cy").
 */
export function langAttr(code: Locale): string {
  return code.endsWith('-001') ? code.slice(0, -4) : code;
}

/** Text direction. Both published locales are left-to-right. */
export function localeDir(_code: Locale): 'ltr' | 'rtl' {
  return 'ltr';
}
