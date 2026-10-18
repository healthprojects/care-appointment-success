# AGENTS.md — Care Appointment Success prototype frontend

- SvelteKit 2, Svelte 5 runes, TypeScript, pnpm. Static output only (`adapter-static`, `prerender = true`, `trailingSlash = 'always'`).
- **No user-facing strings in `.svelte` files.** Every string lives in `locales/<code>/messages.json`. Keep keys identical across locales, and run `pnpm run check:locales`.
- Locale codes are `cy-001` and `en-001`, following the sibling Health Projects repos. Routes are `/locales/[locale]/<page>/`. `src/routes/locales/[locale]/+layout.ts` supplies `ui` through `page.data`, so the root layout's chrome is localised.
- Build every internal link with `localePath()` from `src/lib/paths.ts`, and assets with `asset()`, so the site works under the GitHub Pages base path (`BASE_PATH`).
- Use Lily headless components (`@lilydesignsystem/svelte-headless`) and their class hooks. Visual styling comes from the theme in `static/themes/`. `src/lib/css/app.css` is layout only, plus page-level tokens the themes leave to the app.
- Secondary buttons use `data-variant="secondary"` on `.button`, which is how the themes style variants.
- Never collect, store or send personal data. The prototype uses fictional data from `src/lib/appointment.ts`.
- Before committing, run `pnpm run check`, `pnpm run check:locales` and `pnpm run build`.
