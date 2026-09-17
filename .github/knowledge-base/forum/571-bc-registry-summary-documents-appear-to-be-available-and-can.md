# BC Registry summary documents appear to be available and can be purchased, but are not retrievable

_Category: Report an Issue · Source: BC Registries API community forum_

**cchimney** (9/17/2025):

Via API in BC Registry, documents appear to be available and can be purchased, but are not retrievable.

```
----Request Document Access----
POST {{gateway_url}}/registry-search/api/v1/businesses/BC1289264/documents/requests
BODY
{
  "documentAccessRequest": {
    "documents": [
        {
            "type": "BUSINESS_SUMMARY_FILING_HISTORY"
        }
    ]
  }
}

RESPONSE
{
    "businessIdentifier": "BC1289264",
    "businessName": null,
    "documents": [
        {
            "documentKey": "zBouOKwbS",
            "documentType": "BUSINESS_SUMMARY_FILING_HISTORY",
            "fileName": null,
            "id": 169406
        }
    ],
    "expiryDate": "2025-09-12T19:51:01.624841+00:00",
    "id": 163654,
    "outputFileKey": null,
    "paymentCompletionDate": "2025-08-29T19:51:01.624841+00:00",
    "paymentStatus": "APPROVED",
    "paymentToken": "9050843",
    "status": "COMPLETED",
    "submissionDate": "2025-08-29T19:51:00.666848+00:00",
    "submitter": "api-key-account-55402"
}

----Retrieve Document----
GET {{gateway_url}}/registry-search/api/v1/businesses/BC1289264/documents/zBouOKwbS

RESPONSE 404
{
    "errorMessage": "API backend third party service error.",
    "rootCause": " "
}
```

![image|690x443](upload://4AWk17zqySJnqWB8ytxZObOJneN.png)

---

**Melissa** (10/31/2025):

The Business Summary and Filing History documents are not currently available (UI or API) for BC Limited Companies. Work is in flight to enable this access at a later time.

I will proceed to request a refund, and look into dev changes on the back end to prevent payment for the summary while unavailable.

Sorry for the inconvenience.
