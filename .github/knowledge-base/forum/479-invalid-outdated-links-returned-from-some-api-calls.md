# Invalid / outdated links returned from some API calls

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/2/2025):

There are some cases where links being returned seem to be incorrect. Two cases are:

1. The documents and comments links upon successful retrieval of the business identifier during incorporation still contain the temporary business number. I believe it should contain the new incorporation number.

2. When retrieving the business information (showing the filings available for the business), the filing link seems to be outdated. For example, the following retrieval:

https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC2000685

contains the following:

"filingSubmissionLink": "http:\/\/bcregistry-sandbox.apigee.net\/business\/api\/BC2000685\/filings"

We're attempting to use the links that are returned, but are not able to do so in these cases.

---

**vsi** (4/3/2025):

Hi Ian, 
I will check and get back with feedback today/latest by tomorrow. 

thanks!

---

**vsi** (4/3/2025):

Hi Ian, 
Itâ€™s been identified as an issue, and we're working on a fix. Iâ€™ll confirm once itâ€™s resolved and ready for testing

Thanks!

---

**vsi** (4/28/2025):

Hi Ian, 
We have released an updated postman collection, please review and retest

Let me know for any further issues. 

Thanks!

---

**iharder** (5/5/2025):

Hi vsi,

I received the updated postman collection, but am referring to response data, not request data.

I have retested and confirm that the first issue still exists, and the second issue has been resolved.

If you need further clarification please let me know.

Ian

---

**vsi** (5/5/2025):

Hi Ian, 
will review the scenario and get back to you on next steps. 

thanks!

---

**achiu** (5/5/2025):

Hi Ian,

Can you provide a specific example of a call you are making where you are not getting the expected response data?

---

**iharder** (5/5/2025):

When retrieving the response containing the incorporation number after an incorporation filing, the document link should then be a link with that incorporation number.  Instead, it contains the temporary  (Txxxxxx) number.  So, you canâ€™t use it to get the list of documents.

Here is an example. Note the documentsLink contains the temporary id. At this point it should contain the incorporation number so that it can be used to obtain the documents. Perhaps the commentsLink is incorrect as well, but I have not been using that.

```
{
    "commentsCount": 0,
    "commentsLink": "https:\/\/sandbox.api.connect.gov.bc.ca\/business\/api\/v2\/businesses\/TDZu49xg05\/filings\/1626872\/comments",
    "displayLedger": true,
    "documentsLink": "https:\/\/sandbox.api.connect.gov.bc.ca\/business\/api\/v2\/businesses\/TDZu49xg05\/filings\/1626872\/documents",
    "filing": {
        "business": {
            "adminFreeze": false,
            "allowedActions": {
            },
            "alternateNames": [
            ],
            "arMaxDate": "2025-05-05",
            "arMinDate": "2026-05-05",
            "associationType": null,
            "complianceWarnings": [
            ],
            "continuationOutDate": null,
            "dissolutionDate": null,
            "fiscalYearEndDate": "2025-05-05",
            "foundingDate": "2025-05-05T17:56:13.554290+00:00",
            "goodStanding": true,
            "hasCorrections": false,
            "hasCourtOrders": false,
            "hasRestrictions": false,
            "identifier": "BC3000280",
            "inDissolution": false,
            "lastAddressChangeDate": "2025-05-05",
            "lastAnnualGeneralMeetingDate": "",
            "lastAnnualReportDate": "",
            "lastDirectorChangeDate": "2025-05-05",
            "lastLedgerTimestamp": "2025-05-05T17:56:25.722956+00:00",
            "lastModified": "2025-05-05T17:56:25.722931+00:00",
            "legalName": "Test Organization Inc.",
            "legalType": "BC",
            "naicsCode": null,
            "naicsDescription": null,
            "naicsKey": null,
            "nextAnnualReport": "2026-05-05T07:00:00+00:00",
            "noDissolution": false,
            "restorationExpiryDate": null,
            "startDate": null,
            "state": "ACTIVE",
            "warnings": [
            ]
        },
        "header": {
            "accountId": "14723",
            "affectedFilings": [
            ],
            "availableOnPaperOnly": false,
            "certifiedBy": "Olga Baturina",
            "colinIds": [
            ],
            "comments": [
            ],
            "date": "2025-05-05T17:56:13.554255+00:00",
            "deletionLocked": false,
            "effectiveDate": "2025-05-05T17:56:22.847393+00:00",
            "email": "[REDACTED_EMAIL]",
            "filingId": 1626872,
            "folioNumber": "712",
            "inColinOnly": false,
            "isCorrected": false,
            "isCorrectionPending": false,
            "name": "incorporationApplication",
            "paymentAccount": "14723",
            "paymentStatusCode": "COMPLETED",
            "paymentToken": "20004305",
            "status": "COMPLETED",
            "submitter": "api-key-account-14723-sandbox"
        },
        "incorporationApplication": {
            "contactPoint": {
                "email": "[REDACTED_EMAIL]"
            },
            "incorporationAgreement": {
            },
            "nameRequest": {
                "legalName": "Test Organization Inc.",
                "legalType": "BC",
                "nrNumber": "12345"
            },
            "nameTranslations": [
                {
                    "id": "171",
                    "name": "TEST TRANSLATION A",
                    "type": "TRANSLATION"
                },
                {
                    "id": "172",
                    "name": "TEST TRANSLATION B",
                    "type": "TRANSLATION"
                }
            ],
            "offices": {
                "recordsOffice": {
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "addressType": "delivery",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "addressType": "mailing",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    }
                },
                "registeredOffice": {
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "addressType": "delivery",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "addressType": "mailing",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    }
                }
            },
            "parties": [
                {
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "id": "2588130",
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140 ",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    },
                    "officer": {
                        "firstName": "LLOYD",
                        "id": "2588130",
                        "lastName": "AASEN",
                        "middleInitial": "H.",
                        "middleName": "H.",
                        "partyType": "person"
                    },
                    "roles": [
                        {
                            "appointmentDate": "2025-04-06",
                            "id": "Director",
                            "roleType": "Director"
                        }
                    ]
                },
                {
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "id": "2588131",
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressCountryDescription": "Canada",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    },
                    "officer": {
                        "firstName": "OLGA",
                        "id": "2588131",
                        "lastName": "BATURINA",
                        "partyType": "person"
                    },
                    "roles": [
                        {
                            "appointmentDate": "2025-04-06",
                            "id": "Director",
                            "roleType": "Director"
                        }
                    ]
                }
            ],
            "shareStructure": {
                "shareClasses": [
                ]
            }
        }
    },
    "filingLink": "https:\/\/sandbox.api.connect.gov.bc.ca\/business\/api\/v2\/businesses\/TDZu49xg05\/filings\/1626872",
    "isFutureEffective": false
}
```

---

**achiu** (5/5/2025):

The intended usage of the business api is as follows for your scenario Ian.

1. Submit Incorporation Application Filing using POST https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses endpoint
2. Query filings endpoint with temporary identifier provide in response from step 1 to determine if Incorporation Application has completed.  GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/TDZu49xg05/filings
![image|467x500](upload://6EzEPJIp6SKN1obNqUDUbI2yngw.png)
3. Re-query filings endpoint with business identifier to get comments and documents link.  

```
GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000280/filings

{
  "filings": [
    {
      "availableOnPaperOnly": false,
      "businessIdentifier": "BC3000280",
      "commentsCount": 0,
      "commentsLink": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000280/filings/1626872/comments",
      "data": {
        "applicationDate": "2025-05-05T17:56:13.554290+00:00",
        "incorporationApplication": {
          "legalName": "Test Organization Inc.",
          "nrNumber": "12345"
        },
        "legalFilings": [
          "incorporationApplication"
        ]
      },
      "displayLedger": true,
      "displayName": "BC Limited Company Incorporation Application",
      "documentsLink": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000280/filings/1626872/documents",
      "effectiveDate": "Mon, 05 May 2025 17:56:22 GMT",
      "filingId": 1626872,
      "filingLink": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000280/filings/1626872",
      "isFutureEffective": false,
      "name": "incorporationApplication",
      "paymentStatusCode": "COMPLETED",
      "status": "COMPLETED",
      "submittedDate": "Mon, 05 May 2025 17:56:13 GMT",
      "submitter": "api-key-account-<redacted>-sandbox"
    }
  ]
}
```

---

**iharder** (5/6/2025):

Thanks Argus. I will then requery the filings endpoint. I presume there is then no utility to the links provided in the filing endpoint with the temporary id shown in step 2.

---

**iharder** (5/6/2025):

When testing for the second case, I indicated that it was fixed. However, I was just looking for a change to the new v2 path and didn't test the actual link, which is failing. Here is a (truncated) response showing the link. Note it is missing the '/businesses' part of the path after '/v2':
```
{
    "business": {
        "adminFreeze": false,
        "allowedActions": {
            "digitalBusinessCard": false,
            "filing": {
                "filingSubmissionLink": "https:\/\/sandbox.api.connect.gov.bc.ca\/business\/api\/v2\/BC3000073\/filings",
                "filingTypes": [
                    {

```

---

**achiu** (5/6/2025):

We will get the url returned in `filingSubmissionLink` fixed for the GET business endpoint.

---

**achiu** (5/6/2025):

There are use cases where the documents link in step 2 can be used. 

 After step 1(successful submission of incorporation application filing), the processing of the incorporation application filing is an asynchronous activity.  Most of the time it may be very fast but if things take a bit longer for the filing to be processed, the document links with the temporary identifier may be useful.

Basically, if the filing status(filing.header.status) == 'PAID' when you call the GET filings endpoint(GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/TfwJLIW2iK/filings), you can use the GET documents endpoint to retrieve the available documents before the incorporation application filing is processed.

example response when status == 'PAID'
```
GET https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/TQ1wB6PUKH/filings/1626888/documents


{
  "documents": {
    "legalFilings": [
      {
        "incorporationApplication": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/TQ1wB6PUKH/filings/1626888/documents/incorporationApplication"
      }
    ],
    "receipt": "https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/TQ1wB6PUKH/filings/1626888/documents/receipt"
  }
}
```

When the filing has been processed(status = 'COMPLETED'), this endpoint will return an empty documents list.  To retrieve applicable documents, the business identifier will need to be for all business api calls relevant to the business.

---

**achiu** (5/6/2025):

[quote="iharder, post:11, topic:479"]
When testing for the second case, I indicated that it was fixed. However, I was just looking for a change to the new v2 path and didnâ€™t test the actual link, which is failing. Here is a (truncated) response showing the link. Note it is missing the â€˜/businessesâ€™ part of the path after â€˜/v2â€™:
[/quote]

`filingSubmissionLink` should be returning correct URL for GET business endpoint now.
