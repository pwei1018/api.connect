# RESOLVED General Collateral formatting

_Category: Known Bugs · Source: BC Registries API community forum_

**Melissa** (1/22/2022):

Question: In testing today using \n for a new line or paragraph is not working.

Response: This bug was resolved in the January 26th release under ticket number 10808.

---

**chelsea.hansen** (1/24/2022):

Our team has also experienced this

1. I can not get a new line in the pdf no matter what kind of line brakes I sent. How can we do a line brake in the PDF to preserve the formatting?

```
{
  "type": "SA",
  "clientReferenceId": "A-00000402",
  "documentId": "D0034001",
  "authorizationReceived": true,
  "registeringParty": {
    "businessName": "ABC SEARCHING COMPANY",
    "address": {
      "street": "222 SUMMER STREET",
      "city": "VICTORIA",
      "region": "BC",
      "country": "CA",
      "postalCode": "V8W 2V8"
    },
    "emailAddress": "[REDACTED_EMAIL]"
  },
  "securedParties": [
    {
      "businessName": "BANK OF BRITISH COLUMBIA",
      "address": {
        "street": "3721 BEACON AVENUE",
        "city": "SIDNEY",
        "region": "BC",
        "country": "CA",
        "postalCode": "V7R 1R7"
      },
      "emailAddress": "[REDACTED_EMAIL]"
    }
  ],
  "debtors": [
    {
      "businessName": "Debtor 1 Inc.",
      "address": {
        "street": "721 Debtor Ave",
        "city": "Victoria",
        "region": "BC",
        "country": "CA",
        "postalCode": "A1A 1A1"
      },
      "birthDate": "1998-09-16T13:57:09+00:00",
      "emailAddress": "[REDACTED_EMAIL]"
    }
  ],
  "vehicleCollateral": [
    {
      "type": "MV",
      "serialNumber": "KM8J3CA46JU622994",
      "year": 2018,
      "make": "HYUNDAI",
      "model": "TUCSON"
    }
  ],
  "generalCollateral": [
    {
      "description": "Section 1: \n Line 1 \\n Line 2 \r\n Line 3 \\r\\n Line 4",
      "addedDateTime": "2020-02-21T18:38:20Z"
    },
    {
      "description": "Section 2: \n Line 1 \\n Line 2 \r\n Line 3 \\r\\n Line 4",
      "addedDateTime": "2020-02-21T18:38:20Z"
    },
    {
      "description": "Section 3: \n Line 1 \\n Line 2 \r\n Line 3 \\r\\n Line 4",
      "addedDateTime": "2020-02-21T18:38:20Z"
    }
  ],
  "lifeYears": 5,
  "trustIndenture": false
}
```
![image|690x396](upload://mnCkqusG4scqJd0xp7A9wRsRs4j.png)
