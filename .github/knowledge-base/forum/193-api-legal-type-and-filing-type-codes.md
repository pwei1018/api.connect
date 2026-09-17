# API Legal Type and Filing Type Codes

_Category: Uncategorized · Source: BC Registries API community forum_

**iharder** (9/22/2022):

The specification file for the Business API requires business type codes. The specification has enumerated list of business type codes (e.g. AB, BC, CP)  but no descriptions.

The Payment API specification has a handful of filing type codes (e.g. OTANN, BCINC, BCADD) in some embedded examples, but there doesn't appear to be a description of these codes, nor an enumerated list. It would be useful if these were mapped to the filing types that are enumerated in the business specification (e.g. annualReport, changeOfDirectors, changeOfAddress). The latter are self-explanatory as they are clearly named.

Are these codes and descriptions available somewhere?

Thanks in advance.

---

**chelsea.hansen** (9/22/2022):

We have also ran into this with the Registry-Search API

When making a search the initial call returns:

1. idenitifer
2. **legalType**
3. bn
4. status
5. name
6. score

**legalType** is an abbreviation â€“ like â€œBCâ€

We are most interested in initially obtaining the full entityDescription â€œBC Limited Companyâ€ instead of the abbreviation.

It appears to us that the full entityDescirption is not available until documents are ordered

is there an existing way we can obtain this the full entityDescription on the initial lookup call? Or can it be added to the initial lookup call?

---

**iharder** (10/19/2022):

Tagging @jlane to see if John knows the answer to this question.

---

**jlane** (10/19/2022):

Iâ€™ve attached a list of business types and their short description to aide your development and planning. Note that the short description likely wonâ€™t be included in the spec.

|CORP_TYP_CD| SHORT_DESC|FULL_DESC|
|---|---|---|
|A|EXTRA PRO|Extraprovincial Company|
|B|EXTRA PRO|Extraprovincial|
|BC|BC COMPANY|BC Company|
|C|CONTINUE IN|Continuation In|
|CEM|CEMETARY|Cemetary|
|CP|COOP|Cooperative|
|EPR|EXTRA PRO REG|Extraprovincial Registration|
|FOR|FOREIGN|Foreign Registration|
|LIC|LICENSED|Licensed (Extra-Pro)|
|LIB|LIBRARY|Public Library Association|
|LLC|LIMITED CO|Limited Liability Company|
|PA|PRIVATE ACT|Private Act|
|PAR|PARISHES|Parishes|
|PFS|PENS FUND SOC|Pension Funded Society|
|QA|CO 1860|CO 1860|
|QB|CO 1862|CO 1862|
|QC|CO 1878|CO 1878|
|QD|CO 1890|CO 1890|
|QE|CO 1897|CO 1897|
|REG|REGISTRATION|Registraton (Extra-pro)|
|RLY|RAILWAYS|Railways|
|SB|SOCIETY BRANCH|Society Branch|
|T|TRUST|Trust|
|TMY|TRAMWAYS|Tramways|
|XCP|XPRO COOP|Extraprovincial Cooperative|
|ULC|BC ULC COMPANY|BC Unlimited Liability Company|
|CUL|ULC CONTINUE IN|Continuation In as a BC ULC|
|UQA|ULC CO 1860|ULC CO 1860|
|UQB|ULC CO 1862|ULC CO 1862|
|UQC|ULC CO 1878|ULC CO 1878|
|UQD|ULC CO 1890|ULC CO 1890|
|UQE|ULC CO 1897|ULC CO 1897|
|CC|BC CCC|BC Community Contribution Company|
|CCC|CCC Continue In|Continuation In as a BC CC Company|
|S|SOCIETY|Society|
|XS|XPRO SOCIETY|Extraprovincial Society|
|SP|SOLE PROP|Sole Proprietorship|
|GP|PARTNERSHIP|General Partnership|
|LP|LIM PARTNERSHIP|Limited Partnership|
|XP|XPRO LIM PARTNR|Extraprovincial Limited Partnership|
|LL|LL PARTNERSHIP|Limited Liability Partnership|
|XL|XPRO LL PARTNR|Extrapro Limited Liability Partnership|
|MF|MISC FIRM|Miscellaneous Firm|
|FI|FINANCIAL|Financial Institutions|
|CS|CONT IN SOCIETY|Continued In Society|
|BEN|BENEFIT COMPANY|Benefit Company|

---

**iharder** (10/19/2022):

Thanks @jlane. That's helpful. There are probably more questions to come regarding the differences e.g. between A and B but for now this is great.

Do you also have a list of filing type codes?

---

**jlane** (10/20/2022):

Hello,
We are only publishing the Registry Filings API (Businesses) in order to support business search. The API won't support the submission of filings in the sandbox until a later date.

Can you confirm your intended use of the list of filing type codes? That could help me understand what other info you may need.

---

**iharder** (10/20/2022):

We're ultimately doing most/all of the business filings when they become available. Right now we're trying to code for the Pay API so we can retrieve applicable fees for the various filings so our users can see fee breakdowns prior to filing. I see BCINC (relatively obvious), as well as OTANN (?) and BCADD (?). Are you able to provide a list of whatever current valid codes are available at this time along with a description, and perhaps additional ones that will be available later? Thanks.
