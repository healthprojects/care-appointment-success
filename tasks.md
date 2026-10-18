# Tasks

Deadline: **20 October 2026, 12:00 noon BST.** Aim to submit by 19 October.

## Now (by 1 October 2026)

- [x] Extract `spec/*` HTML to markdown
- [x] Research the challenge and the evidence base
- [x] Brainstorm ideas, stakeholder questions, KPIs and metrics (see `plan.md`)
- [x] Draft `submission.md`
- [x] Download the official PDFs into `spec/official-publications/` (Challenge Brief, Application Guidance Notes, Evaluation Questions, FAQs, Contract v8.6)
- [x] Extract those PDFs to markdown
- [x] Reconcile `plan.md` and `submission.md` with the Application Guidance Notes and Evaluation Questions
- [ ] Run a freedom-to-operate check and list background IP (D5, Schedule C)
- [ ] Confirm day rates are cost-based at fair market value with no profit (H1)
- [ ] Ask whether there is a per-project cost cap (stakeholder question 18a)
- [ ] Capture the dropdown options on the live form (A4, B6–B9, C8, G1, K1)
- [ ] Register for the briefing event (MS Teams, 2 October 2026)

## Briefing event (2 October 2026)

- [ ] Attend and take notes into `spec/briefing-notes.md`
- [ ] Ask the priority stakeholder questions from `plan.md` §4: #1, #2, #7, #13, #15, #18a, #18b
- [ ] Identify CTM contacts: planned care, outpatients, IG, Welsh language, patient experience

## Partners and stakeholders (by 9 October 2026)

- [ ] Email ContractsforInnovationCymru@wales.nhs.uk with any questions not answered at the briefing
- [ ] Approach a third-sector navigator partner in the CTM area, such as a county voluntary council or Citizens Advice, and agree scope and cost
- [ ] Approach a Welsh-language translation and review partner
- [ ] Optionally approach an academic evaluation partner, such as a Welsh university or a health data research group
- [ ] Get letters of support where possible

## Research follow-ups (from `plan.md` §9)

- [ ] Verify each §9.1 source at its original link before citing it in `submission.md`
- [ ] Get the current CTM and all-Wales DNA rate from StatsWales or CTM, then fix any "8.6%" wording that implies an all-Wales figure
- [ ] Ask DHCW about NHS Wales App two-way actions and the read-only limit (stakeholder question 18e)
- [ ] Add stakeholder questions 18c–18g to the briefing list
- [ ] Reword the D1 pitch and KPIs to lead with barrier-matching, and use "low to moderate quality evidence" for reminders
- [ ] Add booking lead time and patient-chosen slots to the discovery analysis and the Phase 1 scope
- [ ] Write pre-registered fairness checks and the "no score reduces offered slots" acceptance criterion into E4/F1
- [ ] Add a contact-detail accuracy KPI, and estimate the share of patients with no usable mobile number
- [ ] Start the clinical safety hazard log in M1 and confirm required standards with CTM
- [x] Run an extended search on Welsh-language messaging, accessible formats, navigator evidence and platform cost-effectiveness (see `plan.md` §9.4)
- [ ] Reposition the navigator tier as a tested hypothesis (acceptance, reach, barrier resolved), not a promised DNA effect
- [ ] Add a Welsh versus English comparison to the Phase 2 evaluation design
- [ ] Map each accessible format to a clause of the Welsh Accessible Communication and Information Standards
- [ ] Build the K6 cost model from CTM cost data, with a sensitivity range, and drop vendor percentages
- [ ] Ask CTM and DHCW the §9.5 gaps: recent Welsh DNA data, the NHS Wales App roadmap and BSL contact options
- [ ] Label the fictional-data status on every prototype page and in the video

## Prototype (`care-appointment-success.github.io/`, `care-appointment-success-ui/`)

- [x] Scaffold the SvelteKit 3 + Lily Design System prototype with `locales/{en-001,cy-001}` and a GitHub Pages workflow
- [x] Update dependencies (SvelteKit 3.1, Vite 8.3.4, Svelte 5.57.2) and GitHub Actions versions; checks and builds pass
- [ ] Move TypeScript to 7 when the SvelteKit tooling supports it (7.0.2 currently breaks `vite build`)
- [ ] Publish `care-appointment-success.github.io` as its own repository so the Pages workflow can run
- [ ] Have a first-language Welsh speaker review `care-appointment-success-ui/locales/cy-001/messages.json`
- [ ] Use the prototype in the D2 video pitch and the assessment panel demo

## Submission content (by 16 October 2026)

- [ ] A) Confirm project title, duration and total cost
- [ ] B) Fill in the lead organisation details
- [ ] C) Fill in contact details
- [x] D1) Final elevator pitch (≤ 250 words)
- [ ] D2) Record the video pitch (at most 3 minutes; what it is and why it is innovative, benefits, why fund it)
- [x] D3–D5) Finalise the solution answers
- [x] E1) Create the project plan attachment: a Gantt chart, one PDF of at most 2 A4 pages (`locales/en-gb/submission/submission-e1-project-management/plan-gantt-chart.pdf`; payments key spills to page 2)
- [x] E2) Risks answer written (`locales/en-gb/submission/submission-e2-risks/`)
- [x] E3–E4) Answers written. Fill the bracketed placeholders: names, qualifications, partner status, equipment
- [x] F1) Finalise the assurance and testing answer
- [x] G1) Confirm the Welsh and accessibility commitment
- [x] H1–H3) Costed budget, payment schedule and other-funding answers written (confirm day rates, partner quotes and that there is no other funding)
- [x] Reword F1 so the academic partner and clinical safety officer match the H1 budget (decide whether to engage and cost an academic partner)
- [x] I1–I3) Answers written. Fill the carbon-reduction plan placeholder
- [x] J1–J2) Answers written. Fill the bracketed placeholders (dates, relationships, favourable terms, cost per 1,000 appointments)
- [ ] K) Read the contract and complete the declarations
- [ ] Check word counts against the limits in `spec/submission-template/submission-template.md`

## Review and submit (by 19 October 2026)

- [ ] Peer review: score every section 0–5 against the 16 Evaluation Questions criteria
- [ ] Acronym pass: define each acronym on first use in every section
- [ ] Check claims and citations
- [ ] Have a Welsh speaker review any Welsh text in the application or video
- [ ] Copy the answers into SimplyDo and submit
- [ ] Save a PDF of the submitted application to `spec/`

## If shortlisted (from 21 October 2026)

- [ ] Prepare a "Dragons' Den" deck (about 10 minutes) and a demo of the bilingual prototype flow
- [ ] Rehearse Q&A on IG, equity, Welsh language, cost and scalability
- [ ] Prepare to discuss contract terms

## Phase 1 delivery (November 2026 to March 2027), if awarded

- [ ] M1: Kickoff, DPIA started, data request submitted, discovery plan agreed
- [ ] M2: Discovery report and barrier taxonomy
- [ ] M3: Bilingual prototype v1 (messaging, barrier check, accessible formats, navigator pathway)
- [ ] M4: Usability test results (n ≥ 30, including ≥ 10 Welsh speakers) and risk model fairness audit
- [ ] M5: Feasibility report, business case, commercialisation plan and Phase 2 proposal (by 31 March 2027)

## Housekeeping

- [x] Add root `AGENTS.md`, `CLAUDE.md`, `llms.txt`, `llms.json` and `spec/index.md`
- [ ] Have a first-language Welsh speaker review all Welsh text, including `locales/cy-gb/`
- [ ] Write Welsh versions of D5 and E1 to H3 in `locales/cy-gb/submission/`
