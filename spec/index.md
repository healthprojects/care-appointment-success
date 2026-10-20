# Specification

The specification for the Care Appointment Success bid. This folder is the single source of truth for requirements, rules and research. Final answer text lives in `locales/en-gb/submission/`.

## Official documents (read only)

Folder `official-publications/`. Each PDF has a markdown extraction beside it.

| Document | Use |
|---|---|
| Challenge Brief | Scope, out of scope, outcomes, Welsh language rules, timeline |
| Briefing Presentation Slides | Phase 1 expectations, interoperability, assurance, what CTM will facilitate |
| Application Guidance Notes | Per-question guidance, word limits |
| Evaluation Questions | The 16 scored criteria, 0 to 5 each |
| FAQs | Eligibility, costs, payments |
| Contract v8.6 | Terms, IP (Schedules B and C), payment clauses |
| `introduction.md` / `.html` | The challenge page |

## Submission form

- `submission-template/`: the form, sections A to K.
- `submission/`: the question for each section. Each folder has `index.md` with the question and a `README.md` link.
- Final answers are in `locales/en-gb/submission/` (English) and `locales/cy-gb/submission/` (Welsh).

| Section | Question folder in `spec/submission/` | Answer folder in `locales/en-gb/submission/` |
|---|---|---|
| D1 Elevator pitch | `submission-d1-elevator-pitch-250-words` | same name |
| D2 Video | `submission-d2-video` | same name |
| D3 Meet the challenge | `submission-d3-meet-the-challenge-1000-words` | same name |
| D4 Technical challenges | `submission-d4-technical-challenges-750-words` | same name |
| D5 Innovation | `submission-d5-current-innovation-and-novel-concepts-750-words` | same name |
| E1 Project management | `submission-e1-project-management-750-words` | `submission-e1-project-management` (plus `plan-gantt-chart.pdf`) |
| E2 Risks | `submission-e2-risks-750-words` | `submission-e2-risks` |
| E3 Team | `submission-e3-team-750-words` | same name (has placeholders) |
| E4 Readiness | `submission-e4-readiness-750-words` | same name (has placeholders) |
| F1 Testing | `submission-f1-testing` | `submission-f1-testing-750-words` |
| G1 Accessibility | `submission-g1-accessibility-500-words` | same name |
| H1 Costs | `submission-h1-costs-750-words` | `submission-h1-finance-750-words` |
| H2 Payment schedule | `submission-h2-payment-schedule-750-words` | same name |
| H3 Other funding | `submission-h3-other-funding-sources-750-words` | same name |
| I1 Wellbeing | in the form template | `submission-i1-wellbeing-500-words` |
| I2 Welsh economy | in the form template | `submission-i2-welsh-economy-500-words` |
| I3 Carbon | in the form template | `submission-i3-carbon-500-words` (has placeholders) |
| J1 Commercialisation | in the form template | `submission-j1-commercialisation-750-words` (has placeholders) |
| J2 Value for money | in the form template | `submission-j2-value-for-money-750-words` (has placeholders) |
| A Application | in the form template | `submission-a-application` (has a dropdown choice to make) |
| B Lead applicant | in the form template | `submission-b-lead-applicant` (all company details are placeholders) |
| C Contact | in the form template | `submission-c-contact-details` (has placeholders) |
| K Declaration | in the form template | `submission-k-declaration` (a checklist; the declaration text is on the live form) |

## Research

| Folder | Content |
|---|---|
| `academic-research-into-missed-medical-appointments/` | Systematic reviews, intervention effect sizes |
| `why-patients-miss-doctors-appointments/` | Reasons and risk groups |
| `why-we-dont-come-patient-perceptions-on-no-shows/` | Lacy et al. 2004 interview study (PDF and markdown) |
| `strategies-to-reduce-no-shows/` | Practical strategies and what fails |
| `templates-for-effective-reminder-messages/` | SMS and email templates |
| `how-to-develop-good-research-questions/` | Method for forming research questions |
| `brainstorms/` | Brainstorms drawn from all of the above |

## Other

- `logo/`: brief for the project logo (`assets/images/logo/`).

## Rules for the specification

1. Change a requirement here first, then update the code or answers.
2. Never edit `official-publications/`.
3. Keep numbers consistent with `locales/en-gb/submission/` E1, E2, H1 and H2.
