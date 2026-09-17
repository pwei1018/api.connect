# Pre Go Live Release Schedule -UPDATED RELEASES NOTES

_Category: Past Releases · Source: BC Registries API community forum_

**Kaineatthelab** (1/18/2022):

Two releases are being made available this week in the Personal Property Registry sandbox:

* First release has been completed as of this afternoon, **Monday, January 17, 2022**
* Second release will be completed on * **Wednesday, January 19, 2022**

*Please note that there will be a code freeze starting Wednesday afternoon until post go-live, January 25, 2022.

 The API Release Management section of our [API Services site](https://bcregistries-daxiom.web.app/apis-summary/) has been updated as well and can be found near the bottom of the page.

We thank you for sharing this journey with us and appreciate everyoneâ€™s testing efforts!

---

**Kaineatthelab** (1/20/2022):

Personal Property Registry

Release Notes

Wednesday, January 19, 2022

Priority 1.0/1.5 tickets

|Zenhub Ticket #|Issue Description|
| --- | --- |
|8684|When searching, the Exact match counts sometimes differ between the Search Results and the entry in the My Searches table due to the same registration having multiple matches to the search parameter. Labels, text and tool tips were updated to better reflect what is being displayed. (related to 10695)|
|10695|The API was updated to reference Matches rather than Registrations as labels in the Search History table. (related to 8684)|
|10299|The Re-Register action will not be included in the PPR Go Live application. Removed Re-Register from the list of actions in the My Registrations table.|
|9850|GL coding updates for SBC Office PPR GARMS Codes to handle payments for services provided by SBC Staff.|
|10707|Display of General Collateral in Consolidated View of Financing Statement corrected.|
|10706|Inconsistent former_name data on amendments was corrected.|
|10720|For Business Debtor Search in the API, names of 2 characters or longer can now be searched.|
|10059|Validation issues on entering Date of Order for a Court Order have been corrected.|
|10735|Removal of Collateral Type EV from the database. This code was not part of the legacy PPR application.|
|10736|Removal of Collateral Type EV (Electric Motor Vehicle) from registration logic. This code was not part of the legacy PPR application.|
|10739|Discontinue Collateral Type AP (Airplane) for new registrations. This was replaced with Collateral Types AC and AF.|
|9948|For Amendment of Crown Charge registrations, Undo and Remove buttons for Secured Party have been enabled.|
|10705|Search against a registration after an infinite renewal resulting in an error has been corrected.|

Monday, January 17, 2022

Priority 1.0/1.5 tickets

|Zenhub Ticket #|Issue Description|
| --- | --- |
|10499|Fix to resolve internal errors when registering or submitting a saved draft registration.|
|10298|The search results report for Staff wasnâ€™t showing the correct Account Name, displaying as â€˜Not availableâ€™ or the wrong value.|
|10573|When logged on as SBC Staff, fee amounts displayed in the UI did not match the fee amounts in the Transaction list for the account.|
|10569|After a renewal, the original base registration verification statement was displaying with the updated Expiration Date rather than the original Expiration Date when registered.|
|10508|Word wrapping of extra long words wasnâ€™t occurring in tables. If the word didnâ€™t fit within the table width, it was being cut off.|
|10502|When a search was done by Business Debtor and the business name was long, the Business Debtor section of the PDF did not expand to fit the full business name and part of the business name overwrote search details in the section below.|
|10066|On Third Party registrations, the My Registrations table was displaying a PDF Info icon rather than the Info icon for the Verification Statement. This was corrected to only display the Info icon.|
|10544|Guidance text has been added for entry of the Individual Debtor Name in registration and amendment.|
|10652|Badges to identify data changes made in an amendment (Added, Amended, Deleted) have been corrected.|
|8759|Registration edit and validation rules were aligned between the UI and API.|
|10672|Some expired registrations were displaying in the My Registrations table with a status of Active. This was corrected to display Expired as the status.|

---

**Kaineatthelab** (1/20/2022):

||New reg EV schema validation error:

â€œerrorMessageâ€: â€œAPI backend third party service error.â€, â€œrootCauseâ€: â€œdetail:[Schema validation: â€˜EVâ€™ is not one of [â€˜ACâ€™, â€˜AFâ€™, â€˜APâ€™, â€˜BOâ€™, â€˜MHâ€™, â€˜MVâ€™, â€˜OBâ€™, â€˜TRâ€™].],message:003: Financing Statement request data validation errors.

â€œ}

New reg AP validation error: {â€œerrorMessageâ€: â€œAPI backend third party service error.â€, â€œrootCauseâ€: â€œdetail:[Additional validation: Vehicle Collateral type AP is not allowed. ],message:003: Financing Statement request data validation errors.

â€œ}|
