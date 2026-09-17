# Errors with Search Results

_Category: Known Bugs · Source: BC Registries API community forum_

**trish.reimer** (12/22/2021):

If you are receiving an error when you retrieve a PDF Search result, it may be from how you are submitting search selection data (which follows the spec). 

Registries will need to apply a patch to fix this. 

Here is an interim workaround they can use until the patch is applied:
In Search Step 2 when selecting a registration submit the complete data for that selection returned in the Step 1 response. For example, instead of
[
  {
    "matchType": "SIMILAR",
    "baseRegistrationNumber": "769468M"
  },
]
Submit:
[
  {
    "baseRegistrationNumber": "769468M",
    "matchType": "SIMILAR",
    "createDateTime": "2021-02-13T14:08:59+00:00",
    "registrationType": "SA",
    "debtor": {
      "personName": {
        "last": "DO",
        "first": "TRISH",
        "middle": "ANNE"
      },
      "partyId": 1955790,
      "birthDate": "1976-11-29T12:59:59+00:00"
    }
  },
]

RESOLVED: Patch applied. Workaround above is no longer needed.
