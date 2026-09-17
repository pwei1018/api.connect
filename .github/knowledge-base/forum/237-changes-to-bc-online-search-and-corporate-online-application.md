# Changes to BC OnLine Search and Corporate Online application replacement coming in 2025

_Category: Announcements · Source: BC Registries API community forum_

**maribeth.wilson** (8/9/2024):

In early 2025, B.C. corporate filings and searches will move to the new BC Business Registry application, removing them from the BC Online and Corporate Online applications. Read more [here](https://can01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fbcreg.ca%2Fcorporations&data=05%7C02%7CMaribeth.Wilson%40gov.bc.ca%7C0a1e1008a8964046f93008dcb8c68cc0%7C6fdb52003d0d4a8ab036d3685e359adc%7C0%7C0%7C638588410098333846%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=Jo%2BL1xOiVjpykoLiECkaBaprM2DvyJiaujvrMvl5VxA%3D&reserved=0)

BC Registries is considering the best time to transition and will provide a minimum of 3 monthsâ€™ notice on the release timing, with the actual release date provided 6 to 8 weeks in advance to allow for preparations for transition to the new modernized application.

Attend the API User Group meetings - BC Registries will provide updates on API development and specifications as they are published. If your organization is not already attending these meetings, you can request an invitation by emailing [[REDACTED_EMAIL]](mailto:[REDACTED_EMAIL])

The initial release of the Business Registry will include all BC companies incorporated under the B.C. Business Corporations Act and applies to the following BC Companies currently on BC OnLine and Corporate Online:
* Limited companies
* Unlimited liability companies
* Community contribution companies

This MVP release will include the top 15-20 highest volume filings; this represents 95% of total filings received by BC Registries.

* The remaining 40-45 filings not included in the MVP release will be added incrementally after the release.

The MVP will NOT include extraprovincial corporations, limited partnerships (LP), and limited liability partnerships (LLP). These entity types will continue to be maintained using existing tools

Partners **do not** need to request keys for the sandbox if they already use the Business Registry API and the Registry Search API. There will be no additional sandbox environment. BC Registry does not expect significant changes to the existing API specifications.

* Some specifications and Postman collections examples are already available

When BC Registries shuts down Corporate Online, any automation, robotics or scraping software partners use will no longer work.

* Contact BC Registry ([[REDACTED_EMAIL]](mailto:[REDACTED_EMAIL])) if your organization uses automation, robotic or scraping software. BC Registries can help you transition. Our recommendation is to replace these with the BC Registry APIs, see [BC Registries API Gateway](https://developer.api.bcregistry.gov.bc.ca/)

The B.C. corporations release is not expected to impact partners using the Auth and Pay APIs.

* BC Registries reminds API partners who are external to government but have been using government Auth and Pay systems that they will need their own systems. BC Registries will not provide endâ€user authentication services in the modern platform. It will be the responsibility of these organizations to authenticate their users.

NOTE: If your organization also have staff who manually search or file using Corporate Online or BC Online, these users will have an updated user experience. Screen/functions will be moving. This [Search Index](https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-other-assets/search_index.pdf) can help demonstrate where to search for businesses.
