// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    interface PageData {
      locale?: import('#lib/locales.js').Locale;
      ui?: import('#lib/i18n.js').Messages;
    }
  }
}

export {};
