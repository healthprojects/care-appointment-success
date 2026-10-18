# Care Appointment Success

Response to the Contracts for Innovation Cymru (SBRI) challenge **Reducing Missed Appointments and Improving Access to Planned Care**, led by Cwm Taf Morgannwg University Health Board (CTM UHB).

- Challenge page: <https://sbri.simplydo.co.uk/challenges/6ab12e655d237902d9349089>
- Enquiries: [ContractsforInnovationCymru@wales.nhs.uk](mailto:ContractsforInnovationCymru@wales.nhs.uk)
- Submission deadline: **Tuesday 20 October 2026, 12:00 noon BST**

## Challenge at a glance

| Item | Detail |
|---|---|
| Problem | ~64,000 missed outpatient appointments in the last 12 months at CTM UHB |
| DNA rate | 8.6% average outpatient did-not-attend (DNA) rate |
| Cost | ~£9.6m avoidable lost value per year (≈ £150 per missed appointment) |
| Implied volume | ≈ 744,000 outpatient appointments per year (64,000 ÷ 8.6%) |
| Phase 1 funding | Up to £200,000 total, shared across a portfolio of projects |
| Phase 1 window | November 2026 to 31 March 2027 (up to 5 months; we propose 5) |
| Phase 2 | Not guaranteed; separate competition for real-world pilot and evaluation |
| Assessment | Written application (sections A–K), then in-person "Dragons' Den" style panel for shortlisted applicants |
| Must-haves | Bilingual Welsh/English by design; accessible and inclusive; realistic route to adoption across Wales; affordability and sustainability |
| Out of scope | Pure research; English-only delivery; replacing clinical judgement; funding/providing transport services; solely increasing demand |

## Key dates

| Activity | Timing |
|---|---|
| Challenge launch | 22 September 2026 |
| Briefing event (virtual, MS Teams) | 2 October 2026 |
| Challenge closes | 20 October 2026, 12:00 noon BST |
| Assessment and shortlisting | From 21 October 2026 |
| Supplier presentations | TBC |
| Contract award and Phase 1 start | November 2026 |
| Phase 1 completion | 31 March 2027 |
| Final report | March 2027 |

## Our proposed concept: Care Appointment Success

**Care Appointment Success** is a bilingual-by-design attendance support service that helps people get ready for, attend, or quickly rebook planned care appointments. It has five parts:

1. **Barrier-aware, two-way communications.** Welsh and English, sent by SMS, NHS Wales App, automated voice, letter, easy-read and accessible formats. Patients can confirm, cancel or rebook in one step.
2. **"Can you make it?" barrier check.** A short check that asks about transport, caring, work, cost and access needs, then signposts to existing community and statutory support.
3. **Equity-safe risk stratification.** Used only to *offer more support*, never to overbook or deprioritise people.
4. **Human navigator outreach.** Community and third-sector partners contact the highest-need patients.
5. **Released-slot backfill.** Cancelled slots are offered to people on the waiting list, so freed capacity becomes care delivered.

See [plan.md](plan.md) for the brainstorm, stakeholder questions, KPIs and metrics.

## Repository contents

| Path | Purpose |
|---|---|
| [README.md](README.md) | This overview |
| [AGENTS.md](AGENTS.md), [CLAUDE.md](CLAUDE.md) | Rules and commands for AI agents |
| [llms.txt](llms.txt), [llms.json](llms.json) | Machine-readable project index for AI agents |
| [plan.md](plan.md) | Research summary, brainstorm, chosen approach, stakeholder questions, KPIs, Phase 1 plan, risks |
| [tasks.md](tasks.md) | Task checklist through to submission and Phase 1 delivery |
| [submission.md](submission.md) | Early draft of sections A to K. Final D1 to H3 text is in `locales/` |
| [locales/en-gb/submission/](locales/en-gb/submission/) | Final English answers D1 to H3, including the Gantt chart PDF for E1 |
| [locales/cy-gb/](locales/cy-gb/) | Welsh versions |
| [spec/index.md](spec/index.md) | Specification index: official documents, form questions, research |
| [spec/brainstorms/index.md](spec/brainstorms/index.md) | Brainstorms drawn from all research |
| [care-appointment-success.github.io/](care-appointment-success.github.io/) | Public bilingual prototype (SvelteKit 3, Lily Design System, GitHub Pages) |
| [care-appointment-success-ui/](care-appointment-success-ui/) | The same prototype with staff sign-in (Keycloak, OIDC) |
| [care-appointment-service/](care-appointment-service/) | Rust (Loco) API with Keycloak token checks |
| [assets/images/logo/](assets/images/logo/) | Project logo |

## Develop

```sh
# either web folder
pnpm install && pnpm run check && pnpm run check:locales && pnpm run build

# service
cd care-appointment-service && cargo check && cargo test
```

## Official documents

The challenge page links to five PDFs. They are saved in `spec/official-publications/`, and each has a markdown extraction next to it:

- [Challenge Brief](spec/official-publications/Challenge-Brief---Reducing-Missed-Appointments-and-Improving-Access-to-Planned-Care_1790073987.md)
- [Application Guidance Notes](spec/official-publications/Application-Guidance-Notes_1789988310.md): per-question guidance and the criteria each question is scored against
- [Evaluation Questions](spec/official-publications/Evaluation-Questions_1789742823.md): 16 criteria, each scored 0–5
- [FAQs](spec/official-publications/Contracts-for-Innovation-Cymru-FAQs_1789742837.md)
- [Contracts for Innovation Contract v8.6](spec/official-publications/20260604_Contracts-for-Innovation-Contract-V8.6_May-2026_1788880721.md)
