# Change of Address Filing Issues

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/6/2025):

The Change of Address filing in the Postman collection has some differences than those described in the schema, and I hope to get some clarification, as I've been getting some 500 errors in my attempts to file even though the validation succeeds:

1. LegalType is the first attribute of the changeOfAddressObject. The document describes this as the type of address although that would be confusing since there are two offices with two types of addresses so which one would it apply to? In postman this is populated with the legal type of the business, which is also odd since that is included in the business object. To clarify, this should be the business legal type?

2. There is an actions array within each address, with a single "addressChanged" value. This isn't in the schema. Is this required, and if so, should it only be submitted for the addresses that have changed in the case that one or more remain the same?

3. Each address contains an addressType ("delivery" or "mailing") which are not in the schema, but are also odd since those attributes are within objects that are named accordingly, suchas as deliveryAddress and mailingAddress. Are these required attributes?

---

**iharder** (4/7/2025):

As a followup, I've followed the JSON structure of the sample as closely as possible, but continue to get a 500 response when submitting the filing. Is there a process we can use to have someone identify the cause of 500 responses (or other unexpected responses)? I think it would be helpful to the BC team as well, since  you would want to avoid internal errors in the API.

---

**vsi** (4/8/2025):

Hi Ian, 
Would you be able to share the filing payload? 
Also, did you use the api-key, account-id, etc. to submit the request?

Thanks!

---

**vsi** (4/10/2025):

Hi Ian, 
following up on above request for details. 

Thanks!

---

**iharder** (4/10/2025):

My apologies. I missed your original response. It's currently failing to find the company I had incorporated, perhaps due to the ongoing affiliation changes. Also, yes, the API key and account Id were supplied as we're using the same code for that for all of our filings.  Here is the payload that is causing the 500 during the filing but not validation:

```
{
    "filing": {
        "header": {
            "certifiedBy": "Samuel Pickwick, Q.C.",
            "email": "[REDACTED_EMAIL]",
            "name": "changeOfAddress",
            "date": "2025-04-07",
            "accountId":  "XXXXX"
        },
        "business": {
            "foundingDate": "2025-03-26T22:34:46.744276+00:00",
            "identifier": "BC2000682",
            "legalName": "Test Organization Inc.",
            "legalType": "BC"
        },
        "changeOfAddress": {
            "legalType": "BC",
            "offices": {
                "registeredOffice": {
                    "deliveryAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "delivery",
                        "streetAddress": "6th Avenue SE",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    },
                    "mailingAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "mailing",
                        "streetAddress": "6th Avenue SE",
                        "streetAddressAdditional": "Suite 2100",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    }
                },
                "recordsOffice": {
                    "deliveryAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "delivery",
                        "streetAddress": "6th Avenue SE",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    },
                    "mailingAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "mailing",
                        "streetAddress": "6th Avenue SE",
                        "streetAddressAdditional": "Suite 2100",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    }
                }
            }
        }
    }
}
```
Note that I have tried with an without the 'legalType' within the changeOfAddress object, as well as with and without the 'addressType' attributes within the addresses. I've also masked our account ID.

---

**vsi** (4/10/2025):

Thanks Ian, 

we are not able to replicate this scenario on our end. 

Would it be possible to retest?
- Incorporate a new company, 
- File a CoA
- if the error persists, share the payload and filing id, so we can look at it in the logs

---

**iharder** (4/10/2025):

It seems that our companies were deleted this morning so that filing would have failed because the company couldn't be found. I incorporated another one and had the same problem. Unfortunately there is no filing number as it's returning a 500 with no data. Here is the input with the new company:

```
{
    "filing": {
        "header": {
            "certifiedBy": "Samuel Pickwick, Q.C.",
            "email": "[REDACTED_EMAIL]",
            "name": "changeOfAddress",
            "date": "2025-04-10",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2025-04-10T21:32:16.698744+00:00",
            "identifier": "BC2000009",
            "legalName": "Test Organization Inc.",
            "legalType": "BC"
        },
        "changeOfAddress": {
            "legalType": "BC",
            "offices": {
                "registeredOffice": {
                    "deliveryAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "delivery",
                        "streetAddress": "6th Avenue SE",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    },
                    "mailingAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "mailing",
                        "streetAddress": "6th Avenue SE",
                        "streetAddressAdditional": "Suite 2100",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    }
                },
                "recordsOffice": {
                    "deliveryAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "delivery",
                        "streetAddress": "6th Avenue SE",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    },
                    "mailingAddress": {
                        "actions": [
                            "addressChanged"
                        ],
                        "addressType": "mailing",
                        "streetAddress": "6th Avenue SE",
                        "streetAddressAdditional": "Suite 2100",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V3D 9D9"
                    }
                }
            }
        }
    }
}
```

---

**vsi** (4/11/2025):

Hi Ian, 
The 500 error that's being returnedâ€”does it look like this on your end, or are you seeing something different when you make the request?

![image|690x166](upload://vB8Gtba45PUy6gyZTf1hILlaYC3.png)

Thanks!

---

**iharder** (4/11/2025):

Hi @vsi. It looks like this:

```
{
    "message": "Internal Server Error"
}
```

---

**vsi** (4/11/2025):

thanks,

we will check and come back to you on this

---

**vsi** (4/28/2025):

Hi Ian, 
We have updated the postman collection on the developer site. Please review the latest collection and retest. Let me know for any issues

Thanks!

---

**iharder** (5/6/2025):

I have tested this filing after fixing the endpoint as a result of the discussion of this issue: https://discourse.onebc.ca/t/annual-filing-500-response, and it now works.
