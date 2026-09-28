// Fictional sample data. This prototype never loads or stores real patient
// information; every appointment it shows is made up.
import { format, ui } from './i18n';
import type { Locale } from './locales';

export const APPOINTMENT = {
  reference: 'BRD-0001',
  start: '2026-11-03T10:30'
};

/** Alternative times offered on the change page. */
export const ALTERNATIVE_SLOTS = [
  { id: 'slot-1', start: '2026-11-05T09:15' },
  { id: 'slot-2', start: '2026-11-10T14:00' },
  { id: 'slot-3', start: '2026-11-17T17:30' }
];

// Times are local wall-clock times in Wales. Day and month names come from
// each locale's messages.json rather than Intl.DateTimeFormat, because some
// browsers ship without Welsh locale data and silently fall back to US
// English ("Tuesday, November 10, 2026 at 2:00 PM").

export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  const weekday = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  const t = ui(locale).dates;
  return format(t.dateFormat, {
    weekday: t.weekdays[weekday],
    day: String(d),
    month: t.months[m - 1],
    year: String(y)
  });
}

/** 24-hour clock, as used in NHS Wales appointment letters. */
export function formatTime(iso: string, _locale: Locale): string {
  return iso.slice(11, 16);
}
