How we will address the challenge. We will build and test a bilingual attendance-support service. It combines two-way communication, a barrier check, fair risk flagging, community navigators and slot backfill.

What the innovation is. One service that finds out why a person may not attend and responds to that barrier, instead of only reminding them. It joins five parts that are rarely combined: Welsh and English two-way messaging, a barrier check, fairness-audited support flagging, community navigators and slot backfill.

Main technical challenges and our research and development (R&D) approach:

1. Fair, explainable prediction. Missed-appointment prediction models can encode deprivation and ethnicity. When used for overbooking, they worsen access for the people who most need care.
   - We will build an interpretable model, such as regularised logistic regression, on historical appointment data.
   - We will publish its accuracy and error rates by deprivation quintile (Welsh Index of Multiple Deprivation), age, sex and language preference.
   - It will be governed by a written rule: the model can only trigger *more* support. A US study found that no-show models used for overbooking made Black patients wait about 30% longer, which is why we exclude overbooking.
   - Fairness checks (calibration and false-negative rate by deprivation quintile, age, sex and language) are fixed before we see results. A test that no score reduces the slots or contact a patient is offered is a pass criterion.
2. Welsh and English parity in automated content.
   - Welsh characters such as ŵ and ŷ can force a different text-message encoding, which halves message length and doubles cost.
   - Welsh text-to-speech quality varies.
   - Translations drift as content changes.
   - Our response: a content model where both languages are equal, with review by first-language speakers and automated checks that block content existing in only one language.
3. Integration without disruption. Appointments live in the Welsh Patient Administration System (WPAS), and reminders may come from an existing supplier.
   - We must prove we can read appointments, write back cancellations and avoid duplicate messages, without replacing existing systems.
   - We will assess the options with Digital Health and Care Wales (DHCW) and the health board's digital team.
4. Closing the loop on replies. Free-text replies in either language, such as "can't come", must be matched to the right appointment and reach booking teams quickly enough to refill the slot.
5. Accessible formats by default. The right format (easy-read, large print, audio or British Sign Language) must be selected automatically from recorded communication needs, in line with the Accessible Communication and Information Standards.
6. Data protection and security by design:
   - minimised and pseudonymised data
   - UK hosting
   - role-based access
   - audit logs
   - alignment with the Digital Technology Assessment Criteria (DTAC) and Cyber Essentials Plus
   - a data protection impact assessment drafted with the health board's information governance team

Main technical deliverables:

1. A barrier taxonomy and journey map.
2. A bilingual prototype of messaging, barrier check and rebooking.
3. An accessible-format template set.
4. A navigator pathway.
5. A validated risk model, fairness audit and model card.
6. An integration assessment.
7. An affordability model and a Phase 2 evaluation design.

R&D to prove merit:

- Scientific: retrospective validation of the model, and usability evidence.
- Environmental: estimated journeys and clinic sessions saved.
- Commercial: running cost per 1,000 appointments, and the benefit-to-cost ratio.

How it enhances care:

- Safety:
  - Clinically urgent appointments always receive human follow-up.
  - A missed urgent appointment triggers contact, not discharge.
  - Every patient still gets standard reminders, so a model error cannot remove support.
  - A clinical safety hazard log is started in the first month.
- Compassion:
  - Messages are co-designed to be respectful and non-blaming.
  - The barrier check asks "what would help?" rather than warning.
  - Navigators offer a human voice to people who struggle with automated systems.
- Continuity: A patient who cannot attend is rebooked, not lost from the pathway.

Impact if deployed. A 20% relative reduction in missed appointments in the pilot clinics (from 8.6% to about 6.9%), if achieved across the health board, would free about 12,800 appointments a year. That is roughly £1.9 million of capacity, and we aim to narrow the deprivation gap rather than widen it. These are targets, which Phase 1 will test.
