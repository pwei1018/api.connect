# Change of Directors - validation not providing any info

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/10/2025):

When attempting a change of directors filing, I'm getting an unclear error response, which simply appears to be a reflection of the request. I attempted this on a freshly incorporated company. Are you able to provide some feedback on why this would be, please? 

Request:
```
{
    "filing": {
        "header": {
            "certifiedBy": "Pamela Lowther",
            "email": "[REDACTED_EMAIL]",
            "name": "changeOfDirectors",
            "folioNumber": "66849-1",
            "date": "2025-04-10",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2025-04-10T22:16:26.904490+00:00",
            "identifier": "BC2000013",
            "legalName": "2000013 B.C. LTD.",
            "legalType": "BC"
        },
        "changeOfDirectors": {
            "directors": [
                {
                    "actions": [
                        "addressChanged"
                    ],
                    "officer": {
                        "firstName": "IAN",
                        "middleInitial": "H.",
                        "lastName": "HARDER",
                        "prevFirstName": "",
                        "prevMiddleInitial": "",
                        "prevLastName": ""
                    },
                    "deliveryAddress": {
                        "streetAddress": "619 Dominion Street",
                        "addressCity": "Kamloops",
                        "addressRegion": "BC",
                        "postalCode": "V2C 2X6",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "619 Dominion Street",
                        "addressCity": "Kamloops",
                        "addressRegion": "BC",
                        "postalCode": "V2C 2X6",
                        "addressCountry": "CA"
                    },
                    "appointmentDate": "2025-04-10",
                    "cessationDate": null
                }
            ]
        }
    }
}
```
Error response:
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[error],filing:business:foundingDate:2025-04-10T22:16:26.904490+00:00,identifier:BC2000013,legalName:2000013 B.C. LTD.,legalType:BC,changeOfDirectors:directors:[actions:[addressChanged],appointmentDate:2025-04-10,cessationDate:null,deliveryAddress:addressCity:Kamloops,addressCountry:CA,addressRegion:BC,postalCode:V2C 2X6,streetAddress:619 Dominion Street,mailingAddress:addressCity:Kamloops,addressCountry:CA,addressRegion:BC,postalCode:V2C 2X6,streetAddress:619 Dominion Street,officer:firstName:IAN,lastName:HARDER,middleInitial:H.,prevFirstName:,prevLastName:,prevMiddleInitial:],header:accountId:14723,certifiedBy:Pamela Lowther,date:2025-04-10,email:[REDACTED_EMAIL],folioNumber:66849-1,name:changeOfDirectors "
}
```

---

**vsi** (4/11/2025):

Hi Ian, 
will review this error scenario and get back to you

Thanks!

---

**vsi** (4/28/2025):

Hi Ian, 
we have released an updated postman collection, please review and retest

let me know for any further issues. 

Thanks!

---

**iharder** (6/12/2025):

The issue was that a change of directors needed an effective date. I've added this and it now goes through. This is where an appropriate structured error response would be helpful.
