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
