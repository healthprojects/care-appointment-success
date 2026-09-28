// UI strings for every published locale, loaded from ../locales/<code>/
// messages.json. English is the reference catalogue: every other locale must
// have exactly the same keys (run `pnpm run check:locales`).
import en from '../../locales/en-001/messages.json';
import cy from '../../locales/cy-001/messages.json';
import type { Locale } from './locales';

export type Messages = typeof en;

const MESSAGES: Record<Locale, Messages> = {
  'en-001': en,
  'cy-001': cy
};

export function ui(locale: Locale): Messages {
  return MESSAGES[locale];
}

/** Replace {name} placeholders in a message. */
export function format(message: string, values: Record<string, string>): string {
  return message.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
