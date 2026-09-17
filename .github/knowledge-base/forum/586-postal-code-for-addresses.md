# Postal code for addresses

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (11/21/2025):

Hello,

In the documentation, the postal code is listed as a required field for addresses (https://developer.connect.gov.bc.ca/oas/br/model/address) but I noticed in the existing BC Online system that the postal code is not required. For example, in the Change of Directors filing, the postal code is not marked as a required field:

![image|690x203](upload://iNRi3Z1zX69riLJsbPdtMAFoDR5.png)

When weâ€™re doing filings with the new API, sometimes we need to retrieve and re-submit the existing directors and offices. When companies and their data are migrated over to the new system and if the data has existing addresses that are missing postal codes, I think the validation and filing would fail in the new system?

For example, when I try to do a Change of Directors filing where the delivery address doesnâ€™t have a postal code, I get this response:

```
"errors": [
            {
                "error": "Postal code is required.",
                "path": "/filing/changeOfDirectors/directors/0/deliveryAddress/postalCode"
            }
        ],
```

Can someone comment on if this a valid case and what to do if it happens?

Thank you.

---

**vysakh** (11/28/2025):

Thanks for raising this â€“ yes, that is a valid case and the behavior you are seeing matches the current API validation rules. Itâ€™s already under review, will get back to you with more details.
