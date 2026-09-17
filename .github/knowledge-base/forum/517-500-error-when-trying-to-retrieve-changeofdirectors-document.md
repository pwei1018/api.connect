# 500 Error when trying to retrieve changeOfDirectors document

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (5/1/2025):

Hello,

I completed a change of directors filing for BC3000235 and tried to retrieve the documents. I was able to retrieve the noticeOfArticles and receipt but am getting this error when I call this URL: https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000235/filings/1626785/documents/changeOfDirectors

```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:b'message: Internal server error ' "
}
```

Can you help look into why I'm getting this error?

Thanks,
Patty

---

**pattyw** (5/2/2025):

I'm having the same issue for another change of directors filing for the same company when I try to get the changeofDirectors document using this URL: https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000235/filings/1626788/documents/changeOfDirectors

---

**vsi** (5/2/2025):

Hi Patty, 
please if you could re-file  CoD, with `mailingAddress` property included for each director 

thanks!

---

**pattyw** (5/2/2025):

@vsi 

What should we do if the director doesn't have a mailing address? I just submitted a change of directors filing for BC3000264 where the fields for the mailing address are all empty strings:

```
{
    "filing": {
        "header": {
            "name": "changeOfDirectors",
            "date": "{{today}}",
            "certifiedBy": "First Last",
            "accountId": "XXXXX",
            "effectiveDate": "{{effectiveDate}}"
        },
        "business": {
            "foundingDate": "2025-05-02T23:10:14.066901+00:00",
            "identifier": "BC3000264",
            "legalName": "3000264 B.C. LTD.",
            "legalType": "BC"
        },
        "changeOfDirectors": {
            "directors": [
                {
                    "appointmentDate": "{{today}}",
                    "cessationDate": null,
                    "officer": {
                        "firstName": "Patty",
                        "middleInitial": "",
                        "lastName": "New",
                        "prevLastName": "",
                        "prevFirstName": "",
                        "prevMiddleInitial": ""
                    },
                    "actions": [
                        "addressChanged"
                    ],
                    "deliveryAddress": {
                        "streetAddress": "456 Bay Street",
                        "streetAddressAdditional": "",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "postalCode": "V7N 2N9",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "",
                        "streetAddressAdditional": "",
                        "addressCity": "",
                        "postalCode": "",
                        "addressRegion": "",
                        "addressCountry": ""
                    }
                }
            ]
        }
    }
}
```

But somehow it set the country for the mailing address to "GB"? In the change of directors document, the country says "United Kingdom" and when I get the directors for the company, it returns:

```
{
    "directors": [
        {
            "appointmentDate": "2025-05-02",
            "cessationDate": null,
            "deliveryAddress": {
                "addressCity": "Vancouver",
                "addressCountry": "CA",
                "addressRegion": "BC",
                "deliveryInstructions": "",
                "id": 4896759,
                "postalCode": "V7N 2N9",
                "streetAddress": "456 Bay Street",
                "streetAddressAdditional": ""
            },
            "mailingAddress": {
                "addressCity": "",
                "addressCountry": "GB",
                "addressRegion": "",
                "deliveryInstructions": "",
                "id": 4896760,
                "postalCode": "",
                "streetAddress": "",
                "streetAddressAdditional": ""
            },
            "officer": {
                "email": "[REDACTED_EMAIL]",
                "firstName": "PATTY",
                "id": 2588071,
                "lastName": "NEW",
                "partyType": "person"
            },
            "role": "director"
        }
    ]
}
```

---

**vsi** (5/5/2025):

Hi Patty, 
will check the scenario where its setting 'GB' for empty strings and get back to you. 

Have you tried sending a request with a mailing address , did it go through successfully?

thanks!

---

**achiu** (5/5/2025):

[quote="pattyw, post:5, topic:517"]
What should we do if the director doesnâ€™t have a mailing address? I just submitted a change of directors filing for BC3000264 where the fields for the mailing address are all empty strings
[/quote]

Hi Patty, 

Mailing address for a director is a required field.  We will be fixing this issue in the business API.  Please provide a director mailing address whenever you submit a CoD filing in the meantime.

Also, a submission of a mailing address with empty fields for most address fields will not pass validation when we fix the api.  At least on the schema level validation you will need to provide the streetAddress, addresCity, addressCountry and postalCode.
