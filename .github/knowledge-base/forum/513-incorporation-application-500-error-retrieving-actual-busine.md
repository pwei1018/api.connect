# Incorporation Application - 500 error retrieving actual business identifier

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (4/24/2025):

Hello,

I'm able to get a temporary identifier when I incorporate using this request:

```
{
    "filing": {
        "header": {
            "certifiedBy": "Patty",
            "name": "incorporationApplication",
            "date": "2025-04-24",
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
                        "streetAddress": "900 Test Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "900 Test Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                },
                "registeredOffice": {
                    "deliveryAddress": {
                        "streetAddress": "900 Test Street",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 0R2",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    },
                    "mailingAddress": {
                        "streetAddress": "900 Test Street",
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
                        "middleName": "",
                        "lastName": "User",
                        "partyType": "person",
                        "email": "[REDACTED_EMAIL]"
                    },
                    "roles": [
                        {
                            "roleType": "Completing Party",
                            "appointmentDate": "2025-04-24"
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
                        "streetAddress": "500 Test Lane",
                        "addressCity": "Burnaby",
                        "postalCode": "V5H 4G8",
                        "addressRegion": "BC",
                        "addressCountry": "CA"
                    }
                },
                {
                    "officer": {
                        "firstName": "Patty",
                        "middleName": "",
                        "lastName": "New",
                        "partyType": "person"
                    },
                    "roles": [
                        {
                            "roleType": "Director",
                            "appointmentDate": "2025-04-24"
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
                        "middleName": "",
                        "lastName": "New",
                        "partyType": "person"
                    },
                    "roles": [
                        {
                            "roleType": "Incorporator",
                            "appointmentDate": "2025-04-24"
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
                        "name": "Sample Shares",
                        "priority": 1,
                        "hasMaximumShares": true,
                        "maxNumberOfShares": 75000,
                        "hasParValue": false,
                        "parValue": null,
                        "currency": null,
                        "hasRightsOrRestrictions": false,
                        "series": []
                    }
                ]
            }
        }
    }
}
```

but when I try to retrieve the actual business identifier using the temporary identifier, I get this 500 response:

```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:Internal server error "
}
```

I noticed that if I change "hasMaximumShares" to false or remove the "series" field for the shareclass, then I'm able to get the actual business identifier. 

Is there some requirement for the values for "hasMaximumShares" and "series" for shareclasses that's causing the 500 error?

Thanks,
Patty

---

**vsi** (4/25/2025):

Hi Patty, 
we are reviewing the error and will get back to you with feedback

Thanks!

---

**vsi** (4/30/2025):

Hi Patty, 
Weâ€™ve identified this as an issue and are currently reviewing the root cause. A timeline for the fix will be confirmed later this week.

thanks!

---

**achiu** (5/23/2025):

Hi Patty,

I believe we'e resolved a database issue that was causing this problem.  

If this is still an issue, let us know.
