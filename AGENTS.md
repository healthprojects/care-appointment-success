# AGENTS.md: Care Appointment Success

Guidance for AI coding agents working in this repository. Subfolders have their own `AGENTS.md`; the closest file wins.

## What this repository is

A bid for the Contracts for Innovation Cymru challenge *Reducing Missed Appointments and Improving Access to Planned Care* (Cwm Taf Morgannwg University Health Board), plus a prototype and a service skeleton. The bid deadline is 20 October 2026, 12:00 noon BST. Phase 1 runs November 2026 to 31 March 2027 (5 months), and the draft request is £59,400 including VAT.

## Layout and single sources of truth

| Path | Role | Source of truth for |
|---|---|---|
| `spec/` | Specification, research and the form questions | Requirements, word limits, rules. See `spec/index.md` |
| `spec/official-publications/` | Official challenge documents (PDF and markdown) | Anything the funder said. Never edit |
| `spec/submission/` | The question text for each form section | The question, not the answer |
| `locales/en-gb/submission/` | Final English answers per section | The text we submit (D1 to H3) |
| `locales/cy-gb/submission/` | Welsh versions | Welsh text. Needs first-language review |
| `submission.md` | Early draft of all sections A to K | Sections A to C and K only. See its banner |
| `plan.md`, `tasks.md` | Research, approach, checklist | Plan and task status |
| `care-appointment-success-ui/` | SvelteKit prototype with staff sign-in | Prototype with OIDC |
| `care-appointment-success.github.io/` | SvelteKit prototype for GitHub Pages | Public static prototype |
| `care-appointment-service/` | Rust (Loco) API with Keycloak sign-in | Service skeleton |

## Rules

- **Bilingual by design.** Every patient-facing string exists in Welsh (`cy`) and English (`en`). Never ship one without the other. Welsh needs review by a first-language speaker.
- **Fictional data only.** The prototypes never collect, store or send personal data.
- **Numbers must match.** Money, dates, milestones and day counts must agree across `locales/en-gb/submission/` sections E1, E2, F1, H1, H2 and `submission.md`. Check the arithmetic after any change.
- **Word limits.** Respect the limit in each section's folder name (for example `-750-words`). Text over the limit is not read.
- **Define acronyms** on first use in every section, because assessors may read sections separately.
- **No overclaiming.** Treat evidence tagged weak in `spec/brainstorms/index.md` as hypotheses. Phase 1 sends no live patient messages.
- **Safety rule.** Any risk score can only trigger *more* support. It never reduces slots or contact, never drives overbooking, and never penalises.
- **Do not edit** `spec/official-publications/` or generated `build/` and `target/` folders.
- Keep this file under 40,000 bytes. Prefer links to duplicating text.

## Commands

| Where | Commands |
|---|---|
| Either web folder | `pnpm install`, `pnpm run check`, `pnpm run check:locales`, `pnpm run build` |
| `care-appointment-service/` | `cargo check`, `cargo test`, `cargo fmt --all -- --check`, `cargo clippy` (local Postgres and Keycloak via `podman-compose up -d`) |

Run the checks before committing. Both web folders must pass with zero errors.

## Dependencies

- Node 24 or newer for the web folders (`engines` says 22 or newer), pnpm 11, SvelteKit 3, Svelte 5, Vite 8, TypeScript 6.
- TypeScript 7 currently breaks the SvelteKit tooling. Stay on 6.x until Svelte tooling supports 7.
- Rust stable, Loco 0.16.
