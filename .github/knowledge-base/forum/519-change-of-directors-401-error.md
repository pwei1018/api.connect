# Change of Directors - 401 error

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (5/7/2025):

Hello,

I've been regularly submitting change of directors filings for BC3000264 the past couple of days but today, I'm suddenly getting this error:


```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:You are not authorized to submit a filing for BC3000264. "
}
```

Can someone look into this error?

Thank you,
Patty

---

**achiu** (5/8/2025):

The reason why a new CoD filing cannot go through for this business is because there is already a draft CoD filing.  In most cases, if there is a draft filing, you will not be able to perform another filing until the draft filing is submitted or deleted.

To resolve this 401 issue, you can either delete the draft CoD and re-submit the new CoD filing or finish submitting the saved draft filing.

If there is a need to check if there is a draft filing, the *GET tasks endpoint can be used.

GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000264/tasks
```
{
  "tasks": [
    {
      "enabled": true,
      "order": 1,
      "task": {
        "filing": {
          "business": {
            "foundingDate": "2025-05-02T23:10:14.066901+00:00",
            "identifier": "BC3000264",
            "legalName": "3000264 B.C. LTD.",
            "legalType": "BC"
          },
          "changeOfDirectors": {
          	...
          },
          "header": {
			...
            "filingId": 1626921,
            "name": "changeOfDirectors",
            "status": "DRAFT",
            "submitter": "api-key-account-<redacted>-sandbox"
          }
        }
      }
    }
  ]
}
```

Calling the GET business endpoint and referencing the `allowedActions.filing` list will also show what filings are permitted for a given business at a point in time. 

GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000264
```
{
  "business": {
    "adminFreeze": false,
    "allowedActions": {
      "filing": {
        "filingSubmissionLink": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000264/filings",
        "filingTypes": [
          {
            "displayName": "Transition Application",
            "feeCode": "TRANS",
            "name": "transition"
          }
        ]
      },
      "viewAll": false
    },
    ...
    "identifier": "BC3000264",
    ...
  }
}
```

---

**pattyw** (5/8/2025):

Thank you, I will add in these checks before doing a filing.
