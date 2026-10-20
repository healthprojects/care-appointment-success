Similar products on the market.

- One-way text reminders. Widely used in NHS Wales, usually English-first.
- Patient-engagement platforms with two-way messaging and digital letters, such as DrDoctor and Netcall.
- Artificial intelligence tools that predict missed appointments. Piloted in NHS England, mostly to target extra reminders or to overbook.

What these rarely do:

- give Welsh speakers an equal experience in dynamic and voice content
- ask why someone may not attend, and link the answer to help
- publish a fairness audit and a rule that scores never reduce care
- offer a human route for digitally excluded people
- close the loop from an early cancellation to a refilled slot

The novel concepts we develop.

1. Barrier-to-help map. The reason a patient gives when they cancel (cannot get there, cost, caring, work, unwell, worried, need help to communicate) triggers the matching offer: another time, a phone or video appointment where a clinician has approved it, travel information, or a call-back. This turns a reminder service into an access service.
2. Support-only prediction, enforced in design. The score can only add support. It ships switched off, with a written fairness review and a clinical safety review required from named people before it can be turned on. Clinics start in shadow mode and go live one at a time, with a before-and-after comparison. We know of no missed-appointment tool in Wales run under this explicit, audited rule.
3. One escalation ladder for everyone. Every silent patient moves to another channel and finally to a staff phone call. The score can only bring the call forward. Success is judged by replies, not by email opens, which are unreliable.
4. Bilingual by design, including voice and replies. Wording is tested separately in each language, and the system refuses to activate a template that exists in only one.
5. Digital with a human safety net. Community navigators reach people automation misses. This is a hypothesis that Phase 1 tests.
6. Reusable Wales-wide assets: the barrier taxonomy, content library, fairness-audit method and evaluation framework.

New tools and approaches we use:

- A bilingual content engine with parity checks.
- Single-use reply links that are safe from email scanners.
- A reply matcher for Welsh and English free text.
- A transparent score with a model card and fairness audit.
- Privacy-protected reporting, which withholds small numbers.

Existing intellectual property (IP) and freedom to operate.

- Background IP. The lead applicant's background IP is the Patient Administration System (PAS), an open-source system written in Rust with a web interface, which the lead applicant wrote and owns. [Confirm that no employer or other party has a claim on it.] It is free to use under the MIT, Apache 2.0, BSD 3-Clause or GNU General Public (version 2 or 3) licence, at the user's choice, so the funder and any health board can use it at no charge. It is not the Welsh Patient Administration System (WPAS). It is a reference design showing the reply, release and standby interfaces we would ask WPAS to support. It will be listed in the contract's register of background IP (Schedule C) before the start, and none of it is charged to this project.
- Freedom to operate means we can build and offer the service without infringing anyone's patents or licences. All dependencies have licences compatible with public-sector use, which we check automatically. [Confirm through a freedom-to-operate check that no patents restrict the approach.]
- Project IP belongs to us under the standard contract. The funder receives the licence the contract sets out, which supports adoption across NHS Wales.

Readiness. The reference software is a technology prototype that works on fictitious information only. It has automated tests, but it has never handled real patient data or sent a real message. The combined service has not been tried with patients. Phase 1 tests it with users and on historical data, which takes it to about technology readiness level (TRL) 5.
