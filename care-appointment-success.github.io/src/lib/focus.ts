import { tick } from 'svelte';

/** After the DOM updates, move focus to the first element matching selector. */
export async function focusAfterUpdate(selector: string) {
  await tick();
  document.querySelector<HTMLElement>(selector)?.focus();
}
