# Change of Address Filing

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (6/10/2025):

Hello,

I submitted a change of address filing for BC3000400 using this request:

```
{
    "filing": {
        "header": {
            "name": "changeOfAddress",
            "certifiedBy": "First Last",
            "date": "{{today}}",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2025-06-10T18:14:54.997887+00:00",
            "identifier": "BC3000400",
            "legalName": "3000400 B.C. LTD.",
            "legalType": "BC"
        },
        "changeOfAddress": {
            "legalType": "BC",
            "offices": {
                "registeredOffice": {
                    "deliveryAddress": {
                        "addressCity": "delivery_address_change city",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "postalCode": "H0H 0H0",
                        "streetAddress": "delivery_address_change - address line one"
                    },
                    "mailingAddress": {
                        "addressCity": "mailing_address_change city",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "postalCode": "H0H 0H0",
                        "streetAddress": "mailing_address_change - address line one"
                    }
                },
                "recordsOffice": {
                    "deliveryAddress": {
                        "addressCity": "delivery_address_change city",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "postalCode": "H0H 0H0",
                        "streetAddress": "delivery_address_change - address line one"
                    },
                    "mailingAddress": {
                        "addressCity": "mailing_address_change city",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "postalCode": "H0H 0H0",
                        "streetAddress": "mailing_address_change - address line one"
                    }
                }
            }
        }
    }
}
```

but the status isn't changing to COMPLETED, it's currently PAID.

I followed what was in the Postman collection but I noticed there's differences from the API spec here: https://developer.connect.gov.bc.ca/oas/br/model/change_of_address - Specifically, the "legalType" says it should be "Type of address to be changed" but the Postman test uses "BC", the API spec doesn't have an "offices" object and the "officeType" isn't included in the Postman test.

Can someone confirm if the request is correct and why the filing can't be completed?

Thanks,
Patty

---

**achiu** (6/10/2025):

Change of address filing gets processed the following day.

If you still have issues tomorrow, please let us know.

---

**pattyw** (6/11/2025):

Thanks, it's completed now.

Can we assume the Postman collection request body is the correct one then? Because it's quite different from the API documentation for the change of address filing.

Thanks,
Patty

---

**achiu** (9/18/2025):

@pattyw Iâ€™ve taken a look at the spec and you are right about the misalignment around the postman collection and the spec.  Please use the postman collection as a reference in the meantime for this instance.

I did notice that we are still missing some things for COA even in the postman collection.

As you know we are in the process of reviewing the BE validation & the spec for all filings.  With that work, postman collections will be updated as required too.
