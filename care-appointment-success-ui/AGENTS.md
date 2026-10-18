# AGENTS.md: Care Appointment Success prototype frontend

See the root [`AGENTS.md`](../AGENTS.md) for project-wide rules. This file adds rules for this folder.


- SvelteKit 3, Svelte 5 runes, TypeScript, pnpm. Static output only (`adapter-static`, `prerender = true`, `trailingSlash = 'always'`).
- **No user-facing strings in `.svelte` files.** Every string lives in `locales/<code>/messages.json`. Keep keys identical across locales, and run `pnpm run check:locales`.
- Locale codes are `cy-001` and `en-001`, following the sibling Health Projects repos. Routes are `/locales/[locale]/<page>/`. `src/routes/locales/[locale]/+layout.ts` supplies `ui` through `page.data`, so the root layout's chrome is localised.
- Build every internal link with `localePath()` from `src/lib/paths.ts`, and assets with `asset()`, so the site works under the GitHub Pages base path (`BASE_PATH`).
- Use Lily headless components (`@lilydesignsystem/svelte-headless`) and their class hooks. Visual styling comes from the theme in `static/themes/`. `src/lib/css/app.css` is layout only, plus page-level tokens the themes leave to the app.
- Secondary buttons use `data-variant="secondary"` on `.button`, which is how the themes style variants.
- Dependencies: SvelteKit 3, Vite 8, TypeScript 6 (TypeScript 7 breaks the tooling).
- Never collect, store or send personal data. The prototype uses fictional data from `src/lib/appointment.ts`.
- Before committing, run `pnpm run check`, `pnpm run check:locales` and `pnpm run build`.
- Search is client-side over `messages.json` (`src/lib/search.ts`, route `/locales/[locale]/search/`). New pages need an entry in its `PAGES` list and in the link picker (`LINK_PAGES` in `+layout.svelte`).
- Staff sign-in (Keycloak, OIDC with PKCE, `src/lib/auth.svelte.ts`) appears only when `VITE_OIDC_AUTHORITY` is set; see `.env.example`. GitHub Pages builds leave it unset. Do not store profile data beyond the session.
