# Incorporation Application - 402 Error

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (5/7/2025):

Hello,

I just tried an incorporation filing multiple times and the validation step passes but I keep getting a 402 error when actually submitting the filing:

```
"errorMessage": "API backend third party service error.",
    "rootCause": "errors:[message:unable to create invoice for payment.]
```

This is the payload:

```
{
    "filing": {
        "header": {
            "certifiedBy": "Patty",
            "name": "incorporationApplication",
            "date": "2025-05-07",
            "accountId": "XXXXX"
        },
        "incorporationApplication": {
            "nameRequest": {
                "legalType": "BC"
            },
            "nameTranslations": [
                {
                    "name": "Pattys Test Company"
                }
            ],
            "offices": {
                "recordsOffice": {
                    "deliveryAddress": {
                        "streetAddress": "555 Burrard Street",
                        "addressCity": "Vancouver",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "900 Corn Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                },
                "registeredOffice": {
                    "deliveryAddress": {
                        "streetAddress": "555 Burrard Street",
                        "addressCity": "Vancouver",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "900 Corn Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                }
            },
            "contactPoint": {
                "email": "[REDACTED_EMAIL]"
            },
            "parties": [
                {
                    "officer": {
                        "firstName": "Test",
                        "middleInitial": "",
                        "lastName": "User",
                        "partyType": "person",
                        "email": "[REDACTED_EMAIL]"
                    },
                    "roles": [
                        {
                            "roleType": "Completing Party",
                            "appointmentDate": "2025-05-07"
                        }
                    ],
                    "mailingAddress": {
                        "streetAddress": "456 Mailing Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 4G8",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "deliveryAddress": {
                        "streetAddress": "500 Parrot Lane",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 4G8",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                },
                {
                    "officer": {
                        "firstName": "Patty",
                        "middleInitial": "",
                        "lastName": "New",
                        "partyType": "person",
                        "email": "[REDACTED_EMAIL]"
                    },
                    "roles": [
                        {
                            "roleType": "Director",
                            "appointmentDate": "2025-05-07"
                        }
                    ],
                    "deliveryAddress": {
                        "streetAddress": "3 The Green Walk",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0J4",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "3 The Green Walk",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0J4",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                },
                {
                    "officer": {
                        "firstName": "Leo",
                        "middleInitial": "",
                        "lastName": "New",
                        "partyType": "person"
                    },
                    "roles": [
                        {
                            "roleType": "Incorporator",
                            "appointmentDate": "2025-05-07"
                        }
                    ],
                    "mailingAddress": {
                        "streetAddress": "60 Patterson Blvd",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 2L8",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                }
            ],
            "shareStructure": {
                "shareClasses": [
                    {
                        "name": "Class A",
                        "priority": 1,
                        "hasMaximumShares": false,
                        "maxNumberOfShares": null,
                        "hasParValue": true,
                        "parValue": 1,
                        "currency": "CAD",
                        "hasRightsOrRestrictions": true
                    }
                ]
            }
        }
    }
}
```

Is there a reason this error is occurring?

Thank you,
Patty

---

**achiu** (5/8/2025):

Hi Patty,

I just tried to submit an Incorporation application with no problem.

Please confirm whether this is still happening for you.

---

**pattyw** (5/8/2025):

It worked a few hours later and is working now but I've ran into this error before as well. Is there any information about why it would occur?

Thank you,
Patty

---

**achiu** (5/8/2025):

The sandbox is not a production environment.

We try to keep it as stable as we but there will be occasional issues and downtime.

If there are known windows of extended downtime, we will post on discourse ahead of time.
