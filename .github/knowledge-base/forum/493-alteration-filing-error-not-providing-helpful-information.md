# Alteration Filing - error not providing helpful information

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/11/2025):

Similar to the recent request for information about failures for the Change of Directors filing, we're getting a failure when attempting to validate an Alteration filing for a change of name. Here is the filing:
```
{
    "filing": {
        "header": {
            "certifiedBy": "Jenny Lucille Fringle-Jones",
            "email": "[REDACTED_EMAIL]",
            "name": "alteration",
            "folioNumber": "288",
            "date": "2025-04-10",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2025-04-10T22:16:26.904490+00:00",
            "identifier": "BC2000013",
            "legalName": "2000013 B.C. LTD.",
            "legalType": "BC"
        },
        "alteration": {
            "business": {
                "identifier": "2000013",
                "legalType": "BC"
            },
            "nameRequest": {
                "legalType": "BC",
                "nrNumber": "NR68792",
                "legalName": "Gamma Inc."
            },
            "contactPoint": {
                "email": "[REDACTED_EMAIL]"
            }
        }
    }
}
```
Here is the error response received. Buried in the text is a message saying that the input is not valid under any of the given schemas. Hoping that changes to error handling will provide a better response:

```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[context:[jsonPath:$.filing,message:'adminFreeze' is a required property,validator:required,validatorValue:[adminFreeze],jsonPath:$.filing,message:'agmExtension' is a required property,validator:required,validatorValue:[agmExtension],jsonPath:$.filing,message:'agmLocationChange' is a required property,validator:required,validatorValue:[agmLocationChange],jsonPath:$.filing,message:'amalgamationApplication' is a required property,validator:required,validatorValue:[amalgamationApplication],jsonPath:$.filing.alteration.business.identifier,message:'2000013' does not match '^[A-Z]1,3[0-9]7|T[A-Za-z0-9]9$',validator:pattern,validatorValue:^[A-Z]1,3[0-9]7|T[A-Za-z0-9]9$,jsonPath:$.filing,message:'annualReport' is a required property,validator:required,validatorValue:[annualReport],jsonPath:$.filing,message:'changeOfAddress' is a required property,validator:required,validatorValue:[changeOfAddress],jsonPath:$.filing,message:'changeOfDirectors' is a required property,validator:required,validatorValue:[changeOfDirectors],jsonPath:$.filing,message:'changeOfName' is a required property,validator:required,validatorValue:[changeOfName],jsonPath:$.filing,message:'changeOfRegistration' is a required property,validator:required,validatorValue:[changeOfRegistration],jsonPath:$.filing,message:'consentContinuationOut' is a required property,validator:required,validatorValue:[consentContinuationOut],jsonPath:$.filing,message:'continuationIn' is a required property,validator:required,validatorValue:[continuationIn],jsonPath:$.filing,message:'continuationOut' is a required property,validator:required,validatorValue:[continuationOut],jsonPath:$.filing,message:'conversion' is a required property,validator:required,validatorValue:[conversion],jsonPath:$.filing,message:'correction' is a required property,validator:required,validatorValue:[correction],jsonPath:$.filing,message:'courtOrder' is a required property,validator:required,validatorValue:[courtOrder],jsonPath:$.filing,message:'dissolution' is a required property,validator:required,validatorValue:[dissolution],jsonPath:$.filing,message:'incorporationApplication' is a required property,validator:required,validatorValue:[incorporationApplication],jsonPath:$.filing,message:'noticeOfWithdrawal' is a required property,validator:required,validatorValue:[noticeOfWithdrawal],jsonPath:$.filing,message:'putBackOn' is a required property,validator:required,validatorValue:[putBackOn],jsonPath:$.filing,message:'registrarsNotation' is a required property,validator:required,validatorValue:[registrarsNotation],jsonPath:$.filing,message:'registrarsOrder' is a required property,validator:required,validatorValue:[registrarsOrder],jsonPath:$.filing,message:'registration' is a required property,validator:required,validatorValue:[registration],jsonPath:$.filing,message:'restoration' is a required property,validator:required,validatorValue:[restoration],jsonPath:$.filing,message:'specialResolution' is a required property,validator:required,validatorValue:[specialResolution],jsonPath:$.filing,message:'transition' is a required property,validator:required,validatorValue:[transition],jsonPath:$.filing,message:'unmanaged' is a required property,validator:required,validatorValue:[unmanaged]],error:'header': 'certifiedBy': 'Jenny Lucille Fringle-Jones', 'email': '[REDACTED_EMAIL]', 'name': 'alteration', 'folioNumber': '288', 'date': '2025-04-10', 'accountId': '14723', 'business': 'foundingDate': '2025-04-10T22:16:26.904490+00:00', 'identifier': 'BC2000013', 'legalName': '2000013 B.C. LTD.', 'legalType': 'BC', 'alteration': 'business': 'identifier': '2000013', 'legalType': 'BC', 'nameRequest': 'legalType': 'BC', 'nrNumber': 'NR68792', 'legalName': 'Gamma Inc.', 'contactPoint': 'email': '[REDACTED_EMAIL]' is not valid under any of the given schemas,path:filing],filing:alteration:business:identifier:2000013,legalType:BC,contactPoint:email:[REDACTED_EMAIL],nameRequest:legalName:Gamma Inc.,legalType:BC,nrNumber:NR68792,business:foundingDate:2025-04-10T22:16:26.904490+00:00,identifier:BC2000013,legalName:2000013 B.C. LTD.,legalType:BC,header:accountId:14723,certifiedBy:Jenny Lucille Fringle-Jones,date:2025-04-10,email:[REDACTED_EMAIL],folioNumber:288,name:alteration "
}
```

---

**vsi** (4/11/2025):

Hi Ian, thanks for the error details. 

We will review and get back to you on this

thanks!

---

**vsi** (4/11/2025):

Hi Ian, 
on reviewing the request message , the *identifier* field should include the complete business identifier **BC**2000013, please try with the complete business identifier and let me know for any further issues. 

![image|374x103](upload://4xJ8s1oyvN6gJinjTaeNzkxogrY.png)


Thanks!

---

**iharder** (4/11/2025):

Thanks for that correction @vsi. It now passes the validation request (using the same input but corrected identifier attribute), but when making the actual filing request I get a 500 error similar to the change of address filing.

```
{
    "message": "Internal Server Error"
}
```

---

**vsi** (4/11/2025):

Hi Ian, 
Could you please confirm that the base URL being used is the one listed on the developer site?
([API Collection](https://developer.connect.gov.bc.ca/br/apigw-business-api-demo.postman_collection.zip))

for quick reference, this is the base url
https://sandbox.api.connect.gov.bc.ca/

Thanks!

---

**iharder** (4/13/2025):

Yes, that is correct. The entire URL for the filing is:
```
https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/filings
```

---

**vsi** (4/28/2025):

Hi Ian, 
we have updated the postman collection on the developer site. Please utilize the latest collection to retest. Let me know for any further issues. 

Thanks!
