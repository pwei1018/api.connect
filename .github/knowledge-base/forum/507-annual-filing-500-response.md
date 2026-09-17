# Annual Filing - 500 Response

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/17/2025):

I just received notification that corporations that I submitted to be configured for annual filings were enabled. I attempted one and the validation request succeeded, but when submitting the filing request it resulted in a 500 error. Here's the request:

```
{
    "filing": {
        "header": {
            "certifiedBy": "Ian Harder",
            "email": "[REDACTED_EMAIL]",
            "name": "annualReport",
            "folioNumber": "17660",
            "date": "2025-04-17",
            "ARFilingYear": "2025",
            "accountId": "XXXXX"
        },
        "business": {
            "foundingDate": "2024-04-16T00:00:00+00:00",
            "identifier": "BC3000069",
            "legalName": "Test Organization Inc.",
            "legalType": "BC"
        },
        "annualReport": {
            "annualReportDate": "2025-04-16",
            "nextARDate": "2025-04-16",
            "offices": {
                "registeredOffice": {
                    "deliveryAddress": {
                        "streetAddress": "#260, 2300 Carrington Road",
                        "addressCity": "Westbank",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V4T 2N6"
                    },
                    "mailingAddress": {
                        "streetAddress": "#260, 2300 Carrington Road",
                        "addressCity": "Westbank",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V4T 2N6"
                    }
                },
                "recordsOffice": {
                    "deliveryAddress": {
                        "streetAddress": "#260, 2300 Carrington Road",
                        "addressCity": "Westbank",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V4T 2N6"
                    },
                    "mailingAddress": {
                        "streetAddress": "#260, 2300 Carrington Road",
                        "addressCity": "Westbank",
                        "addressRegion": "BC",
                        "addressCountry": "CA",
                        "postalCode": "V4T 2N6"
                    }
                }
            },
            "directors": [
                {
                    "appointmentDate": "2025-04-06",
                    "cessationDate": null,
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "id": 4895203,
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "id": 4895204,
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140 ",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    },
                    "officer": {
                        "email": "",
                        "firstName": "LLOYD",
                        "id": 2587659,
                        "lastName": "AASEN",
                        "middleInitial": "H.",
                        "partyType": "person"
                    },
                    "role": "director"
                },
                {
                    "appointmentDate": "2025-04-06",
                    "cessationDate": null,
                    "deliveryAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "id": 4895205,
                        "postalCode": "V6E 3P3",
                        "streetAddress": "2010-1055 West Georgia Street",
                        "streetAddressAdditional": ""
                    },
                    "mailingAddress": {
                        "addressCity": "Vancouver",
                        "addressCountry": "CA",
                        "addressRegion": "BC",
                        "deliveryInstructions": "",
                        "id": 4895206,
                        "postalCode": "V6E 3P3",
                        "streetAddress": "P.O. Box 11140",
                        "streetAddressAdditional": "2010-1055 West Georgia Street"
                    },
                    "officer": {
                        "email": "",
                        "firstName": "OLGA",
                        "id": 2587660,
                        "lastName": "BATURINA",
                        "partyType": "person"
                    },
                    "role": "director"
                }
            ]
        }
    }
}
```

Here's what I receive in the response body:

```
{
    "message": "Internal Server Error"
}
```

---

**vsi** (4/22/2025):

Morning Ian, 
we will review the error and revert with next steps. (ETA 04/23)

thanks!

---

**achiu** (4/23/2025):

Hi Ian, 

I was able to successfully file an AR filing essentially using the AR payload you had provided above.  I did notice the businesses you are trying to file ARs for are not affiliated to your account.  Filings cannot be submitted against a business that an account is not affiliated to.

I have left the filed AR for BC3000069 so you can verify that the AR filing succeeded.

Just a note that when submitting business identifiers for testing of ARs and affiliation by passcode, it's probably ideal that different business identifiers are provided.

---

**achiu** (4/23/2025):

Just following up on this.  

We actually deleted existing affiliations to set up your list of business identifiers for affiliation by passcode testing.  As a side effect, this may have caused issues with your AR filings.

Moving forward we will not delete existing affiliations when affiliation by passcode business identifiers are submitted via the Google Form.

~~We will be adding back all the missing affiliations shortly.~~ Done

---

**iharder** (4/23/2025):

Thanks for the updates Argus. I will test some others. 

I suggest that if an affiliation is not in place that a 500 error not occur, but rather an error response that indicates why it failed. In general, I'd hope that we wouldn't receive 500 errors at all. Otherwise users will have no idea why something failed and it will result in unnecessary help desk calls.

---

**achiu** (4/23/2025):

It wasn't actually a 500 that I got so I'm not really sure of the exact issue you were having.  As I mentioned, I pretty much used the same payload as you for the AR filing.  I just filled in the account id. 

This was the error I got when filing the AR for the unaffiliated business.

```
HTTP/1.1 401 Unauthorized

{
  "errorMessage": "API backend third party service error.",
  "rootCause": "message:You are not authorized to submit a filing for BC3000069. "
}
```

---

**iharder** (4/25/2025):

I retried submitting the original BC3000069 and got an expected response from the validation request indicating that the annual report wasn't due.

I then submitted essentially the same request for BC3000070. It passed validation, and I  received a 500 error.

Could this be something to do with headers? I submit:

Content-Type: application/json
Content-Length: <calculated during submission>
Accept: */*
Connection: keep-alive
Account-Id: <our account id>
x-apikey: [REDACTED] api key>

I don't get a 500 error with the same headers for an incorporation.

---

**iharder** (5/1/2025):

As a follow-up to this, when sending a (valid) absolute HTTP request target:

```
POST https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/filings HTTP/1.1
```
the server is not recognizing this as valid and sends the following response:

```
HTTP/1.1 302 Found
content-type: text/html; charset=utf-8
location: http://business-api-tipz2vtnfa-nn.a.run.app/api/v1/businesses/filings
access-control-allow-origin:
access-control-allow-headers: origin, x-requested-with, x-apikey, accept, content-type, account-id, x-apigee-csrf, Authorization, App-Name
api: legal_api/2.135.0-missing
schemas: registry_schemas/2.18.31
x-cloud-trace-context: 8588af55c4827bcca856f21f1a2f419a;o=1
date: Sun, 27 Apr 2025 17:35:16 GMT
Content-Length: 259
access-control-max-age: 3628800
access-control-allow-methods: GET, PUT, POST, PATCH, DELETE
x-request-id: cc10c20b-8cc6-4bcd-853e-aea3510cbb95
Via: 1.1 google
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<title>Redirecting...</title>
<h1>Redirecting...</h1>
<p>You should be redirected automatically to target URL: <a href="/api/v1/businesses/filings">/api/v1/businesses/filings</a>.  If not click the link.
```
Note that the redirect target is an outdated v1 URI. When our client application then automatically attempts to connect to this target, the 500 response results.

I believe the solution is for the server to accept the absolute HTTP request target. We don't have the ability to force our communication component to use just the path (without protocol/host), and the absolute target is valid according to the HTTP standard.

Since filings for existing companies use the same URI, this will be the reason our other filings have failed that have otherwise been successfully validated.

---

**achiu** (5/1/2025):

Hi Ian,

Iâ€™m just going to provide context into our previous conversation as others may find this useful before I follow up to your latest question regarding the redirect behavior you are seeing.

**Previous context:**

> Hi Ian, 
> 
> I reset the data for BC3000069 and successfully applied an AR filing again via the postman collection weâ€™ve provided.  I just pasted the JSON body you had provided.  There were some updates to date fields in the payload based on the resetting of founding date to make the business eligible for filing an AR.   Iâ€™ve reset BC3000069 so you should be able to test with curl request Iâ€™ve provided.
>  
> Iâ€™ve included the raw requests/responses for the intercepted postman calls for the AR as well as the curl request.  Only thing that has been redacted is the api key.

Following are raw requests/responses for the intercepted postman calls and for the AR curl request to this reply.  It has been further redacted to exclude account id info.

**Raw postman request**
```
POST /business/api/v2/businesses/BC3000069/filings HTTP/1.1
x-apikey: [REDACTED]
account-id: <redacted>
Content-Type: application/json
User-Agent: PostmanRuntime/7.43.3
Accept: */*
Cache-Control: no-cache
Postman-Token: [REDACTED]
Host: sandbox.api.connect.gov.bc.ca
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Content-Length: 3937

{
  "filing": {
    "header": {
      "certifiedBy": "Ian Harder",
      "email": "[REDACTED_EMAIL]",
      "name": "annualReport",
      "folioNumber": "17660",
      "date": "2025-04-25",
      "ARFilingYear": "2025",
      "accountId": "<redacted>"
    },
    "business": {
      "foundingDate": "2024-03-26T00:00:00+00:00",
      "identifier": "BC3000069",
      "legalName": "Test Organization Inc.",
      "legalType": "BC"
    },
    "annualReport": {
      "annualReportDate": "2025-03-26",
      "nextARDate": "2025-03-26",
      "offices": {
        "registeredOffice": {
          "deliveryAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          },
          "mailingAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          }
        },
        "recordsOffice": {
          "deliveryAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          },
          "mailingAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          }
        }
      },
      "directors": [
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895203,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895204,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140 ",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "LLOYD",
            "id": 2587659,
            "lastName": "AASEN",
            "middleInitial": "H.",
            "partyType": "person"
          },
          "role": "director"
        },
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895205,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895206,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "OLGA",
            "id": 2587660,
            "lastName": "BATURINA",
            "partyType": "person"
          },
          "role": "director"
        }
      ]
    }
  }
}
```

**Raw Postman Response**
```
HTTP/1.1 201 Created
content-type: application/json
access-control-allow-origin: 
api: legal_api/2.135.0-missing
schemas: registry_schemas/2.18.31
x-cloud-trace-context: 5e3df2a72fa384564cc4cbe5d15acdb5;o=1
date: Fri, 25 Apr 2025 22:30:27 GMT
Content-Length: 2821
access-control-allow-headers: origin, x-requested-with, x-apikey, accept, content-type, account-id, x-apigee-csrf, Authorization, App-Name
access-control-max-age: 3628800
access-control-allow-methods: GET, PUT, POST, PATCH, DELETE
x-request-id: d368aec2-d81c-4846-8434-9a9e16c39ada
Via: 1.1 google
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000

{
  "filing": {
    "annualReport": {
      "annualReportDate": "2025-03-26",
      "directors": [
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895203,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895204,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140 ",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "LLOYD",
            "id": 2587659,
            "lastName": "AASEN",
            "middleInitial": "H.",
            "partyType": "person"
          },
          "role": "director"
        },
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895205,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895206,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "OLGA",
            "id": 2587660,
            "lastName": "BATURINA",
            "partyType": "person"
          },
          "role": "director"
        }
      ],
      "nextARDate": "2025-03-26",
      "offices": {
        "recordsOffice": {
          "deliveryAddress": {
            "addressCity": "Westbank",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V4T 2N6",
            "streetAddress": "#260, 2300 Carrington Road"
          },
          "mailingAddress": {
            "addressCity": "Westbank",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V4T 2N6",
            "streetAddress": "#260, 2300 Carrington Road"
          }
        },
        "registeredOffice": {
          "deliveryAddress": {
            "addressCity": "Westbank",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V4T 2N6",
            "streetAddress": "#260, 2300 Carrington Road"
          },
          "mailingAddress": {
            "addressCity": "Westbank",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "postalCode": "V4T 2N6",
            "streetAddress": "#260, 2300 Carrington Road"
          }
        }
      }
    },
    "business": {
      "foundingDate": "2024-03-26T00:00:00+00:00",
      "identifier": "BC3000069",
      "legalName": "Test Organization Inc.",
      "legalType": "BC"
    },
    "header": {
      "ARFilingYear": "2025",
      "accountId": "<redacted>",
      "affectedFilings": [],
      "availableOnPaperOnly": false,
      "certifiedBy": "Ian Harder",
      "colinIds": [],
      "comments": [],
      "date": "2025-04-25T22:30:26.944286+00:00",
      "deletionLocked": false,
      "effectiveDate": "2025-04-25T22:30:26.944319+00:00",
      "email": "[REDACTED_EMAIL]",
      "filingId": 1626659,
      "folioNumber": "17660",
      "inColinOnly": false,
      "isCorrected": false,
      "isCorrectionPending": false,
      "isPaymentActionRequired": false,
      "name": "annualReport",
      "paymentAccount": "<redacted>",
      "paymentStatusCode": "COMPLETED",
      "paymentToken": "20003925",
      "status": "PENDING",
      "submitter": "api-key-account-<redacted>-sandbox"
    }
  }
}
```

**Curl Request**
```
curl 'https://sandbox.api.connect.gov.bc.ca/business/api/v2/businesses/BC3000069/filings' \
-X POST \
-H 'x-apikey: [REDACTED]' \
-H 'account-id: <redacted>' \
-H 'User-Agent: PostmanRuntime/7.43.3' \
-H 'Accept: */*' \
-H 'Cache-Control: no-cache' \
-H 'Postman-Token: [REDACTED]' \
-H 'Host: sandbox.api.connect.gov.bc.ca' \
-H 'Connection: keep-alive' \
-H 'Content-Type: application/json' \
--data-raw '{
  "filing": {
    "header": {
      "certifiedBy": "Ian Harder",
      "email": "[REDACTED_EMAIL]",
      "name": "annualReport",
      "folioNumber": "17660",
      "date": "2025-04-25",
      "ARFilingYear": "2025",
      "accountId": "<redacted>"
    },
    "business": {
      "foundingDate": "2024-03-26T00:00:00+00:00",
      "identifier": "BC3000069",
      "legalName": "Test Organization Inc.",
      "legalType": "BC"
    },
    "annualReport": {
      "annualReportDate": "2025-03-26",
      "nextARDate": "2025-03-26",
      "offices": {
        "registeredOffice": {
          "deliveryAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          },
          "mailingAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          }
        },
        "recordsOffice": {
          "deliveryAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          },
          "mailingAddress": {
            "streetAddress": "#260, 2300 Carrington Road",
            "addressCity": "Westbank",
            "addressRegion": "BC",
            "addressCountry": "CA",
            "postalCode": "V4T 2N6"
          }
        }
      },
      "directors": [
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895203,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895204,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140 ",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "LLOYD",
            "id": 2587659,
            "lastName": "AASEN",
            "middleInitial": "H.",
            "partyType": "person"
          },
          "role": "director"
        },
        {
          "appointmentDate": "2025-04-06",
          "cessationDate": null,
          "deliveryAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895205,
            "postalCode": "V6E 3P3",
            "streetAddress": "2010-1055 West Georgia Street",
            "streetAddressAdditional": ""
          },
          "mailingAddress": {
            "addressCity": "Vancouver",
            "addressCountry": "CA",
            "addressRegion": "BC",
            "deliveryInstructions": "",
            "id": 4895206,
            "postalCode": "V6E 3P3",
            "streetAddress": "P.O. Box 11140",
            "streetAddressAdditional": "2010-1055 West Georgia Street"
          },
          "officer": {
            "email": "",
            "firstName": "OLGA",
            "id": 2587660,
            "lastName": "BATURINA",
            "partyType": "person"
          },
          "role": "director"
        }
      ]
    }
  }
}'
```

**Follow up to your latest question regarding the redirect behavior:**

This redirect behavior is happening because your POST to the filings endpoint does not include the business identifier in the URL.  The business identifier is a required field as indicated in the [API spec.](https://developer.connect.gov.bc.ca/oas/br/tag/business/POST/businesses/%7Bidentifier%7D/filings)  The postman collection examples for the POST/PUT filings endpoints also include a business identifier in the url.

**API spec for POSTing to filings endpoint**
![image 2|690x234](upload://3sFycwGc729hRw2QVhjYoOCOkNU.png)



**Postman collection**
![image|690x290](upload://mWfhI5VJhqRI2Dc6NfxjEETIIjE.png)


I think if this is the problem you have been having, it may resolve some of the issues you may be having with other filings?

---

**iharder** (5/1/2025):

Yes, that is it Argus! Thanks for your help and patience resolving the problem. When I constructed the URL after validating I omitted the incorporation number.  Using a common function for all filings means that this will have been the same issue for all filings.
