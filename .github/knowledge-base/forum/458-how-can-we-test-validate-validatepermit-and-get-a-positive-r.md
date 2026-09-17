# How can we test /validate/:validatePermit and get a positive response?

_Category: STRR · Source: BC Registries API community forum_

**taivo** (3/21/2025):

We have owners who have already registered, and their valid data is returning 404s from the sandbox API:
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[code:PERMIT_NOT_FOUND,message:Permit does not exist.] "
}
```
We have also attempted to use the address/permit provided in the API sample code:
```
{
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
}
```
This also returns PERMIT_NOT_FOUND.

Does the Sandbox not have valid data responses? How can we test this endpoint and get a valid 200 response with `"status": "ACTIVE",` or one of the other valid statuses returned?

---

**mbertucc** (3/21/2025):

Hi Taivo, I have asked our Technical Architect for response. I will post when we have a response.  Thank you.

---

**mbertucc** (3/24/2025):

Hi Taivio, 

Thanks for your continued engagement and questions.

To clarify, the SPEC has already been released. It was shared ahead of the Sandbox at the request of the Platforms team, who required early access to support their planning.

Weâ€™ll share an announcement as soon as the Sandbox is ready for use.
