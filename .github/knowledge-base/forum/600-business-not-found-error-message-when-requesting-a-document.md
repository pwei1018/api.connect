# Business not found error message when requesting a document

_Category: Report an Issue · Source: BC Registries API community forum_

**Erin** (12/18/2025):

I have been trying to request a document that I have requested a number of times before but the following error comes up:

{
â€œerrorMessageâ€: â€œAPI backend third party service error.â€,
â€œrootCauseâ€: "details:\[\],message:Business not found. "
}

I have tried the v1 and v2 endpoints

sandbox.api.connect.gov.bc.ca/registry-search/api/v1/businesses/FM0467837/documents/requests

sandbox.api.connect.gov.bc.ca/registry-search/api/v2/businesses/FM0467837/documents/requests

---

**jessicamoll** (12/19/2025):

Hi Erin - after some investigation, our team has updated the URL for the business -API in our deployment configs. Please let us know if you continue to have issues.

---

**Erin** (12/19/2025):

Hi Jessica, Iâ€™m able to successfully request documents again. Thank you for your help!

---

**mariamar** (3/24/2026):

Hi all. I am getting the same error when using BC0605515, LP0782437 and LP0590147. 

Can someone help me, please?

---

**Jay.Sharp** (3/24/2026):

Hello, These entities you are trying to search do not exist on the modern application, only in the legacy application. Thatâ€™s why you are not able to search for them using the modern API. These need to be looked up in COLIN. Also please be aware that the SANDBOX environment doesnâ€™t not always have the same information that we would have in the PROD environment.

---

**mariamar** (3/24/2026):

Hi. I am using PROD. Do you mean by legacy about using the V1 API?

---

**Jay.Sharp** (3/24/2026):

Legacy as in these entities are not available yet on our application. They are only available on the older Legacy application COLIN

---

**mariamar** (3/24/2026):

Thank you for your reply. Is there a deadline by which those entities will be available?

---

**Jay.Sharp** (3/24/2026):

There is no date for those at this time.
