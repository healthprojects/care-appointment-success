# Templates for effective reminder messages

Effective reminder messages are concise, action-oriented, and include the exact details a patient needs to confirm or cancel.

## SMS Templates (Under 160 Characters)

Template 1: Direct with Simple Cancel Option (Highest Response Rate)

```txt
Hi [Name], you have an appointment with [Clinic/Doctor] on [Date] at [Time]. Please reply YES to confirm or NO to cancel. To reschedule, call [Phone Number].
```

Template 2: Short with Location Anchor

```txt
Appt Reminder for [Name]: [Date] at [Time] with [Clinic Name], [City/Branch]. Reply CANCEL if you can no longer make it. Thank you!
```

Template 3: Urgent / Short-Notice Reminder (24-Hour Notice)

```txt
Reminder: Your appt is tomorrow, [Date] at [Time] at [Clinic]. Pls arrive 5 mins early. Reply CANCEL if you cannot attend.
```

## Email Templates (Detailed & Logistical)

Template 1: General Appointment & Logistics Prep

```txt
Subject: Reminder: Your upcoming appointment on [Date]

Dear [Patient Name],

This is a reminder for your upcoming appointment at [Clinic Name].

- Date: [Date]
- Time: [Time]
- Provider: [Doctor/Clinician Name]
- Location: [Full Address / Building / Room Number]

How to prepare: Please arrive 10 minutes before your scheduled time to complete
any necessary paperwork. Remember to bring your current ID and a list of any
medications you are taking.

Need to change your appointment? If you need to cancel or reschedule, please
click the link below or call us at [Phone Number] at least 24 hours in advance.

[Manage Appointment Button / Link]

Kind regards,
[Clinic Name] Team
```

Template 2: Telehealth / Virtual Appointment

```txt
Subject: Link for your virtual appointment on [Date]

Dear [Patient Name],

You have a virtual telehealth appointment scheduled for [Date] at [Time] with [Doctor/Clinician Name].

How to join your video consultation:

1. Click this secure link 5 minutes before your slot: [Telehealth Link]

2. Ensure you are in a quiet, private room with a stable internet connection.

3. If you experience technical issues, the clinician will call your mobile number directly.

If you can no longer attend, please cancel here: [Cancellation Link].

Thank you,
[Clinic Name]
```

### Best Practices for Implementation

- Use Token Personalisation: Dynamically pull the patient’s first name, time, date, and practitioner name so the text doesn't look like generic spam.
- Keep Actions Binary: Give one clear path to change the booking (e.g., replying "NO" or clicking a single tracking link).
- Optimise Timing: Send the final text 24 to 48 hours beforehand. Sending it a week early increases the risk they will still forget on the day; sending it 2 hours early gives the clinic no time to rebook the slot.
