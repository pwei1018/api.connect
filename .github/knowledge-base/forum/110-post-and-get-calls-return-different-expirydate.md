# POST and GET calls return different ExpiryDate

_Category: Known Bugs · Source: BC Registries API community forum_

**chelsea.hansen** (3/1/2022):

We found an expiry date issue on the registration of a new financing statement that seems not to happen consistently, but we have not located a pattern for it yet.

1. POST we receive response with expiryDate": "2022-08-24T06:59:59+00:00"- This does not match the date returned on the PDF Verification Statement

2. GET we receive response with expiryDate": " 2022-08-25T06:59:59+00:00" - This matches the PDF Verification Statement

We would expect that the date is the same in both instances. Is there any advise on this or are others experiencing it?

[details="request.json"]
```
{
    "type": "RL",
    "authorizationReceived": true,
    "registeringParty": {
        "personName": {
            "first": "PAR.FirstName",
            "last": "PAR.LastName",
            "middle": "PAR.MiddleName"
        },
        "address": {
            "street": "PAR.Address1",
            "city": "PAR.City",
            "region": "",
            "country": "CN",
            "postalCode": "M1M 1M1",
            "streetAdditional": "PAR.Address2"
        },
        "emailAddress": "[REDACTED_EMAIL]"
    },
    "securedParties": [
        {
            "businessName": "SP.BusinessName",
            "address": {
                "street": "SP.Address1",
                "city": "SP.City",
                "region": "",
                "country": "CN",
                "postalCode": "M3M 3M3",
                "streetAdditional": "SP.Address2"
            },
            "emailAddress": "[REDACTED_EMAIL]"
        },
        {
            "personName": {
                "first": "SP.FirstName",
                "last": "SP.LastName",
                "middle": "SP.MiddleName"
            },
            "address": {
                "street": "SP.Address1",
                "city": "SP.City",
                "region": "",
                "country": "CN",
                "postalCode": "M3M 3M3",
                "streetAdditional": "SP.Address2"
            },
            "emailAddress": "[REDACTED_EMAIL]"
        }
    ],
    "debtors": [
        {
            "businessName": "DEBTOR.BusinessName",
            "address": {
                "street": "DEBTOR.Address1",
                "city": "DEBTOR.City",
                "region": "",
                "country": "CN",
                "postalCode": "M2M 2M2",
                "streetAdditional": "DEBTOR.Address2"
            },
            "emailAddress": "[REDACTED_EMAIL]"
        },
        {
            "personName": {
                "first": "DEBTOR.FirstName",
                "last": "DEBTOR.LastName",
                "middle": "DEBTOR.MiddleName"
            },
            "birthDate": "2021-12-22T03:00:00-05:00",
            "address": {
                "street": "DEBTOR.Address1",
                "city": "DEBTOR.City",
                "region": "BC",
                "country": "CA",
                "postalCode": "V2V 2V2",
                "streetAdditional": "DEBTOR.Address2"
            },
            "emailAddress": "[REDACTED_EMAIL]"
        }
    ],
    "vehicleCollateral": [
        {
            "type": "AC",
            "serialNumber": "AC.Number",
            "year": 2001,
            "make": "AC.Make",
            "model": "AC.Model",
            "manufacturedHomeRegistrationNumber": "11"
        },
        {
            "type": "AF",
            "serialNumber": "AF.Number",
            "year": 2002,
            "make": "AF.Make",
            "model": "AF.Model",
            "manufacturedHomeRegistrationNumber": "22"
        },
        {
            "type": "MV",
            "serialNumber": "MV.Number",
            "year": 2003,
            "make": "MV.Make",
            "model": "MV.Model",
            "manufacturedHomeRegistrationNumber": "33"
        },
        {
            "type": "TR",
            "serialNumber": "TR.Number",
            "year": 2004,
            "make": "TR.Make",
            "model": "TR.Model",
            "manufacturedHomeRegistrationNumber": "44"
        },
        {
            "type": "BO",
            "serialNumber": "BO.Number",
            "year": 2005,
            "make": "BO.Make",
            "model": "BO.Model",
            "manufacturedHomeRegistrationNumber": "55"
        },
        {
            "type": "OB",
            "serialNumber": "OM.Number",
            "year": 2006,
            "make": "OM.Make",
            "model": "OM.Model",
            "manufacturedHomeRegistrationNumber": "66"
        },
        {
            "type": "TR",
            "serialNumber": "MH.Number",
            "year": 2007,
            "make": "MH.Make",
            "model": "MH.Model",
            "manufacturedHomeRegistrationNumber": "77"
        }
    ],
    "lienAmount": "10",
    "surrenderDate": "2022-02-24T03:00:00-05:00"
}
```
[/details]


[details="response.json"]
```
{
    "baseRegistrationNumber": "259216N",
    "createDateTime": "2022-02-25T01:46:02+00:00",
    "debtors": [
        {
            "address": {
                "city": "DEBTOR.CITY",
                "country": "CN",
                "postalCode": "M2M 2M2",
                "street": "DEBTOR.ADDRESS1",
                "streetAdditional": "DEBTOR.ADDRESS2"
            },
            "businessName": "DEBTOR.BUSINESSNAME",
            "emailAddress": "[REDACTED_EMAIL]",
            "partyId": 5833101
        },
        {
            "address": {
                "city": "DEBTOR.CITY",
                "country": "CA",
                "postalCode": "V2V 2V2",
                "region": "BC",
                "street": "DEBTOR.ADDRESS1",
                "streetAdditional": "DEBTOR.ADDRESS2"
            },
            "birthDate": "2021-12-22T08:00:00+00:00",
            "emailAddress": "[REDACTED_EMAIL]",
            "partyId": 5833102,
            "personName": {
                "first": "DEBTOR.FIRSTNAME",
                "last": "DEBTOR.LASTNAME",
                "middle": "DEBTOR.MIDDLENAME"
            }
        }
    ],
    "expiryDate": "2022-08-24T06:59:59+00:00",
    "lienAmount": "10",
    "payment": {
        "invoiceId": "14560",
        "receipt": "/api/v1/payment-requests/14560/receipts"
    },
    "registeringParty": {
        "address": {
            "city": "PAR.CITY",
            "country": "CN",
            "postalCode": "M1M 1M1",
            "street": "PAR.ADDRESS1",
            "streetAdditional": "PAR.ADDRESS2"
        },
        "emailAddress": "[REDACTED_EMAIL]",
        "personName": {
            "first": "PAR.FIRSTNAME",
            "last": "PAR.LASTNAME",
            "middle": "PAR.MIDDLENAME"
        }
    },
    "registrationAct": "REPAIRERS LIEN ACT",
    "registrationDescription": "REPAIRERS LIEN",
    "securedParties": [
        {
            "address": {
                "city": "SP.CITY",
                "country": "CN",
                "postalCode": "M3M 3M3",
                "street": "SP.ADDRESS1",
                "streetAdditional": "SP.ADDRESS2"
            },
            "businessName": "SP.BUSINESSNAME",
            "emailAddress": "[REDACTED_EMAIL]",
            "partyId": 5833099
        },
        {
            "address": {
                "city": "SP.CITY",
                "country": "CN",
                "postalCode": "M3M 3M3",
                "street": "SP.ADDRESS1",
                "streetAdditional": "SP.ADDRESS2"
            },
            "emailAddress": "[REDACTED_EMAIL]",
            "partyId": 5833100,
            "personName": {
                "first": "SP.FIRSTNAME",
                "last": "SP.LASTNAME",
                "middle": "SP.MIDDLENAME"
            }
        }
    ],
    "statusType": "ACT",
    "surrenderDate": "2022-02-24T08:00:00+00:00",
    "trustIndenture": false,
    "type": "RL",
    "vehicleCollateral": [
        {
            "make": "AC.Make",
            "model": "AC.Model",
            "serialNumber": "AC.NUMBER",
            "type": "AC",
            "vehicleId": 1316137,
            "year": 2001
        },
        {
            "make": "AF.Make",
            "model": "AF.Model",
            "serialNumber": "AF.NUMBER",
            "type": "AF",
            "vehicleId": 1316138,
            "year": 2002
        },
        {
            "make": "MV.Make",
            "model": "MV.Model",
            "serialNumber": "MV.NUMBER",
            "type": "MV",
            "vehicleId": 1316139,
            "year": 2003
        },
        {
            "make": "TR.Make",
            "model": "TR.Model",
            "serialNumber": "TR.NUMBER",
            "type": "TR",
            "vehicleId": 1316140,
            "year": 2004
        },
        {
            "make": "BO.Make",
            "model": "BO.Model",
            "serialNumber": "BO.NUMBER",
            "type": "BO",
            "vehicleId": 1316141,
            "year": 2005
        },
        {
            "make": "OM.Make",
            "model": "OM.Model",
            "serialNumber": "OM.NUMBER",
            "type": "OB",
            "vehicleId": 1316142,
            "year": 2006
        },
        {
            "make": "MH.Make",
            "model": "MH.Model",
            "serialNumber": "MH.NUMBER",
            "type": "TR",
            "vehicleId": 1316143,
            "year": 2007
        }
    ]
}

```
[/details]


Thanks,

---

**pheath** (3/2/2022):

Hi Chelsea!

This situation occurs when the registration is performed after 4 pm, resulting in timestamps stored in UTC with the next day.  Ticket 11323 will correct this issue and is at high priority.

---

**Melissa** (3/4/2022):

Please note the PDF verification statement date issue has now been resolved. Regenerating an impacted PDF will result in the correct date displaying. 

Additional work is underway to update the expiry date listed in the Registrations table.

---

**chelsea.hansen** (3/23/2022):

We did some testing today and we seem to come up with time conversion issue again. 
Our team suggests that it seems to be when a new financing statement is filed and the lifeYears for the registration is more than 15 years.

In Sandbox API
Registration submitted March 23, 2022 at 2:54:04 p.m. Pacific Time

in Postman, getting PDF result - correct expiry date is reflected- March 23, 2038
![PDF|690x202](upload://uTbg4zfaE8m3lApTtiG3uaHmtIR.png)

in Postman, getting JSON result -incorrect expiry date reflected - March **24**, 2038:
![JSON|690x194](upload://omibIsIcYmmnQlWc4OZ2IrQ0bBO.png)

UTC time zone conversion to PDT
![UTC Conversion|690x120](upload://b0Jp6liHZ9ll0uMOy6W8FsLlQFW.png)

---

**chelsea.hansen** (3/31/2022):

Renewal registrations also show this one day in JSON being off but PDF okay. 

When testing these renewals sometimes the JSON expiryDate would be correct but it seems like if it was renewed in the old PPSA system and the new renewal is for more that 10 years. In the example we are providing the Registration was renewed for 25 years prior to the new system and when we renewed it for more than 10 years, the expiry date came back one day later.

In the changes object the expiryDate is correct, but in the root is where we are see the expiryDate be different.

**JSON (line 80 expiryDate is different than line 8)**
![JSON - 652864I|518x499](upload://aadwmzkySAT12wzEfc15vRfIV8Y.jpeg)

**PDF**
![Snag_55cef6f|690x181](upload://uovRRJuHDKI2RsYWEpPrpgGyvGe.png)
![Snag_55cf8e5|690x302](upload://5SYwKjJCMjTqp2pRTaAjO9dCuEh.png)

---

**Melissa** (4/8/2022):

Hi @chelsea.hansen .

We have not been updating our sandbox with all of our recent API deployments. Our team has now made all recent db changes and deployed the latest API to the Sandbox. Can you confirm if this is still an issue?

---

**chelsea.hansen** (4/20/2022):

Our team had tested shortly after you had suggested and we ran into same date discrepancy in the sandbox.
I reviewed some registrations in production to see if any difference in operation in production, and same issue is occurring in production. 
If the registration life is more than 10 years, the Expiry date in the JSON root shows is one day later. Sample production registration is 665574N.

---

**Melissa** (5/5/2022):

@chelsea.hansen we've implemented 11944 in PROD to address the issue where POST and GET calls return different ExpiryDate. Can you take a look and confirm if this appears to be resolved?

Note from the discourse post on March 23rd above the expiry date should now say â€œ2038-03-24T06:59:59+00:00â€. It should be T06 instead of T07.

---

**chelsea.hansen** (5/12/2022):

Initial tests show this as being resolved. Thanks Melissa and team.

---

**Melissa** (5/13/2022):

Thank you for verifying Chelsea!
