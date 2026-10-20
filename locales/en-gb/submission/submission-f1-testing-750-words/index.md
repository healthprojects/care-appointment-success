The principle. Every test has a pass criterion agreed before results are seen. Results feed the Gate 2 go/no-go decision in February 2027 and the final report. Phase 1 uses fictional appointments and sends no live patient messages.

What we test, and what counts as a pass:

| Area | How | Pass |
|---|---|---|
| Usability | Moderated tests with at least 30 patients, at least 10 Welsh speakers, including disabled people, carers, older people and digitally excluded people. Tasks run in each language across text, voice and letter | At least 80% task completion, with no significant gap between Welsh and English |
| Accessibility | Web Content Accessibility Guidelines (WCAG) 2.2 level AA; the Accessible Communication and Information Standards; screen readers; easy-read, large-print and audio versions tested with users | No serious failures open at Gate 2 |
| Welsh language | First-language review; automated block on any content in one language only; Active Offer checks at every contact point; message length with Welsh characters | Full parity; no template active in one language only |
| Reply handling | Test messages in Welsh and English, with typos and several appointments per number, matched to the right appointment | Wrong-appointment matches are zero in the test set; ambiguous cases are asked back |
| Link safety | Scripted scanners follow every link | No link action happens without a deliberate tap |
| Support tool | Held-out historical data; calibration; error rates by deprivation quintile, age, sex and language; model card | No group outside agreed error bounds; no score ever changes a slot, offer or reminder |
| Data quality | Share of patients with no usable mobile number; bounce rate | Measured and reported, because stale contact details limit every reminder |
| Integration | Read appointments, write back cancellations, avoid duplicate messages, against test data | Route agreed with the health board's digital team and Digital Health and Care Wales |
| Clinical safety | Hazard log following DCB0129 and DCB0160 from month 1; a clinician-approved list of appointments that must get human follow-up | Open hazards have owners and controls |
| Security and data protection | Secure development and automated tests; Digital Technology Assessment Criteria self-assessment; data protection impact assessment drafted with information governance | Self-assessment complete; penetration test planned before any live use |

Evaluation process:

- The test plan is agreed with the challenge lead at M1, so success is judged on criteria set in advance.
- Testing runs alongside build. Findings from each round are fixed and retested before the next.
- At Gate 2 we report against every criterion. Anything that fails is fixed or dropped from the Phase 2 recommendation, so a "go" covers only components that passed.
- The final report gives results against each criterion, what changed, the limits of Phase 1 evidence and the conditions for Phase 2. It is published in plain language, in Welsh and English.
- We design the Phase 2 real-world evaluation: clinics start in shadow mode, then go live one at a time, compared with clinics still in shadow, with no patient denied support to make a comparison. It measures DNA rate, refilled slots, cost per 1,000 appointments, and journeys and clinic sessions saved, reported separately for Welsh speakers and deprived areas.

Specialist support:

- Independent review. An academic statistician or health services researcher would review the model validation, fairness audit and Phase 2 design before results are seen. This is not yet budgeted in section H1. If we engage one, we will add the cost to sections H1 and H2. Until then, the data scientist writes the analysis plan before results are seen and the health board's data and evaluation advisers review it.
- Clinical safety officer. A qualified clinician provided through the health board as challenge-partner support owns the hazard log and approves the urgent-appointment list. If the health board cannot provide one, we will tell the funder at mobilisation.
- Welsh-language partner: first-language speakers review all content and run Welsh user tests.
- Voluntary-sector partner: recruits seldom-heard participants and hosts sessions in community venues.
- Health board advisers: clinical, information governance and digital advisers review safety, data protection and integration findings.
