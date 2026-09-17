# PPR March 17 Release

_Category: Past Releases · Source: BC Registries API community forum_

**pheath** (3/17/2022):

**Ticket 11088/10889** - When a PPR search is performed, the list of exact match results and the list of partial match results on the Search Results screen will each be presented in order of Registration Date with the oldest registration first.

In the PDF output report of a PPR Search, the table of contents and all registration details within the report will be presented in order of Registration Date with the oldest registration at the top. Exact match registrations will remain bolded in the table of contents to distinguish them from partial match registrations selected for the report.

**Ticket 11204** - On entering a registration, when a user switched the Secured Party from Individual to Business after entering some individual information, the validation error on entering a Business Name didnâ€™t appear. This has been corrected.

**Ticket 11384** - If a registration was completed after 4 pm, the Days to Expire in the Registrations table was inaccurate. This has been corrected so the Days to Expire reflects the current expiry date displayed on the verification statement and search output.

**Ticket 10430** - Registering Party information for BC Registries Staff, BC OnLine Help Desk and Service BC Staff will default on Registration, Amendment, Discharge and Renewal activity as follows:

* BC Registries Staff - Information contained in Party Code 99990003
* BCOL Help Desk - Information from account
* SBC Staff - No default information

**Ticket 10271** - When completing and paying for a new PPR registration, the client will return to the PPR Dashboard with focus on the My Registrations table. This will allow the client to see the new registration entry that has just been added to the My Registrations table.

**Ticket 11476** - For Service BC Staff, if the Registering Party is not filled in when completing a registration, the screen will now recognize it as incomplete and prevent completion of the registration.

**Ticket 10631** - A typo in the field hint when adding Aircraft/Airframe collateral on a registration or amendment has been corrected.

**Ticket 11084** - Verification statements with a large number of vehicle collateral entries would not generate PDF documents. To prevent timeouts in report generation, clients will experience a slight delay in having the PDF verification statement document available on the dashboard.

**Ticket 11029** - Legacy registration type of Transition Tax Lien allows collateral to be optional. The Amendment logic has been updated to accommodate this.

**Ticket 10570** - Expiry Date/Time values will display in the time zone of the server (Pacific Time) rather than the time zone of the browser.

**Ticket 10407** - A count of the Vehicle Collateral associated with a registration has been added to the registration summary information to support edits related to number of collateral items.

**Ticket 11160** - Validation errors on Debtor Address Region and Postal Code fields were not halting completion of the address, causing errors when attempting to complete the registration. These errors are now being recognized.

**Ticket 11267** - A feature flagged enhancement for API users to filter query results by Client Reference ID/Folio Number, Registration Number and Start/End Date & Time.

**Ticket 10895** - Warning text has been added to encourage using plain text when copy and pasting into the General Collateral field to avoid formatting and font issues on PDFs and printed registrations.

**Ticket 10760** - Minimum length field edits have been applied to the Court Order fields. Court Name, Court Registry, Court File Number and Effect of Order fields will require a minimum 5 characters.

**Ticket 10522** - The introduction text for the Details Description field on an Amendment has been updated to more accurately reflect situations when data must be entered in the field.

**Ticket 11461/10104** - Leap years were causing inaccurate Days to Expiry figures. This has been corrected.

**Ticket 10796** - Expiry Dates and Days to Expire in the Renewal Verification Statement did not match. This has been corrected.

**Ticket 9825** - Once a Secured Party has been added to a registration by its party code, that Secured Party will appear with a green check mark indicating itâ€™s already been added to the registration if it appears in additional drop down lists for adding Secured Party by party code.

**Ticket 11545** - The timing of the display of the PDF icon on the Registrations table has been modified to only appear when the report is available.

---

**Kaineatthelab** (3/17/2022):

There was an issue where you weren't able to add a registration to your table added. It was resolved just now.
