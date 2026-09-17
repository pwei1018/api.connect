# Unable to file changes after Change of Address

_Category: Entities · Source: BC Registries API community forum_

**MKSi** (2/14/2025):

Hello,
Is there a validation in place that restricts filing changes through `POST /businesses/{identifier}/filings` endpoint after an address change has been filed? We noticed an error message `You are not authorized to submit a filing for BC2000154.` if we follow this sequence in the sandbox.
- File a change of directors (201 Success)
- File a change of address (201 Success)
- File a change of directors (401 Unauthorized)

Also, the Change of Address filing status remains `PAID` and doesn't change to `COMPLETED` after the `futureEffectiveDate` of the filing has passed. Is `PAID` the final status that confirms the filing was successful?

Thank you

---

**vysakh** (2/18/2025):

Sandbox will not process any future effective filings (for now). 

[In PROD] Change of Address take effect at 12:01 am Pacific Time. No other filings can be performed until an Address Change has taken effect (Change of Address will stay in PAID status until filing is processed)

Note: More details will be shared in the next meeting

---

**achiu** (5/23/2025):

[quote="MKSi, post:1, topic:398"]
Also, the Change of Address filing status remains `PAID` and doesnâ€™t change to `COMPLETED` after the `futureEffectiveDate` of the filing has passed. Is `PAID` the final status that confirms the filing was successful?
[/quote]

Future effective filings should work in the sandbox now.  Please try the scenario again from scratch.  Note that a change of address filing gets processed the next day. Until the change of address filing gets processed, I believe that subsequent filings cannot be submitted.

PAID is not the final status.  The final status of a successfully processed filing is 'COMPLETED'.
