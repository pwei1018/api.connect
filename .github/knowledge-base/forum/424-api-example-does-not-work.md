# API Example does not work

_Category: Report an Issue · Source: BC Registries API community forum_

**taivo** (2/28/2025):

Trying to test `https://bcregistry-sandbox.apigee.net/strr/v1/permits/:validatePermit`, based on example on API docs page: https://oas.daxiom.ca/docs/strr/97n85oxv4riix-validate-permit

Either through Postman or curl, my request is identical to the example provided on that page:
`curl --location 'https://bcregistry-sandbox.apigee.net/strr/v1/permits/:validatePermit' \
--header 'Accept: application/json' \
--header 'Content-Type: application/json' \
--header 'x-apikey: [REDACTED]' \
--data '{
  "identifier": "H1234567",
  "address": {
    "unitNumber": "23a",
    "streetNumber": "721",
    "streetName": "Test St",
    "city": "Test city",
    "province": "BC",
    "country": "CA",
    "postalCode": "H0H0H0"
  }
}'`

Yet I always get the following response:
`{
    "fault": {
        "faultstring": "Unable to identify proxy for host: secure and url: /strr/v1/permits/:validatePermit",
        "detail": {
            "errorcode": "messaging.adaptors.http.flow.ApplicationNotFound"
        }
    }
}`

Please advise.

---

**taivo** (3/14/2025):

Does anyone have a contact for problems with the API?

---

**taivo** (3/18/2025):

Something must have been fixed on the server side, no longer getting at 500 with generic error, but got a specific error telling me I was missing the Account-Id header. After adding that I got a response. Case closed.
