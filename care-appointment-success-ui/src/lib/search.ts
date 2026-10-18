// Client-side search over the prototype's own page text. The index is built
// from the locale's messages.json, so results are in the visitor's language
// and nothing leaves the browser.
import type { Messages } from './i18n';
import type { Page } from './paths';

const PAGES: Array<[Page, keyof Messages]> = [
  ['', 'home'],
  ['appointment', 'appointment'],
  ['confirmed', 'confirmed'],
  ['barriers', 'barriers'],
  ['rebook', 'rebook'],
  ['navigator', 'navigator']
];

export type SearchResult = { page: Page; title: string; snippet: string };

function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => strings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => strings(v, out));
  return out;
}

const fold = (text: string) => text.toLocaleLowerCase().normalize('NFD').replace(/\p{M}/gu, '');

/** Pages whose text contains every word of the query, title matches first. */
export function search(messages: Messages, query: string): SearchResult[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const results: Array<SearchResult & { score: number }> = [];
  for (const [page, key] of PAGES) {
    const section = messages[key] as { title: string };
    const texts = strings(section);
    const haystack = fold(texts.join(' '));
    if (!words.every((w) => haystack.includes(w))) continue;
    const inTitle = words.every((w) => fold(section.title).includes(w));
    const snippet = texts.find((t) => t !== section.title && words.some((w) => fold(t).includes(w))) ?? '';
    results.push({ page, title: section.title, snippet, score: inTitle ? 1 : 0 });
  }
  return results.sort((a, b) => b.score - a.score);
}
