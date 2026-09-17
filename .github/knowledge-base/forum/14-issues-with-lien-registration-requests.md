# Issues with Lien Registration Requests

_Category: Tips and Hints · Source: BC Registries API community forum_

**trish.reimer** (12/22/2021):

Empty strings are not allowed. 

Here's an example:

The source of the error is the country code validation: empty strings are not allowed. Once
  "debtors": [
    {
      "personName": {
        "first": "TRISH",
        "middle": "ANNE",
        "last": "REIMER"
      },
      "birthDate": "1976-04-10T00:00:00-08:00",
      "address": {
        "street": "APT 7 BAY PLACE",
        "city": "VICTORIA",
        "region": "BC",
        "country": "  ",
        "postalCode": "V9B 3E2"
      }
    }
  ],
was changed to
  "debtors": [
    {
      "personName": {
        "first": "TRISH",
        "middle": "ANNE",
        "last": "REIMER"
      },
      "birthDate": "1976-04-10T00:00:00-08:00",
      "address": {
        "street": "APT 7 BAY PLACE",
        "city": "VICTORIA",
        "region": "BC",
        "country": "CA",
        "postalCode": "V9B 3E2"
      }
    }
  ],
The financing statement was created.
