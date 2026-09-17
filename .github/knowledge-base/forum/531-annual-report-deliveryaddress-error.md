# Annual Report deliveryAddress Error

_Category: Uncategorized · Source: BC Registries API community forum_

**pattyw** (5/29/2025):

Hello,

I incorporated a company (BC3000157) with a director (Leo New) that only had a mailing address and was able to complete the filing because a delivery address is not a required field for the parties in an incorporation.

However, I just tried filing an annual return and submitted Leo as a director but since he doesn't have a delivery address and it's a required field for the directors in the annual return, I get this error:

```
"jsonPath": "$.filing.annualReport.directors[1]",
"message": "'deliveryAddress' is a required property",
```

I think there's discrepancy here between the required fields, how should I proceed in this case?

Thank you,
Patty

---

**achiu** (5/30/2025):

Hi Patty,

The director delivery address should be required across all filings(Incorporation Application, Annual Report, Change of Director and etc) that require a director.

This may not be the behaviour you are seeing across filings that require a director but it will be eventually.

We are currently in the process of reviewing all corporation filings and ensuring the validation rules are correct and consistent.

Please provide the director delivery address for all instances of filings requiring a director in the meantime.
