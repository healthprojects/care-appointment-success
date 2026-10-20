What the innovation is. One service that finds out why someone may not attend and responds to that barrier, instead of only reminding them. It joins five parts that are rarely combined: Welsh and English two-way messaging, a barrier-to-help map, a support-only fairness-audited tool, community navigators and released-slot backfill.

How we will address the challenge. We take an existing open-source reference system, the Patient Administration System (PAS), and test it with people and data in Phase 1. The research and development (R&D) is in six hard problems.

1. Fair, explainable prediction.

- Models can encode deprivation and ethnicity. Used for overbooking they harm the people who most need care: a US study found Black patients waited about 30% longer.

- Our tool is a transparent weighted score, not a black box. It uses only the patient's own attendance history, booking lead time, and the day and time of the appointment. Age, distance, language and deprivation are not inputs. They are used to audit.

- Staff see a band and plain-words reasons, not a bare percentage. The list of people to phone is a daily top-N matched to call capacity, not a fixed cut-off.

- Rule: the score can only trigger more support. A test that no score changes any slot, offer or reminder is a pass criterion, and the score stays switched off until named people approve its fairness and clinical safety reviews.

- We publish error rates by deprivation quintile (Welsh Index of Multiple Deprivation), age, sex and language, with the checks fixed before results are seen.

2. Matching a reply to the right appointment, in two languages.

- A text reply carries only a phone number and a few words. We map it to one appointment, ask back when there are several, and read Welsh and English keywords.

- Links in messages are single-use and safe. Opening a link shows a page, and only a deliberate tap confirms or cancels, because email security scanners follow links.

3. Welsh and English parity. Welsh characters such as ŵ and ŷ can change text-message encoding and length. Text-to-speech quality varies. Translations drift. A template cannot go live unless both languages exist, and first-language speakers review the content.

4. Integration without disruption. Appointments live in the Welsh Patient Administration System (WPAS). We must show we can read appointments, write back cancellations and avoid duplicate messages. The reference system's reply, release and standby interfaces become a concrete "what we need from WPAS" specification, assessed with DHCW and the health board's digital team.

5. Safety. A cancel on a clinician-listed urgent pathway is held and a person phones first. A miss triggers contact within 48 hours, never discharge. A hazard log starts in month 1.

6. Data protection. Minimised, pseudonymised data, UK hosting, role-based access, audit logs, opt-out and quiet hours, and a data protection impact assessment drafted with the health board's information governance team. Reports suppress small numbers.

Main technical deliverables:

1. Barrier taxonomy and journey map.

2. A tested bilingual flow for asking, helping and rebooking.

3. Accessible-format templates and a navigator pathway.

4. A validated support tool, fairness audit and model card.

5. An integration assessment and WPAS requirements.

6. An affordability model and a Phase 2 evaluation design.

R&D that proves merit:

- Scientific: retrospective validation, usability evidence, and a pre-registered fairness analysis.

- Commercial: running cost per 1,000 appointments and the benefit-to-cost ratio.

- Environmental: journeys and clinic sessions saved.

How it enhances care:

- Safety: urgent appointments get human follow-up, everyone still receives standard reminders, so an error cannot remove support.

- Compassion: wording is co-designed to be respectful and non-blaming, and the question is "what would help?".

- Continuity: a patient who cannot attend is rebooked, not lost.

Impact if deployed. A 20% relative reduction in misses (from 8.6% to about 6.9%) across the health board would free about 12,800 appointments a year, about £1.9 million of capacity. These are targets that Phase 1 tests. Phase 1 sends no live patient messages.
