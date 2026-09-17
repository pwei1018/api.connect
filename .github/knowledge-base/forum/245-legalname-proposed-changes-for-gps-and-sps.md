# LegalName - proposed changes for GPs and SPs

_Category: Uncategorized · Source: BC Registries API community forum_

**Maries** (11/13/2023):

Hi there, I have a few initial questions for the changes proposed to update the specifications for the legalName and adding the alternateName array to the json format of the BUSINESS_SUMMARY_FILING_HISTORY.

1) Will the pdf version of the filing history also change to reflect these updates?
2) Is there a maximum length for the legalName field?
3) I don't know if it's possible to have parties other than the partners listed on the Business Summary - assuming it is, will only those entities with a roleType of Partner be listed in the LegalName? 
4) Will the number of alternateNames entries with alternateNames.identifier the same as the business.identifier be exactly 1, for all scenarios?

---

**achiu** (11/23/2023):

hi Marie,

Thanks for the questions. 

Please find my answers below.

>Will the pdf version of the filing history also change to reflect these updates?

Yes, any pdf documents in the filing history as well as the business summary will be updated to display the operating name for Sole Proprietorships and Partnerships where appropriate. 

> Is there a maximum length for the legalName field?

The legalName field has a maximum length of 1000.

> I donâ€™t know if itâ€™s possible to have parties other than the partners listed on the Business Summary - assuming it is, will only those entities with a roleType of Partner be listed in the LegalName?

For firms(SP/GPs), only role types of â€œPartnerâ€ or â€œProprietorâ€ will be displayed.

For Benefit and Cooperative companies, only role type of â€œDirectorâ€ will be displayed.

> Will the number of alternateNames entries with alternateNames.identifier the same as the business.identifier be exactly 1, for all scenarios?

A couple of things:

* Benefit and Cooperative companies may not have alternateNames entries. 
* If a Benefit or Cooperative company does have alternateNames entries, there wonâ€™t be a match where business.identifier == alternateNames.identifier
* Sole Proprietorships and Partnerships will always have one match where business.identifier == alternateNames.identifier.  This is used to identify the primary operating name for the firm.

Examples of the different alternateNames scenarios should be available in the previously posted document outlining the proposed Business API legal name changes.

https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-other-assets/legal_name_solution.pdf

---

**Maries** (11/23/2023):

Thank you, Argus, for the answers.

Your answers just bring up one more question :) and that is: 

Given that the pdfs will be updated to display the operating name, do you have any pdf samples of how the new Business Summary will look? If so, could you forward samples of a Partnership and a Sole Prop?

Note: only need samples of the Business Summary pdf, not other documents.

Thanks again,

Marie

---

**achiu** (11/23/2023):

> Given that the pdfs will be updated to display the operating name, do you have any pdf samples of how the new Business Summary will look? If so, could you forward samples of a Partnership and a Sole Prop?

The business summary pdfs will essentially look the same as before from a user's perspective.

For Sole Proprietorships and General Partnerships, the business summary and other filing documents will just be updated in the background to ensure the primary operating name is used where there are references to "Business Name". 

Just to be clear, I've provided two examples below to illustrate the section of the business summary that will be updated behind the scenes to reference the correct data.

![image|438x499](upload://9Pe7I3sWd8Li518yBA464dcpMz1.jpeg)

---

**Maries** (11/23/2023):

I think I got it - so the pdfs will display the same information as before (the operating name) , but BC will update the backend mapping to no longer map from the legalName?

Is that correct?

---

**achiu** (11/23/2023):

Yes, that's correct.

---

**Maries** (5/24/2024):

Hi there, I am still not seeing the LegalName updated to display the proprietor/partners name:

![image|690x413](upload://cJWYPQJBPY54fRh7vWDVDetwMMk.png)

Please advise.

Thanks,

---

**Maries** (5/24/2024):

or is it just that this api https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/{{identifier}}/documents/{{documentId}} is not impacted by the change?

---

**achiu** (5/24/2024):

Hi Marie,

We missed this change on the search api.  

A dev is working on a fix and we will roll out an update as soon as we have something ready.

Probably sometime early next week.

Will response to this thread when the update is available in the sandbox.

Argus

---

**achiu** (5/27/2024):

A fix for the search api endpoint(https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/{{identifier}}/documents/{{documentId}}) has been deployed to the sandbox @Maries.

Let me know if you still have any issues with the endpoint.

---

**Maries** (5/29/2024):

Thank you, I see the changes applied now:

![image|575x500](upload://3ktSiBXc5431Pop6YWhf6KLiye3.png)

---

**E2SC2** (6/4/2024):

Hi Argus,

Going through the provided PDF, I have a couple of questions:

1. Do you have example entities for each scenario provided in the PDF in the sandbox environment? I tried using the same entities from the PDF in the sandbox environment and they didn't exist.
2. Regarding translations, on page 7 of the PDF, there's an example of a Sole Proprietorship containing 2 translations of their business name. However, what happens if the entity has more than 1 alternate name - for example 2 - and each alternate name has a translation. How do we determine which translation belongs to which alternate name?

Example:
**ABC INC.**

Alternate Names:
ALTERNATENAME1
TRANSLATION1
TRANSLATION2
ALTERNATENAME2
TRANSLATION3
TRANSLATION4

How do we know if TRANSLATION3 is associated with ALTERNATENAME1 or ALTERNATENAME2?

If the interpretation of how 2 alternate names with translations will be returned is incorrect, do you have an example entity I could double check in the sandbox environment?

Thanks!

---

**achiu** (6/4/2024):

Hi @E2SC2, 

I've tried to find some businesses in the sandbox that match some of the scenarios in the PDF below.

As for name translations, the name translation is specific to the business being retrieved.  

For example, BC1398021 is a Benefit company and the name translation entry is for BC1398021.

BC1398021 also operates as the operating name specified under the FM1016272 alternate entry.  If a name translation existed, you would need to query FM1016272 specifically and reference the `alternateNames` field there.  

Just a note that name translations are not currently supported for SPs & GPs at this point in time.


## Sandbox Examples

**Sole Proprietorship**
* SP - FM0106453

**General Partnership**
One operating name
* GP with 2 partners - FM0515083
* GP with more than 2 partners - FM0563190

Multiple operating names
* GP with multiple operating names FM0831036

**Other Business Types (Benefit and Cooperative)**
* No operating names - BC1441400
* Multiple operating names - BC0789965
* Translation & operating name - BC1398021
