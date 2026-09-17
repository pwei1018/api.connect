# Legal Name data update and new Alternate Names fields to be released on Tuesday June 25, 2024

_Category: Announcements · Source: BC Registries API community forum_

**Fareen** (6/19/2024):

As communicated in the API User Group meeting today, BC Registries is planning to release changes to the data displayed in the Legal Name field and adding new Alternate Names fields for all sole proprietorship and general partnership records in the Business Registry API Prod environment on **Tuesday June 25, 2024.**

Any issues reported through testing in the sandbox environment over the last month have been resolved.

This change will:
* fix the issue of the legalName field returning an operating name instead of a legal name for sole proprietorships and general partnerships.
* add a new alternateNames field to retrieve the operating name; API users that require the operating name will need to adjust their code.

View the updated [legalName solution document ](https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-other-assets/legal_name_solution.pdf) for a summary of the issue and the solution. Specifications have also been updated on the[ Business Registry API page](https://developer.bcregistry.daxiom.ca/business-api).

---

**davemck** (6/25/2024):

This is to confirm that we will be throwing the switch to affect the legal name change at noon Pacific today, Tuesday, June 25, 2024.

---

**Fareen** (6/25/2024):

This is to notify all API clients that the legal name data update as described above has been released to the Production environment and the Business API has been updated.
