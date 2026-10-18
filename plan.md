# Plan: Reducing Missed Appointments and Improving Access to Planned Care

## 1. Research summary

### 1.1 From the official challenge (see `spec/official-publications/Challenge-Brief---Reducing-Missed-Appointments-and-Improving-Access-to-Planned-Care_1790073987.md`)

- **Owner:** Cwm Taf Morgannwg UHB. It serves Rhondda Cynon Taf, Merthyr Tydfil and Bridgend. Main sites are Royal Glamorgan, Prince Charles and Princess of Wales hospitals.
- **Scale:** About 64,000 outpatient DNAs per year, an 8.6% DNA rate, and about £9.6m of avoidable lost value.
- **Causes named by CTM:**
  - late or ineffective appointment communication
  - transport and travel, including long distances
  - socioeconomic inequality
  - digital exclusion
  - caring and employment responsibilities
  - accessibility needs
  - wider social determinants of health
- **The challenge is deliberately open.** It does not prescribe any technology. Portfolio funding means several complementary projects may be funded.
- **Hard constraints:**
  - Welsh and English by design, with an equivalent experience in both languages and the Active Offer.
  - Accessible, meeting the Accessible Communication and Information Standards.
  - Affordable and scalable across Wales.
  - Integrates with existing systems.
  - Clinical oversight is not replaced.
  - No transport provision or subsidy.
- **Phase 1 activities:** discovery, co-design, feasibility, prototype, early testing, data analysis, service design and technical validation.
- **Governance:** Full information governance (IG) is not required yet, but we must show awareness of IG, data protection, cyber security, ethics and trust. Challenge partners will help.
- **Assessment:** Written form (sections A–K), then an in-person panel for shortlisted applicants.

### 1.1a From the guidance notes, evaluation questions, FAQs and contract

Sources: `spec/official-publications/*.md`.

- **Scoring:** 16 criteria, each scored 0–5. Sections A–C are unscored, but mandatory. The criteria are:
  - Understanding
  - Technical validity
  - Innovation
  - Care
  - Impact
  - Project delivery
  - Safety
  - Risk
  - Project team
  - Readiness
  - Testing
  - Accessibility and Welsh language
  - Finance
  - Social value
  - Commercialisation and timing
  - Financial viability
- **Limits:** The project can last at most 5 months. The cost cap is the one in the brief, including VAT. Costs must be at fair market value with no profit, and may include a realistic overhead element.
- **Payments:**
  - Payments are made on completed milestones.
  - 20% is held until completion and the closure report.
  - The contract (clause 4.3) lets the funder hold back up to 50% of a milestone that is only partly achieved.
  - Nothing is paid in advance.
  - Subcontractors must be paid within 30 days.
- **Milestones:** They must be SMART, include go/no-go stage gates and a payment schedule by month, and match the finance section exactly.
- **Required content by question:**
  - E1 must cover how intellectual property (IP) is handled, including with subcontractors.
  - E2 must group risks under Project Management, Material, Resources, Staffing, Patient Safety and Other, each rated red, amber or green.
  - D5 must cover existing IP and freedom to operate.
  - G1, if answered "Yes", must describe planned accessibility improvements and how Welsh speakers will use the solution. Translation costs go in section H.
- **Uploads:** The Gantt chart is a single PDF of at most 2 A4 pages. The video is at most 3 minutes.
- **Acronyms:** Keep them to a minimum and define each one per section, because sections may be read separately. Text over the word limit is not read.
- **Who can bid:** Contracts go to one legal entity only. Subcontracting and consultants are allowed. Charities and universities are eligible if they show a route to market.
- **IP:** The contractor keeps the project IP. The funder gets a royalty-free, non-exclusive UK licence and can require licences to third parties at a fair price. The contractor needs approval to assign the IP. If the IP is not exploited within 3 years, the funder can ask for it to be assigned. Background IP and project IP are recorded in contract Schedules C and B.
- **Contract:** It must be signed within 30 days of notification. Costs incurred before the start date cannot be claimed. Records must be kept for 6 years, and the funder may audit them on an open-book basis.
- **Stroke text:** The Challenge Brief PDF has no "Long-Term Vision" section. The stroke-rehabilitation text on the web page was a copy-paste error.

### 1.2 Derived numbers

| Derivation | Value |
|---|---|
| Lost value per DNA (£9.6m ÷ 64,000) | ≈ £150 |
| Total outpatient appointments (64,000 ÷ 0.086) | ≈ 744,000 per year |
| Value of 1 percentage point DNA reduction | ≈ 7,400 appointments ≈ £1.1m per year |
| Reducing the DNA rate from 8.6% to 7.0% | ≈ 11,900 appointments ≈ £1.8m per year |
| Phase 1 total pot vs one year of DNA loss | £200k ≈ 2% of annual lost value |

These figures are estimates. Lost value is not cashable saving, and CTM should confirm its method. See the stakeholder questions below.

### 1.3 External evidence (to verify and cite in the submission)

- **Reminders:** NHS England says reminders can cut DNAs substantially, and two-way reminders (where patients reply to cancel or rebook) work better than one-way ones. [NHS England: Reducing DNAs in outpatient services](https://www.england.nhs.uk/long-read/reducing-did-not-attends-dnas-in-outpatient-services/)
- **Message wording:** Two randomised controlled trials found that SMS wording which states the cost of a missed appointment lowered DNAs, from 11.1% to 8.4%. [Hallsworth et al., PLOS One 2015](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0137306)
- **Risk targeting:** In one pilot, AI risk stratification plus an extra reminder for high-risk patients reportedly cut very-high-risk DNAs from 48% to 16%. This is a vendor-reported claim and needs independent verification. [Netcall and Rotherham NHS FT](https://www.netcall.com/blog/ai-in-the-nhs-predicting-dnas-and-transforming-outpatient-care/)
- **CTM context:** CTM is at escalation Level 3 for planned care performance and outcomes, and is focused on long outpatient waits and follow-up backlogs. [CTM escalation framework, February 2026](https://www.gov.wales/cwm-taf-morgannwg-university-health-board-escalation-framework-february-2026-html) and [Public Accountability Meeting evidence pack, October 2025](https://www.gov.wales/sites/default/files/publications/2026-03/cwm-taf-morgannwg-university-health-board-public-accountability-meeting-23-october-2025-evidence-pack_0.pdf)
- **Equity risk:** DNA prediction models can encode deprivation and ethnicity. If they are used for overbooking, they can make access worse for the groups the challenge wants to help. We need to design against this explicitly.

## 2. Brainstorm

Ideas are grouped by the challenge's own solution areas. ★ marks ideas included in the proposed concept.

### Communication and engagement
- ★ Bilingual two-way reminders with one-tap confirm, cancel or rebook, sent by SMS, NHS Wales App, email and automated voice.
- ★ Reminder timing matched to the barrier. For example, send transport-related prompts 10 days ahead rather than 1 day ahead.
- ★ Behaviourally informed message wording, A/B tested in Welsh and English separately. Framings to test include social norms, the specific slot reserved for you, and the cost to the NHS.
- ★ Plain-language, easy-read, large-print, BSL-video and audio versions of appointment letters.
- Letter "decoder": the patient scans a letter with a phone and gets a plain-language summary in their preferred language.
- Pre-appointment "what to expect" micro-content for each specialty, to reduce anxiety-driven DNAs.

### Identifying who needs help
- ★ Equity-safe DNA risk stratification using the patient administration system (WPAS). Inputs include lead time, previous DNAs, specialty, distance and deprivation (WIMD). The output triggers *support*, never overbooking.
- ★ A self-reported barrier check ("Can you make it?") that captures needs the data cannot see.
- Contact-detail hygiene: find stale mobile numbers and addresses before the appointment letter is sent.

### Planning and scheduling
- Patient-chosen slots, with a choice of day and time within the clinic template.
- Clinic time or location matched to public transport timetables and school runs.
- Offer virtual or telephone consultations where they are clinically appropriate.
- ★ Released-slot backfill from a validated waiting-list pool.
- Validate long waiters ("do you still need this appointment?") to remove unwanted appointments.

### Practical and community barriers
- ★ Community "attendance navigators" hosted by third-sector partners, such as a county voluntary council or Citizens Advice, for high-need patients.
- ★ Signposting to existing support: the Healthcare Travel Costs Scheme, community transport, carers' services and employer letters. This does not fund transport, so it stays in scope.
- Childcare or carer cover signposting and appointment "buddy" volunteers.
- Community venue outreach clinics in Valleys localities.

### Service and pathway redesign
- Patient-initiated follow-up (PIFU) and See On Symptom (SOS) pathways, which reduce unnecessary follow-ups.
- DNA policy redesign so that a first DNA prompts contact rather than automatic discharge.
- Staff dashboard showing DNA hotspots by clinic, specialty and locality.

### Data-driven learning
- ★ An evaluation framework built in from day one: DNA rate by equity strata, language, channel and specialty.
- Root-cause text mining of the reasons patients give when they cancel.

### Rejected or deprioritised
- Overbooking based on risk score. This harms equity and conflicts with the challenge's aims.
- Financial penalties for patients. These conflict with NHS Wales principles and fall hardest on deprived groups.
- Funding taxis or buses. This is explicitly out of scope.
- An English-first build with Welsh translated later. This is explicitly excluded.

## 3. Proposed approach (Care Appointment Success)

**Principle:** Find out *why* each person might not attend, remove that barrier, and turn slots that cannot be used into care for someone else.

```
WPAS appointment data ──► Equity-safe risk + barrier signals ──► Tiered support
                                                                  ├─ Tier 1: bilingual two-way reminders (all)
                                                                  ├─ Tier 2: "Can you make it?" barrier check + signposting
                                                                  └─ Tier 3: human navigator call (highest need)
Patient cancels/rebooks ──► Released slot ──► Backfill from validated waiting list
Everything ──► Evaluation dataset (DNA, equity, language, channel, cost)
```

### Phase 1 scope (November 2026 to March 2027)

1. **Discovery:**
   - Analyse 12–24 months of anonymised CTM DNA data.
   - Interview patients, including Welsh speakers, disabled people, carers and digitally excluded people.
   - Map the current communication journey and systems (WPAS, text reminder supplier, NHS Wales App).
2. **Co-design:** Run bilingual workshops with patients, clinic booking staff and third-sector partners.
3. **Prototype:**
   - Build a bilingual two-way messaging and barrier-check flow in a sandbox.
   - Produce accessible letter formats.
   - Write the navigator script and referral pathway.
4. **Technical validation:**
   - Build a retrospective risk model on historical data, with a fairness audit across WIMD quintiles, age, sex and language preference.
   - Assess integration with WPAS and DHCW services.
5. **Early testing:** Run usability tests with at least 30 patients, at least a third of them Welsh speakers.
6. **Feasibility report and Phase 2 case:**
   - Projected impact, cost per DNA avoided and an affordability model.
   - Draft IG documents (DPIA outline, data flows).
   - An adoption route for other health boards.

## 4. Stakeholder questions

### CTM UHB: data and baseline
1. How are the 64,000 DNAs and the 8.6% rate defined? Do they cover new and follow-up appointments, and which specialties and sites? Are hospital-cancelled and patient-cancelled appointments excluded?
2. How was £9.6m calculated? Is it tariff, cost of the clinic session, or opportunity cost? Is any of it cashable?
3. Which specialties, clinics, sites and localities have the highest DNA rates and volumes?
4. What demographic fields are reliably recorded in WPAS? For example: language preference, communication needs, ethnicity, postcode and carer status.
5. Can we get a de-identified extract during Phase 1, and under what agreement and lead time?
6. How are DNA reasons captured today, if at all?

### CTM UHB: current process and systems
7. What reminder service runs today? Covering supplier, channels, timing, whether it is two-way, and whether it is available in Welsh.
8. How are appointment letters produced, and how long before the appointment are they sent?
9. What is the current DNA policy, for example discharge after one or two DNAs?
10. Is there an existing process for backfilling cancelled slots or validating the waiting list?
11. What is the status of the NHS Wales App and of DHCW integration APIs for appointments?
12. Which teams would own and run a solution after the project, and what is their capacity?

### Contracts for Innovation Cymru: commercial and process
13. What is the expected contract value range per project, given the £200k portfolio? How many projects do you expect to fund?
14. ~~Is the stroke "Long-Term Vision" section a copy-paste error?~~ **Answered:** yes, it is absent from the Challenge Brief PDF. Still worth asking: is there an intended long-term vision beyond the brief?
15. The 16 criteria are known, each scored 0–5 (see the Evaluation Questions). Are they equally weighted? What is the funding threshold? Is the video mandatory?
16. ~~What are the IP terms?~~ **Answered** by contract clauses 14–15: the contractor owns the project IP and the funder gets a royalty-free licence. Still to ask: who is the named "Authority" and funder in clause 14.3, and does the licence extend to all NHS Wales bodies?
17. ~~Are consortium bids welcome?~~ **Answered:** there is a single contracting entity, and subcontractors are allowed. Still to ask: are letters of support from subcontractors useful to assessors?
18. When will Phase 2 be decided and roughly how large will it be?

**18a.** Is there a maximum contract value per project? The guidance says "as noted on the challenge brief", but the brief gives only the £200,000 portfolio total.

**18b.** Does Phase 1 permit any live patient messaging, or should it be prototype-only? The draft assumes prototype-only, for safety.

### Clinicians and operational staff
19. What causes DNAs in your view, and how does that differ by specialty?
20. Which interventions have been tried before, and what happened?
21. Which appointments are clinically unsafe to miss? These would get Tier 3 priority regardless of risk score.
22. What extra admin load would staff accept, and what would they need removed?

### Patients, carers and third sector
23. What made you miss, or nearly miss, an appointment?
24. How do you want to be contacted, and in which language?
25. What would make it easier to cancel or rebook?
26. Which community organisations do you already trust?
27. For Welsh speakers: is Welsh currently offered proactively, and what is the experience like?

### Governance
28. Who are the Caldicott Guardian and IG leads? What is the DPIA route?
29. Is a patient-facing risk score acceptable, or should it stay internal only?
30. What cyber assurance is needed, for example DSPT, Cyber Essentials Plus or DTAC?

## 5. Key performance indicators (KPIs)

| # | KPI | Definition | Baseline | Phase 1 target | Phase 2 aspiration |
|---|---|---|---|---|---|
| K1 | Outpatient DNA rate | DNAs ÷ (attended + DNAs), for the pilot cohort | 8.6% (confirm per specialty) | Modelled reduction with a confidence interval | ≥ 20% relative reduction in pilot clinics (about 8.6% → ≤ 6.9%) |
| K2 | DNA equity gap | DNA rate in the most deprived WIMD quintile minus the least deprived | TBC in discovery | Measured and reported | Gap narrowed and never widened |
| K3 | Welsh-language parity | Welsh users' completion and satisfaction compared with English users | TBC | 100% of content bilingual; parity in usability tests | No significant gap |
| K4 | Slot reuse rate | Released slots rebooked ÷ slots released | TBC | Prototype flow proven | ≥ 60% of slots released ≥ 72h ahead |
| K5 | Patient experience | Would-recommend score or ease score from the barrier check and usability tests | TBC | ≥ 80% find it easy (usability) | ≥ 85% in live pilot |
| K6 | Value for money | (DNAs avoided × £150) ÷ solution running cost | n/a | Business case ≥ 3:1 | Proven ≥ 3:1 |
| K7 | Staff admin time | Booking-team minutes per clinic spent on DNAs and rebooking | TBC (time-and-motion study) | Baseline measured | Reduced |

## 6. Recommended metrics

### Outcome metrics
- DNA rate, split by: new vs follow-up, specialty, site, locality, WIMD quintile, age band, language preference, and communication or accessibility need.
- Late cancellation rate (under 48h) and early cancellation rate (72h or more), since early cancellation is the goal.
- Utilisation: slots used ÷ slots available.
- Wait times: effect on referral-to-treatment (RTT) time and outpatient waits in pilot specialties.
- Repeat DNA rate: the share of patients with 2 or more DNAs.

### Process metrics
- Message delivery rate, read rate and response rate, by channel and language.
- Barrier check completion rate, and the distribution of barriers reported.
- Navigator contact success rate and time to contact.
- Time from cancellation to rebooking, and backfill lead time.
- Contact-detail accuracy (bounced SMS and returned letters).

### Equity and inclusion metrics
- Welsh-language uptake as a share of all interactions, and whether Welsh was offered proactively (Active Offer).
- Use of accessible formats: easy-read, large print, BSL and audio.
- Digitally excluded reach: the share supported by voice, letter or navigator.
- Risk model fairness: calibration and false-negative rate across protected and deprivation groups.

### Economic and sustainability metrics
- Cost per DNA avoided, and cost per patient contacted.
- Value of released capacity at £150 per DNA (confirm with CTM).
- Estimated patient travel and CO₂ avoided through virtual conversions and fewer wasted journeys.
- Running cost per 1,000 appointments, which is the basis for scaling across Wales.

### Measurement approach
- Phase 1: retrospective analysis, usability testing and modelled impact.
- Phase 2: a stepped-wedge rollout or matched-clinic comparison, with pre-registered KPIs and equity sub-analysis.

## 7. Risks and mitigations

The full red/amber/green risk register, grouped under the headings the guidance requires, is in `submission.md` E2. Summary:

| Risk | Mitigation |
|---|---|
| Delays in data access or IG | Start the DPIA and data-sharing agreement in week 1. Fall back on aggregate or synthetic data. Use challenge partner support. |
| Risk model reinforces inequity | Use it for support only, never overbooking. Run a fairness audit. Get clinical and patient oversight. |
| Welsh quality below English | Budget for professional translation and review by first-language speakers. Write Welsh-first for some content. Test with Welsh speakers. |
| Integration with WPAS or the incumbent reminder supplier | Design integration-agnostic components (standards, APIs, CSV). Engage DHCW early. |
| Short timeline (about 4.5 months, including Christmas) | Tight scope and fortnightly sprints. Discovery and IG run in parallel. |
| Third-sector capacity | Formal subcontract with a costed navigator time allocation. |
| Staff burden | Co-design with booking teams. Automate rebooking. |
| Patient safety: an urgent appointment is cancelled in future live use | Urgent appointments always get human follow-up. A missed urgent appointment triggers contact, not discharge. Keep a hazard log. Phase 1 sends no live messages. |

## 8. Timeline (Phase 1)

| Month | Focus | Milestone |
|---|---|---|
| Nov 2026 | Mobilise, IG, stakeholder mapping, data request | M1 (30 Nov): kickoff, DPIA screening, discovery plan agreed; 15% payment |
| Dec 2026 | Discovery interviews, data analysis, journey mapping | M2 (23 Dec): discovery findings and barrier taxonomy; **Gate 1** (data access and addressable barriers); 20% payment |
| Jan 2027 | Co-design workshops, prototype build | M3 (29 Jan): bilingual prototype v1; 25% payment |
| Feb 2027 | Usability testing, model fairness audit, integration assessment | M4 (26 Feb): test results and model validation; **Gate 2** (success criteria); 20% payment |
| Mar 2027 | Feasibility report, business case, Phase 2 proposal | M5 (31 Mar): final report and closure report; 20% retention payment |

## 9. Research update and suggested improvements (17 October 2026)

Web research with standard searches only. Findings are secondary sources and need checking at the original source before they go into the submission. Items marked **verify** are not yet confirmed.

### 9.1 What the research found

| Finding | Source | Implication |
|---|---|---|
| Text reminders beat no reminder and postal reminders, and perform about the same as phone calls. The pooled evidence (8 RCTs, 6,615 participants, to August 2012) is rated low to moderate quality. | [Cochrane CD007458](https://www.cochrane.org/CD007458) | Do not claim a large pooled effect for reminders. Frame Phase 1 as testing wording and barrier-matching, where our evidence is stronger. |
| Stating the cost of a missed appointment cut DNAs by about 3 percentage points in two RCTs of about 10,000 outpatients each. | [Hallsworth et al. 2015](https://pmc.ncbi.nlm.nih.gov/articles/PMC4569397) | Keep "cost to the NHS" as a Welsh and English A/B arm. Check it is acceptable in Welsh and for equity (it can read as blame). |
| NHS England's 2023 letter reports a 7.6% DNA rate in 2021/22 (103m appointments). It asks for SMS-style reminders, easy cancel and rearrange, patient portals, and an assessment of digital literacy. | [NHS England](https://www.england.nhs.uk/long-read/reducing-did-not-attends-dnas-in-outpatient-services/), [HTN summary](https://htn.co.uk/2023/02/16/the-role-of-digital-in-nhs-englands-letter-on-reducing-did-not-attend-rate/) | CTM's 8.6% is above the English 2021/22 figure. Use this as the comparator and as the baseline expectation: reminders and easy rebooking are table stakes, not the innovation. |
| Forward booking time was the best predictor of DNA rates in one general-practice study. Structural changes to the appointment system were judged more effective than patient behaviour work. | [BJGP 2021](https://bjgp.org/content/71/702/e31) | Add lead time as a first-class lever (shorter notice, patient-chosen slots), not only a risk-model input. Applies to GP data, so **verify** for outpatients. |
| NHS Scotland guidance links patient-choice booking to lower DNA rates. | [NHSScotland CEL 2012/33](https://www.publications.scot.nhs.uk/files/cel2012-33.pdf) | Supports the "patient-chosen slots" idea currently unstarred in section 2. |
| The NHS Wales App has shown hospital waiting-list entries and upcoming outpatient appointments since 31 October 2025. It does not change or cancel them. It shows health board contact details. It covers referrals and first appointments recorded in WPAS or C&V PMS from that date only. | [Practice notices](https://www.newtownmedicalpractice.nhs.wales/news/1693-nhs-wales-app-manage-gp-services-and-track-hospital-appointments), [Age UK guide](https://www.ageuk.org.uk/siteassets/documents/id205842-nhs-wales-app-guide_digital.pdf) | A real integration gap and our opening: the app is read-only. **Verify** with DHCW. Position CAS as the missing two-way layer, and do not assume app channel access in Phase 1. |
| Race-blind no-show models used with overbooking made Black patients wait about 30% longer. Removing priority slots, or adding an explicit disparity objective, closed most of the gap. | [Samorani et al., M&SOM](https://blogs.vcu.edu/business/?p=2131), [Healthcare IT News](https://www.healthcareitnews.com/news/study-scheduling-systems-lead-longer-wait-times-black-patients) | Strong, citable support for "support, never overbooking". US data and race, so say so. For Wales the proxies are deprivation (WIMD) and language. |
| No current all-Wales DNA rate was found. The latest in the results was 8.6% for 2016–17. | [Welsh Government 2016–17 outpatient activity](https://www.llyw.cymru/sites/default/files/statistics-and-research/2019-01/171128-outpatient-activity-2016-17-en.pdf) | Do not describe 8.6% as an all-Wales current figure. Get the current rate from StatsWales or CTM. |
| Welsh PIFU evidence is thin (a 2022 Cardiff and Vale FOI response only). | [C&V FOI](https://cavuhb.nhs.wales/about-us/governance-and-assurance/freedom-of-information/disclosure-log/2022/months1/march-2022/foi-22-145-patient-initiated-follow-up-pdf/) | Keep PIFU out of scope as a pathway change. Treat it as an interface, not a claim. |

### 9.2 Suggested improvements to the concept

1. **Lead with barrier-matching, not reminders.** Reminders and easy rebooking are the baseline NHS England already expects, and the Cochrane evidence is modest. The differentiator is the barrier check plus tiered support. Reword the pitch, KPIs and D1 accordingly.
2. **Add booking-lead-time and patient-choice as levers.** Model DNA rate against lead time in discovery. Test "choose your slot" and shorter-notice offers. Needs CTM template flexibility, so add it as a stakeholder question.
3. **Define the NHS Wales App position.** The app is read-only for hospital appointments. Options: (a) deep-link from messages into the app, (b) propose a two-way action API to DHCW for Phase 2, (c) stay channel-independent. Choose (a) plus (c) for Phase 1.
4. **Make the equity guardrail testable.** Pre-register fairness checks: calibration and false-negative rate by WIMD quintile, age, sex and language. Add a rule that no score can reduce a patient's offered slots, and test it as a hard acceptance criterion.
5. **A/B test with an equity read-out.** Message wording trials need a per-quintile and per-language result, because "cost to the NHS" wording may help on average and harm trust in some groups.
6. **Measure digital exclusion before building for digital.** Following NHS England's digital-literacy suggestion, estimate the share of CTM outpatients without a usable mobile number or digital access. Size the voice, letter and navigator tiers from that.
7. **Contact-detail hygiene as an early win.** Stale numbers cap every reminder tactic. Promote it from unstarred to starred in section 2, with a bounce-rate KPI.
8. **Use honest evidence language.** Say "low to moderate quality evidence" for reminders, label the Rotherham result vendor-reported, and label the US scheduling study as US data. This helps the Safety and Technical validity criteria.
9. **Safety case for the future live phase.** Add an explicit rule that a cancel or no-reply on an urgent or cancer pathway triggers human contact. Start the hazard log (DCB0129/DCB0160 awareness) in M1. **Verify** the standards CTM expects.
10. **Prototype hygiene.** The Svelte prototype uses fictional data only. Keep that stated on every page and in the video, so panel members do not assume live integration.

### 9.3 New stakeholder questions

- 18c. Can clinic templates support patient-chosen slots or shorter notice, and who controls them?
- 18d. What is the current CTM and all-Wales outpatient DNA rate by specialty, and how is the £150 lost-value figure derived?
- 18e. Does DHCW plan two-way actions (cancel or rebook) in the NHS Wales App, and could an external service use them?
- 18f. What share of CTM outpatients have no usable mobile number on WPAS?
- 18g. Which clinical safety standards and hazard-log format does CTM require at Phase 1?

### 9.4 Second research pass: the earlier gaps

Extended searches on the four gaps. Same caveat as above: secondary summaries, to be checked at source.

| Topic | Finding | Source | Implication |
|---|---|---|---|
| Welsh language | The 2016–2019 evaluation of *More than just words* found Welsh-language access made a significant difference to many Welsh speakers' experience and, in many cases, their health and wellbeing. Good Active Offer practice often came from individuals or local initiatives, awareness was low, and uptake was stronger in social care than in health. | [Welsh Government statement, 2021](https://www.gov.wales/written-statement-strengthening-welsh-language-services-health-and-social-care), [evaluation summary](https://www.gov.wales/evaluation-more-just-words-follow-on-strategic-framework-summary), [action plan 2022–2027](https://www.gov.wales/sites/default/files/publications/2022-07/more-than-just-words-action-plan-2022-2027.pdf) | Our Welsh-first design addresses a known weakness. Cite it for relevance, not as proof of DNA impact. |
| Welsh language | A 2025 study found Welsh speakers value bilingual care but many are not offered Welsh. | [PMC12886726](https://pmc.ncbi.nlm.nih.gov/articles/PMC12886726/) | Supports recording language preference and offering Welsh proactively. |
| Welsh language | No evidence found on bilingual appointment letters or on Active Offer effects on attendance. | n/a | Our usability test (≥ 10 Welsh speakers) generates new evidence. Say so. |
| Navigators | No direct evidence that link workers or social prescribing reduce missed hospital appointments. Wider evidence on service use is mixed. | [NASP evidence](https://socialprescribingacademy.org.uk/nasps-evidence-reports/), [King's Fund](https://www.kingsfund.org.uk/insight-and-analysis/long-reads/social-prescribing) | The navigator tier is a hypothesis. Phase 1 should test acceptance and reach, not claim DNA impact. Keep it small and targeted. |
| Accessible formats | The Accessible Information Standard (DAPB1605, amended July 2025) applies in England. Wales has its own Accessible Communication and Information Standards covering appointment letters. Reported compliance is poor (RNIB: 77% of people with needs rarely or never get alternative formats). | [NHS England AIS](https://www.england.nhs.uk/long-read/accessible-information-standard-implementation-guidance/), [Welsh Government standards](https://www.gov.wales/accessible-communication-and-information-standards-healthcare-html), [RNIB FAQ](https://www.rnib.org.uk/campaign-with-us/support-a-campaign/my-info-my-way/nhs-accessible-information-standard-frequently-asked-questions/) | Use the Welsh standards as the compliance anchor, since the challenge requires them. Do not cite the English standard as the requirement. |
| Accessible formats | No study found linking easy-read or BSL letters to fewer DNAs. A 2013 hearing-loss report (14% had missed an appointment because they did not hear their name called) is an old extrapolation. | n/a | Frame accessible formats as an equity and compliance requirement, not a DNA lever. |
| Cost-effectiveness | No published cost per DNA avoided for two-way messaging. The Barts wording trial projected about 5,800 fewer missed appointments a year at no extra cost, from one site, with phone records for only about 20% of eligible patients. Other review figures (reminders cut DNAs by about 29–39%) are secondary. | [Hallsworth et al.](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0137306), [NHS England](https://www.england.nhs.uk/long-read/reducing-did-not-attends-dnas-in-outpatient-services/) | Our K6 value-for-money number will be new. Build it from CTM's real costs and avoid quoting the 80% or 34% figures. |
| Cost-effectiveness | Data quality limits reminders: the Barts trial reached only part of the patient list. | as above | Strengthens the case for contact-detail hygiene (§9.2 item 7). |

Further suggested improvements from this pass:

11. **Reposition the navigator tier as a test.** There is no direct DNA evidence, so state the hypothesis, the sample and the success measure (contact reached, barrier resolved, attended) in Phase 1, and avoid promising a DNA effect.
12. **Make Welsh evidence a deliverable.** Because no evidence exists on bilingual letters, add a Welsh versus English completion and attendance comparison to the Phase 2 evaluation design.
13. **Treat accessible formats as compliance.** Map each format to a clause of the Welsh standards in the prototype checklist, and keep it out of the impact claims.
14. **Build the K6 cost model from first principles.** Platform and staff cost, divided by DNAs avoided, with a sensitivity range, using CTM's own cost data and ranges rather than vendor percentages.

### 9.5 Remaining gaps

Not found: Welsh-specific DNA data after 2016–17, an NHS Wales App roadmap, a direct study of navigators and DNAs, and anything on BSL video in appointment contact. These are questions for CTM, DHCW and the briefing event.

## 10. Three capability ideas for the platform and the PAS (18 October 2026)

Three ideas were proposed for the platform and for a patient administration system (PAS). Each is adopted with changes, so that it matches the safety rule (a score or offer can only add support), the Welsh and English requirement, and the rule that Phase 1 sends no live patient messages. Evidence for each is a hypothesis to test. None of it is a claim about effect.

The reference implementation is the author's own PAS (`~/git/patient-administration-system`). It is not the Welsh Patient Administration System (WPAS). It already has structured cancellation reasons, a write-back API, release events and a standby list. Use it to write a concrete "what we need from WPAS" specification for Digital Health and Care Wales (DHCW).

### 10.1 Support-only no-show score

| Proposed | Adopted as |
|---|---|
| A "no-show probability" for every upcoming slot, weighted by past misses, lead time, age, distance and weather | A **may-benefit-from-support** list for staff, built first on lead time and past attendance |
| A colour-coded "High Risk" flag on the scheduling dashboard | Plain-words reasons plus a suggested action ("booked 11 weeks ago, no reminder confirmed, last letter bounced: suggest a call"), shown as text as well as colour |

Rules:

1. The score only adds support. It never overbooks, reduces slots or contact, or penalises. Test this as a hard acceptance criterion.
2. Do not use age, distance, language, disability, ethnicity or deprivation as inputs. Use them to **audit** flag rates and false-flag rates by group. Use distance to trigger travel help, not to score.
3. Past misses can reflect service failures (a letter not received). Prefer barrier codes and bounce data to raw miss counts.
4. Weather is weak evidence. Use it only as a same-day operational prompt ("snow forecast: offer phone or video"), not in the individual score.
5. Make no accuracy claim until the model has been checked locally on approved data. Report that it was validated, not that it works.
6. Show the top N that staff can act on, and log the action taken and the outcome.
7. A human decides every action, so UK GDPR Article 22 (solely automated decisions) should not apply. A data protection impact assessment (DPIA) and a DCB0129 hazard ("score wrongly lowers support") are still needed.

### 10.2 Stepped, multi-channel reminders with escalation

The PAS already stores channels in preference order (`print`, `email`, `sms`, `whatsapp`, `apple_messages`, `portal`) and plans a 7-day, 3-day and 24-hour cadence (REM-4). Adopted with these changes:

1. Route by the **individual's** stated preference and observed replies. Never route by demographic profile.
2. Count replies (confirm, cancel, rebook), not email opens, because mail apps pre-fetch images.
3. Give **everyone** the same escalation ladder when there is no reply. The score may only bring the phone call forward.
4. End the ladder with a person: a staff call list that shows the reason ("no reply to two reminders, text bounced"), with the outcome logged. Navigator evidence is stronger than reminder evidence, but it is a hypothesis for Phase 1 (see §9.4).
5. The 3-day touch carries the "can't come?" prompt, because it is the last point at which a released slot can still be refilled.
6. Add interactive voice response (IVR) as a channel for people without a smartphone, with Welsh and English prompts.
7. Guardrails before any escalation: a cap on touches per appointment, quiet hours, STOP and opt-out across channels, no clinical detail in SMS or WhatsApp, and WhatsApp opt-in and approved templates.
8. Record the whole ladder per appointment (channels tried, times, outcomes) so results can be split by language and deprivation quintile.
9. Test the fall-through to the next channel first (the PAS marks it FR-3, not yet tested).

### 10.3 Barrier-reduction tools

The barrier codes (`cannot_travel`, `caring`, `work`, `feel_better`, `unwell`, `forgot`, `other`) become a **barrier-to-help map**: the reply that records the reason also triggers the matching offer. Design it together with rebook options (CAP-5).

| Barrier | Offer (adds support only) |
|---|---|
| `cannot_travel` | Phone or video consult if clinically suitable, travel-help information, call-back from a navigator |
| `caring` | Phone or video consult, other time, call-back |
| `work` | Other time, evening or early slot, employer letter information |
| `feel_better`, `unwell` | Rebook, or a clinician check where the pathway is urgent |
| `forgot` | Rebook, and a reminder in a channel that works |

Rules:

1. **Telehealth flip.** Clinicians mark each appointment type as remote-suitable (video, phone, or neither). The flip is a **changed appointment** (a mode field), not an instant save, because it needs a clinician, a link or call-back number, and a freed room. Offer phone as an equal option to video. Monitor uptake by language and deprivation quintile, because remote care can widen gaps for digitally excluded patients. Evidence that it cuts missed visits is mixed.
2. **Transport.** Do not auto-dispatch a taxi or shuttle. Start with an information link and a staff or navigator call-back. In Wales, patient transport (NEPTS) is based on medical need, and the Healthcare Travel Costs Scheme reimburses qualifying low incomes. **Verify** current rules with the health board. The PAS holds only opaque `person_id` values, so a transport request carries a minimum reference and the patient's consent, and the address stays in the identity service.
3. Declining an offer must not affect the patient's slot, wait position or later contact.
4. Offers are in Welsh and English together, with no clinical detail in the message.
5. Log the offer, acceptance, completion and attendance, to give the evaluation a measurable path from barrier to attendance.
6. Add a DCB0129 hazard for "flipped to remote when an in-person assessment was needed". Remote mode and a transport-request hook are two integration points to assess with DHCW.

### 10.4 Where each idea sits

| Idea | Phase 1 (fictional data, no live messages) | Later |
|---|---|---|
| Support-only score | Fairness audit design, staff view in the prototype, retrospective check if data is released | Live pilot after DPIA and hazard log |
| Stepped reminders | Cadence, ladder and guardrail design, Welsh and English templates, prototype | Live sending in Phase 2 |
| Barrier-to-help map | Map, offers and wording tested in usability sessions | Remote mode and transport hook with DHCW |

Open questions for CTM and DHCW: which appointment types are remote-suitable, who owns the template and channel settings, whether WPAS exposes a remote-mode field, and which transport route CTM patients use today.

### 10.5 Predictive risk engine: requirements as proposed, and as adopted

A fuller requirements list for the score in §10.1 was proposed on 18 October 2026. It is adopted as the target design for the PAS and for Phase 2, with the changes below. Phase 1 builds the staff view and the fairness audit on fictional data only.

| # | Proposed | Adopted |
|---|---|---|
| 1 | A "No-Show Probability Score" of 0–100% for every appointment on creation, updated daily until the appointment date | Yes, as a daily batch job. Store each run with a model version, so a flag can be explained later. Show **bands**, not a raw percentage, until calibration is proven (a "73%" implies precision the model may not have) |
| 2 | Inputs: past attendance, lead time, age, distance from postcode, clinic type, day and time | Keep past attendance (with the caution in §10.1 item 3), lead time, clinic type, and day and time of day. **Drop age.** Use distance only to trigger travel help, not to score. Postcode-derived distance is personal data and a deprivation proxy. Clinic type, day and time are service factors, so they point at fixes the service controls (template, slot time) and not at the patient |
| 3 | Visual indicator (High, Medium, Low) next to the patient's name, from a configurable threshold | A band label in text and colour, shown to staff roles with permission, not on shared or reception-facing screens. Name the band by action ("Support suggested"), not by the patient ("High Risk"). The threshold is configurable by a named role and every change is logged |
| 4 | Automatic "High Risk" flag above 70%, routed to an operational dashboard for manual staff intervention | Routing to a **support worklist** is adopted: it only adds contact, so it matches the safety rule. A fixed 70% is not. Set the cut-off so the list matches outreach capacity (top N per day) and recheck it by group, since a fixed number can flag a third of one group and a tenth of another |

Further requirements, all testable:

1. No score, band or flag changes the patient's slot, wait position, priority or the number of reminders. Contact can only increase.
2. Every flag shows its reasons in plain words and a suggested action, in Welsh and English.
3. Staff can record "not helpful" or "already contacted". That feedback is reviewed monthly.
4. Pre-register the fairness checks: calibration, false-flag rate and miss rate by deprivation quintile, age, sex and language, before any results are seen.
5. A model card (inputs, data period, known limits), an access log for the score, and retention rules.
6. Run in **shadow mode** first: compute and log scores without showing them, and compare with actual attendance before any use. Do not hold back support from anyone to create a comparison group. Use a stepped rollout across clinics instead.
7. Safety case: a DCB0129 hazard for "score wrongly lowers support", a DPIA, and a named clinical safety officer.

### 10.6 Adaptive multi-channel reminders: requirements as proposed, and as adopted

A requirements list (FR-2.1 to FR-2.5) was proposed on 18 October 2026 for the reminder ladder in §10.2. It is adopted as the target design for the PAS and for Phase 2, with the changes below. Renumber when moving it into the PAS specification, because the PAS already uses FR-3 for channel fallback. Phase 1 designs the ladder, templates and call-to-action pages on fictional data and sends no live messages.

| Ref | Proposed | Adopted |
|---|---|---|
| FR-2.1 | Routing across SMS, WhatsApp, email and interactive voice response (IVR) | Yes. The PAS already has `print`, `email`, `sms`, `whatsapp`, `apple_messages` and `portal`. Add IVR with Welsh and English prompts |
| FR-2.2 | Use the patient's preferred channel from their profile | Yes. The preference is the patient's own, then what they have replied to. Add a fallback to the next channel on failure or bounce (the PAS marks this FR-3, not yet tested) |
| FR-2.3 | Configurable matrix: T-7 days, T-3 days, T-24 hours | Yes, configurable per clinic and urgency. Timing is changed, see below |
| FR-2.4 | If a high-risk patient does not acknowledge or open the T-3 email within 24 hours, escalate the T-24h reminder to SMS or IVR | Escalation is adopted, but for **everyone** with no reply. The score only brings it forward. The trigger is "no confirm, cancel or reschedule action", not "opened", because mail apps pre-fetch images |
| FR-2.5 | Every message has a call to action to Confirm, Cancel or Request Reschedule | Yes, with the safety rules below |

**Timing.** The PAS counts a cancellation as early release only with at least 3 days' notice (`EARLY_RELEASE_DAYS = 3`). A reply to a T-3 message is at 3 days or fewer, and a 24-hour wait after it lands at T-2, when a released slot is hard to refill. So:

1. T-7 carries the main "can't come?" prompt.
2. A second touch goes around T-4. A silent patient is escalated then by SMS or IVR, and then to a staff call if still silent.
3. T-24h is the final nudge.

**Call-to-action safety.**

1. Single-use tokens, with no personal data in the URL.
2. Opening a link shows a page. Only a deliberate tap confirms or cancels, because email security scanners follow links and could cancel appointments.
3. An "Are you sure?" step on Cancel.
4. Reply words limited to Confirm, Cancel, Reschedule and Help, in English and Welsh. IVR uses keypad options in both languages.
5. Reschedule leads to the rebook options (CAP-5).
6. A cancel or no reply on an urgent or cancer pathway triggers human contact.

**Tie each reply to one appointment.** A text reply carries a phone number and some words. Use a per-message reply token or "latest open reminder per number", and ask back when a patient has several appointments.

**Guardrails (unchanged from §10.2).** Touch cap per appointment, quiet hours, STOP and opt-out across all channels, no clinical detail in SMS or WhatsApp, WhatsApp opt-in and approved templates. Log each step of the ladder per appointment so results can be split by language and deprivation quintile.
