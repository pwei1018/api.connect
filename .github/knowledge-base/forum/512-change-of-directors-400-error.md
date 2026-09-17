# Change of Directors - 400 error

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (4/24/2025):

Hello,

I incorporated a new company (BC3000118) and tried to do a change of directors filing but am getting a 400 error that doesn't specify what the issue is.

Here's the request:

```
{
    "filing": {
        "header": {
            "name": "changeOfDirectors",
            "certifiedBy": "First Last",
            "date": "2025-04-24",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2025-04-24T19:21:45.384827+00:00",
            "identifier": "BC3000118",
            "legalName": "3000118 B.C. LTD.",
            "legalType": "BC"
        },
        "changeOfDirectors": {
            "directors": [
                {
                    "appointmentDate": "2025-04-24",
                    "cessationDate": null,
                    "officer": {
                        "firstName": "PATTY",
                        "middleInitial": "",
                        "lastName": "NEW",
                        "prevLastName": "",
                        "prevFirstName": "",
                        "prevMiddleInitial": "",
                        "email": ""
                    },
                    "actions": [
                        "addressChanged"
                    ],
                    "deliveryAddress": {
                        "streetAddress": "200 Changed Address",
                        "streetAddressAdditional": "",
                        "addressCity": "Vancouver",
                        "addressRegion": "BC",
                        "postalCode": "H0H 0H0",
                        "addressCountry": "CA"
                    }
                }
            ]
        }
    }
}
```

and the 400 error response:
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[error],filing:business:foundingDate:2025-04-24T19:21:45.384827+00:00,identifier:BC3000118,legalName:3000118 B.C. LTD.,legalType:BC,changeOfDirectors:directors:[actions:[addressChanged],appointmentDate:2025-04-24,cessationDate:null,deliveryAddress:addressCity:Vancouver,addressCountry:CA,addressRegion:BC,postalCode:H0H 0H0,streetAddress:200 Changed Address,streetAddressAdditional:,officer:email:,firstName:PATTY,lastName:NEW,middleInitial:,prevFirstName:,prevLastName:,prevMiddleInitial:],header:accountId:XXXXX,certifiedBy:First Last,date:2025-04-24,name:changeOfDirectors "
}
```

Thanks,
Patty

---

**vsi** (4/25/2025):

Hi Patty
we are reviewing the error and will get back to you with feedback

thanks!

---

**vsi** (4/28/2025):

Hi Patty, 
The issue seems to be the missed property `effectiveDate` in the `header` of the payload. We tested without this property, and got the same error message and when `effectiveDate` property was added  it went through

A sample header for CoD looks like this: 

JSON

```
"header": {            "name": "changeOfDirectors",            "certifiedBy": "First Last",            "date": "2025-04-25T",            "effectiveDate": "2025-04-25T14:00:00.000+00:00",            "accountId": {{account-id}}        },
```

Please retest with the property `effectiveDate` in the `header` of the payload. 

Thanks!

---

**pattyw** (4/30/2025):

Thank you, I was able to get the filing through by putting an effectiveDate but I don't think that's listed as a required field in the API specs (https://developer.connect.gov.bc.ca/oas/br/model/filing_header) and I didn't need to put an effectiveDate for the incorporation filing. 

Is the effectiveDate just for future effective filings or do we need to provide it for all filings?

---

**vsi** (5/5/2025):

Hi Patty, 
will check and confirm back 

thanks!

---

**achiu** (5/6/2025):

Hi Patty,

Only the change of director filing requires the `effectiveDate` field to be populated.  It's optional for all other filings.

We will be updating the Business API spec to add a note around this.

---

**pattyw** (5/6/2025):

Thanks Argus.

Is there a reason the `effectiveDate` is only required for the change of directors filing?
Also, can you confirm that these dates would be correct for this example scenario:

- Patty P is an existing director, ceasing on March 13, 2025
- Daniel D is a new director, appointed on March 13, 2025
- Filing is done today (May 6th 2025) at 2:45 pm.

Then in the filing header:
- The `date` field would be 2025-05-06
- The `effectiveDate` field would be the date and time of the filing: 2025-05-06T21:45:00.000+00:00

and in the `changeOfDirectors` object:
- The `cessationDate` for Patty P would be 2025-03-13
- The `appointmentDate` for Daniel D would be 2025-03-13

---

**pattyw** (5/21/2025):

@achiu - When you get a chance, can you confirm if the dates used in my previous reply are correct?

Thanks,
Patty

---

**achiu** (5/21/2025):

Hi Patty,

I will review and get back to you.

Argus

---

**achiu** (5/23/2025):

Hi Patty,

Please find the answers to your questions below.

[quote="pattyw, post:7, topic:512"]
Is there a reason the `effectiveDate` is only required for the change of directors filing?
[/quote]
The effective date for the change of directors filing is essentially the director change date.

[quote="pattyw, post:7, topic:512"]
Also, can you confirm that these dates would be correct for this example scenario:

* Patty P is an existing director, ceasing on March 13, 2025
* Daniel D is a new director, appointed on March 13, 2025
* Filing is done today (May 6th 2025) at 2:45 pm.
[/quote]

[quote="pattyw, post:7, topic:512"]
Then in the filing header:
* The `date` field would be 2025-05-06
* The `effectiveDate` field would be the date and time of the filing: 2025-05-06T21:45:00.000+00:00
[/quote]
`date ` is correct.
The effective date would be march 13, 2025 as that is the director change date.

[quote="pattyw, post:7, topic:512"]
and in the `changeOfDirectors` object:
* The `cessationDate` for Patty P would be 2025-03-13
* The `appointmentDate` for Daniel D would be 2025-03-13
[/quote]
Yes, these dates are correct.

I have included an example(added two directors and ceased one) of a change of director filing I have done to provide more clarity.  Note that if there is a need to have different director change dates, separate CoD filings will need to be submitted.

![image|570x500](upload://rGiXCoHSQ9V633v9KKHCyXHuQ40.jpeg)

---

**pattyw** (5/27/2025):

Thanks @achiu, some follow-up questions:

What time should we be using for the effective date? From the image, it seems like the user can only specify a date, not a time through the user interface?

---

**achiu** (5/28/2025):

Yes, the Registry UI does not allow the user to provide a time for the director change date(filing effective date). 

You can pass in a UTC date for filing effective date that is essentially midnight pacific time which is what is done in the example I've included in the previous screenshot.  i.e. 2023-02-05T08:00:00.000+00:00
