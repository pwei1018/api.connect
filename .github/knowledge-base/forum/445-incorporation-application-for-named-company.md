# Incorporation Application for Named Company

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (3/17/2025):

Hello,

From the demo Postman collection, when filing an incorporation application for a named company, both the "nrNumber" and "legalName" in the "nameRequest" object are set. 

If I leave out the legalName, then when retrieving the "Incorporation Application" document, the "Name Reserved" on the document is empty. Should the name not be populated based on the nrNumber? Otherwise, it seems like I could choose/send anything for the legalName and it wouldn't have to match the name associated with the nrNumber.

Thank you,
Patty

---

**davemck** (3/18/2025):

Hi Patty, 

What you are seeing is a limitation of the sandbox environment.  In Production, the NR validation will occur.

David

---

**pattyw** (3/18/2025):

Thank you, just wanted to confirm then that in production, we only need to send the nrNumber and not the legalName when incorporating named companies?

---

**achiu** (3/19/2025):

In production, we expect that the `nrNumber`, `legalName` and `legalType` be provided for the `nameRequest` block in the Incorporation Application filing json.

e.g.
```
      "nameRequest": {
        "nrNumber": "NR 1111111",
        "legalName": "xyz corp",
        "legalType": "BC"
      }
```
