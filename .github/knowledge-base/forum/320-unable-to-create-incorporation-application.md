# Unable to create Incorporation Application

_Category: Uncategorized · Source: BC Registries API community forum_

**marissa** (9/26/2024):

Hi there,

Thanks to the team for the newly released API sandbox.

Our team is running into an issue when trying to POST to /businesses to create an Incorporation Application. We're consistently getting a 503 Status code with the message below:
```
{
  "errorMessage": "API backend third party service error.",
  "rootCause": " error: Unable to create Incorporation Application Filing. "
}
```

Happy to share a redacted version of our input data if needed.

Thanks!

---

**karimjazzar** (10/2/2024):

Hi Marissa,

Hope all is well! Apologies for the late reply.

Regarding your question, do you still see the 503 Status code error? If yes, would you please be able to provide a redacted payload of what you're trying to POST and what exactly is the endpoint you're trying to hit (with query params)?

Let me know and thanks!

---

**marissa** (10/8/2024):

Hi, thanks for the reply. I have also sent an email as well but no one has been replying unfortunately. The endpoint we're trying to POST is https://bcregistry-sandbox.apigee.net/business/api/v2/businesses?draft=true&only_validate=false

And here is the redacted payload (I can't upload a text file):
{
  "filing": {
    "header": {
      "certifiedBy": "Tony Nguyen",
      "email": "[REDACTED_EMAIL]",
      "name": "incorporationApplication",
      "date": "2024-09-26",
      "accountId": "REDACTED"
    },
    "incorporationApplication": {
      "nameRequest": {
        "legalName": "Tonys cool test company 321",
        "legalType": "B"
      },
      "offices": {
        "registeredOffice": {
          "deliveryAddress": {
            "streetAddress": "delivery_address - address line one",
            "addressCity": "delivery_address city",
            "addressCountry": "CA",
            "postalCode": "H0H0H0",
            "addressRegion": "BC"
          },
          "mailingAddress": {
            "streetAddress": "mailing_address - address line one",
            "addressCity": "mailing_address city",
            "addressCountry": "CA",
            "postalCode": "H0H0H0",
            "addressRegion": "BC"
          }
        },
        "recordsOffice": {
          "deliveryAddress": {
            "streetAddress": "delivery_address - address line one",
            "addressCity": "delivery_address city",
            "addressCountry": "CA",
            "postalCode": "H0H0H0",
            "addressRegion": "BC"
          },
          "mailingAddress": {
            "streetAddress": "mailing_address - address line one",
            "addressCity": "mailing_address city",
            "addressCountry": "CA",
            "postalCode": "H0H0H0",
            "addressRegion": "BC"
          }
        }
      },
      "contactPoint": {
        "email": "[REDACTED_EMAIL]",
        "phone": "[REDACTED_ID_NUMBER]"
      },
      "parties": [
        {
          "mailingAddress": {
            "addressCity": "Victoria",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V8W 3E6",
            "streetAddress": "200-940 Blanshard St",
            "streetAddressAdditional": ""
          },
          "officer": {
            "email": "[REDACTED_EMAIL]",
            "firstName": "JOHN",
            "lastName": "DOE",
            "middleName": "",
            "organizationName": "",
            "partyType": "person"
          },
          "roles": [
            {
              "appointmentDate": "2024-09-26",
              "roleType": "Completing Party"
            }
          ]
        },
        {
          "mailingAddress": {
            "addressCity": "Victoria",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V8W 3E6",
            "streetAddress": "200-940 Blanshard St",
            "streetAddressAdditional": ""
          },
          "officer": {
            "email": "[REDACTED_EMAIL]",
            "firstName": "TONY",
            "lastName": "NGUYEN",
            "middleName": "",
            "organizationName": "",
            "partyType": "person"
          },
          "roles": [
            {
              "appointmentDate": "2024-09-26",
              "roleType": "Incorporator"
            }
          ]
        },
        {
          "deliveryAddress": {
            "addressCity": "Burnaby",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V5E 1R9",
            "streetAddress": "6767 Burford St",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Burnaby",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V5E 1R9",
            "streetAddress": "6767 Burford St",
            "streetAddressAdditional": ""
          },
          "officer": {
            "firstName": "Director",
            "lastName": "Test",
            "middleName": "",
            "organizationName": "",
            "partyType": "person"
          },
          "roles": [
            {
              "appointmentDate": "2024-09-26",
              "roleType": "Director"
            }
          ]
        }
      ]
    }
  }
}

---

**karimjazzar** (10/8/2024):

Hi Marissa,

Our team is looking into this. I'll get to you on this ASAP.

---

**karimjazzar** (10/9/2024):

Hi Marissa,

So the issue in the payload you're sending is in the "nameRequest" field. Specifically, the "legalType".

The ones that are supported for an **incorporationApplication** are: BC, BEN, CC, CP, ULC. Please keep in mind, in production, only BENs are currently supported and are able to be filed through our UIs and API.

We will get the specs updated with this.

Let me know if you have any questions or concerns. Thanks!

---

**marissa** (10/9/2024):

Thank you very much! This has resolved our issue

---

**tony.nguyen** (10/15/2024):

Hi there,

So we were able to get it to work as per updates based on your comments. But only when we set draft to true. When we run it with the same data but set draft as false we get 402 payment required. 

We also tried using the filings data from the response from when draft is true and called the same route with this data with draft equal to false but got invalid dates. After manually resolving the invalid dates and running it again we got the 402 payment required error again.

Wondering the steps are to incorporate a company from start to finish.

---

**vsi** (10/15/2024):

Hi Tony,
 
Hope all is well. For the API specs, they're not built to be able to handle a filing to completion. As of right now, you can only validate whatever filing you're trying to do. So this payment required error is a result of that.

---

**tony.nguyen** (10/16/2024):

Hi Vsi,

Thanks for the reply.

Oh i see, ok that makes sense. Just had another follow up question. So if we can't file to completion is there a way to test calling

GET /businesses/{identifier}/documents/{documentName}

to get the summary.pdf of a company?

We've tried calling this after creating the draft but just got no data available

---

**karimjazzar** (10/17/2024):

Hi Tony,

You won't be able to use that GET endpoint after creating a draft because it requires a completed business (not a temp one where the identifier starts with "T").

Business summaries aren't generated for drafts, only for completed ones.

Let me know if you have any other questions or concerns. Thanks!
