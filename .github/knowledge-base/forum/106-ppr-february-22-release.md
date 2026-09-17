# PPR February 22 Release

_Category: Past Releases · Source: BC Registries API community forum_

**pheath** (2/22/2022):

Tickets 10901, 10902, 10903 - The Registrations table on the PPR dashboard has been upgraded with infinite scrolling. This will remove the restriction of having only 1000 registrations visible at any time, which impacted high volume API clients.

Ticket 10796 - Expiry dates reported in the Current and History sections of the Renewal Verification Statement were not in sync. This has been corrected.

Ticket 10869 - Duplicate registrations were sometimes being created with identical information. This issue has been fixed.

Tickets 11110, 11097 - Discharged registrations in the Registration table will only have the â€˜Remove From Tableâ€™ action available. No other actions will be allowed for a discharged registration.

Ticket 10432 - For BC Registries Staff, the Registering Party is now retrieved and reported properly on a registration.

Ticket 10146 - When renewing a Repairers Lien registration, dates up to the current date can now be selected for the Date of Order for the Court Order.

Ticket 11113 - In PPR outputs, badges to indicate added or deleted General Collateral text will now appear above the impacted text, making it clearer what was added and what was deleted.

Ticket 11062 - Enhancements for Amendment have been implemented including display of proper badges, screen navigation when no changes are made, and recognition of system formatted data values that should not be badged as a change.

Ticket 7405 - Folio field on PPR Search has been renamed and will be an open field for entry.

---

**chelsea.hansen** (3/1/2022):

[quote="pheath, post:1, topic:106"]
Ticket 11062
[/quote]

> Ticket 11062 - Enhancements for Amendment have been implemented including display of proper badges, screen navigation when no changes are made, and recognition of system formatted data values that should not be badged as a change.

We have a inquiry about badges - if in an Amendment a debtor name and address was changed, how will the badges show the verification statement?

We had an issue in the past where the name of a debtor was amended to include periods, like "ltd." - and a space as added in the postal code, from T9E0A9 to T9E 0A9. The Debtor showed as Added and Deleted, when one might have expected a "Name  Changed - formerly ___" and "Address Changed". Unsure if the release of this ticket amends this operation or if this is still being reviewed.

Thanks.

---

**pheath** (3/2/2022):

Hi Chelsea!

Debtor Name and Address changes should show as an amendment with the former name identified.  These scenarios are being dealt with in ticket 10805, which is currently in process.
