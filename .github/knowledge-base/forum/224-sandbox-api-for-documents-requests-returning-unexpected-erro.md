# Sandbox - API for documents/requests returning unexpected error

_Category: Report an Issue · Source: BC Registries API community forum_

**Maries** (2/21/2023):

Is there a known issue in the sandbox for requesting BUSINESS_SUMMARY_FILING_HISTORY?

When I send the following request to  https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/FM0109284/documents/requests

{
  "documentAccessRequest": {
    "documents": [
      {
        "type": "BUSINESS_SUMMARY_FILING_HISTORY"
      }
    ]
  }
}

I get an error:
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:Business not found. "
}

![image|690x206](upload://3rQOsyRnD26ToU1Kw9kQ62g3GHV.png)

---

**jlane** (2/27/2023):

Hello,
There was an issue in the sandbox last week related to some behind-the-scenes AUTH changes.

Can you please retry some transactions? If you're still having issues please supply new screenshots. Find a business in sandbox via the facets endpoint as the sandbox data doesn't match production.
