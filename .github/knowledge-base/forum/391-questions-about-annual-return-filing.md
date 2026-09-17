# Questions about Annual Return Filing

_Category: Entities · Source: BC Registries API community forum_

**RPOwnr** (2/13/2025):

Hi team,

1. Can you provide a sample company to test annual report filing? We get the following validation error on trying to test this in the sandbox?
    `{"errorMessage": "API backend third party service error.", "rootCause": "errors:[error:Annual Report Date cannot be before a previous Annual Report or the Founding Date.,..}`

2. For filing the annual report, there is a discrepancy between the example request body and the directors schema in the documentation. Is the `id` property required for filing the change? If so, what should be the value passed to it?


```
{
...,
"directors": [
        {
          "officer": {
            "email": "[REDACTED_EMAIL]",
            "firstName": "firstName",
            "id": 584282, // What should be the id?
            "lastName": "lastName",
            "partyType": "person",
            "middleInitial": "",
            "prevFirstName": "firstName",
            "prevLastName": "lastName",
            "prevMiddleInitial": ""
          },
...]
}
```

3. In the Annual Return Schema, `annualGeneralMeetingDate`is not a required field. However, the latest announcement on Feb 04, 2025, lists mandatory changes. How do we validate these changes and send the right data points in the Annual Return filing?


```
* You will need to include information about your Annual General Meeting (AGM). There are three options to choose from:
  * The date the AGM was held, or
  * That the AGM will be held, or
  * The date the AGM was waived or deemed to have been held
```

Thanks

---

**achiu** (2/19/2025):

1. You can only submit filings for a business that is linked to the account an API key was created for.
2. The id property needs to match the id for the given director of your business.  This can be determined using the GET /businesses/<business_identifer>/directors endpoint.
3. Will get back to you on this.

---

**MKSi** (2/25/2025):

@achiu Thanks for your response. I have another question about the annual report schema. In the documentation it doesn't have a description of the following fields from the Annual Report Request example provided [here](https://bcregistry-demo.apigee.io/docs/businessproxy/1/routes/businesses/%7Bidentifier%7D/filings/post)
```
"directors": [
        {
          "officer": {...},
          "appointmentDate": "2024-07-23",
          "cessationDate": null,
          "deliveryAddress": {...},
          "mailingAddress":  {...},
          "role": "director",
          "id": 1, // missing from schema description
          "isFeeApplied": false, // missing from schema description
          "isDirectorActionable": true, // missing from schema description
          "actions": [] // missing from schema description
        }
      ]
```
The response from GET /businesses/<business_identifer>/directors endpoint is also missing these properties.

Please let us know if these are required and what should these values refer to?

Thank you.

---

**RPOwnr** (3/14/2025):

@achiu Hey, any updates to the unanswered questions in this thread?

---

**achiu** (3/19/2025):

@MKSi regarding your questions about the sample Annual Report Request containing fields not included in the schema, this is a mistake on our side.  The `id`, `isFeeAppied`, `isDirectorActionable` and `actions` fields are not required.  These fields are specific to the BC Registries applications and not applicable for Business API users.  We will clean this up across our API specifications request examples.

---

**achiu** (3/19/2025):

[quote="RPOwnr, post:1, topic:391"]
In the Annual Return Schema, `annualGeneralMeetingDate`is not a required field. However, the latest announcement on Feb 04, 2025, lists mandatory changes. How do we validate these changes and send the right data points in the Annual Return filing?
[/quote]

The schema definitions have required fields marked in a lot of cases.  This does not mean that this is the only validation that occurs.  More complex validation often occurs in the Business API when a filing is submitted.  As the schema definitions can be potentially used across different filings, we try to keep the schema definitions relatively simple in most cases to support different validation rules depending on the filing.

For the Annual Report filing, you should be able to test  the`annualGeneralMeetingDate` validation by either submitting an Annual Report filing in the sandbox without the `annualGeneralMeetingDate` field or you can use the `only_validate` query parameter to test validation only for a draft filing.

Example API request URL for validating a draft filing
```
PUT {{business-api-sandbox-base-url}}/businesses/BC1234567/filings/<filing_id>?draft=true&only_validate=true
```

---

**RPOwnr** (3/28/2025):

Thanks for the response.

Just to clarify, in the case where the shareholders sign a resolution in lieu of an AGM, do we need to provide the date of the signature of the resolution in the Annual Return API call?

---

**vsi** (3/31/2025):

Hi RPOwnr, 
We will review it and come back to you with feedback by Thursday!

thanks

---

**RPOwnr** (4/14/2025):

Hi @vsi ,

Any update on this?

---

**vsi** (4/14/2025):

Hi @RPOwnr, 
will confirm the details today

thanks!

---

**achiu** (4/14/2025):

No, the Annual Report filing endpoint does not support providing the date of signature of the resolution in the scenario where the shareholders sign a resolution in lieu of an AGM.
