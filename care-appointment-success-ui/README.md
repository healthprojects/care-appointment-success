# Care Appointment Success prototype frontend

A clickable, bilingual (Welsh and English) prototype of **Care Appointment Success**, the attendance-support service proposed in [`../submission.md`](../submission.md) for the Contracts for Innovation Cymru challenge *Reducing Missed Appointments and Improving Access to Planned Care*.

It is for co-design workshops, usability testing and the assessment panel demo. **It is not a real service.** Every appointment is fictional, and nothing a visitor chooses is collected, stored or sent anywhere.

## Stack

- [SvelteKit 3](https://svelte.dev/docs/kit) with Svelte 5 runes and TypeScript
- [`@sveltejs/adapter-static`](https://svelte.dev/docs/kit/adapter-static): every page is prerendered to static HTML
- [Lily Design System](https://lilydesignsystem.com/):
  - [`@lilydesignsystem/svelte-headless`](https://www.npmjs.com/package/@lilydesignsystem/svelte-headless) for accessible, unstyled components
  - [`@lilydesignsystem/svelte-picker-bar`](https://www.npmjs.com/package/@lilydesignsystem/svelte-picker-bar) for the header's theme, language, text size and share controls
  - Lily's standalone theme stylesheets in `static/themes/`, defaulting to NHS Wales (patients)
- This folder is the version with staff sign-in (Keycloak, OIDC). The public GitHub Pages build is [`../care-appointment-success.github.io/`](../care-appointment-success.github.io/README.md), which omits sign-in

## Pages

| Route | Purpose |
|---|---|
| `/` | Bilingual landing page, Welsh first (Welsh Language Active Offer) |
| `/locales/<code>/` | Home: what Care Appointment Success does |
| `/locales/<code>/appointment/` | A fictional appointment, with "Can you come?" choices |
| `/locales/<code>/confirmed/` | Attendance confirmed, and what to bring |
| `/locales/<code>/barriers/` | "Is anything making it hard to come?" barrier check, with signposting to help |
| `/locales/<code>/rebook/` | Change to another time, or cancel so the slot can be reused |
| `/locales/<code>/navigator/` | Ask for a phone call from a community navigator, in Welsh or English |

`<code>` is `cy-001` or `en-001`.

## Locales

All user-facing text lives in `locales/<code>/messages.json`:

- [`locales/en-001/`](locales/en-001/): English, the reference catalogue
- [`locales/cy-001/`](locales/cy-001/): Welsh. **Draft: needs review by a first-language Welsh speaker before any user testing.**

Rules:

- No user-facing strings in `.svelte` files. Add the key to every `messages.json`, then run `pnpm run check:locales`, which fails if any locale's keys differ from English.
- Day and month names are in the catalogues, not taken from `Intl.DateTimeFormat`. Some browsers lack Welsh locale data and silently fall back to US English.
- Switching language with the picker keeps the visitor on the same page.

## Develop

```sh
pnpm install
pnpm run dev            # http://localhost:5173
pnpm run check          # svelte-check (types and Svelte diagnostics)
pnpm run check:locales  # locale key parity
pnpm run build          # static site in build/
```

To reproduce the GitHub Pages sub-path locally:

```sh
BASE_PATH=/healthprojects/care-appointment-success pnpm run build
```

## Deploy

This folder has no deploy workflow. Public deployment is from [`../care-appointment-success.github.io/`](../care-appointment-success.github.io/README.md). Build this version with `VITE_OIDC_AUTHORITY` set (see `.env.example`) and serve it next to the service in `../care-appointment-service/`.

## Verified

Last checked in a local build served under the Pages sub-path:

- Every flow works in Chromium (Playwright), in both languages.
- Switching locale keeps you on the same page, and switching theme works.
- No horizontal scrolling at 375px width.
- axe-core (WCAG 2.2 AA rules) reports zero violations on all 13 pages, plus the barrier-check error state.
