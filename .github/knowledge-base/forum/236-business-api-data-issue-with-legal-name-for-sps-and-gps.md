# Business API data issue with Legal Name for SPs and GPs

_Category: Known Bugs · Source: BC Registries API community forum_

**Fareen** (8/14/2023):

Currently, Businesses API users are getting inaccurate data in the results of the legalName field when querying the Businesses API for any sole proprietorships or general partnerships (SP, GP business entities). This field is displaying the operating name and not the accurate legal name for SPs and GPs. Note that the legal name of a Sole Proprietorship is the name of the proprietor (first and last name if owned by a person, or corporate legal name if owned by a corporation). The legal name of a General Partnership is the combined names of the partners. See examples below.

1. Sole Proprietorship
  - Identifier: FM0123456
  - Operating name: abc plumbing
  - Proprietor: John Smith
  - Legal Name: John Smith

2. General Partnership
   - Identifier: FM0223456
   - Operating name: acme hardware
   - General partners: John Smith, Rich Owens
   - Legal Name: John Smith, Rich Owens

---

**Fareen** (9/6/2023):

Further information was shared on the legal name issue and proposed solution at the Registries API User Group meeting on August 16, 2023.  A link is provided for the summary for API developers with sample queries for SPs and GPs:
[Legal Name Data Issue Dev Summary](https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-other-assets/legal_name_issue_-_16aug2023.pdf)

---

**Fareen** (10/5/2023):

Solution development is in progress for the Business APIs and there is an update to the technical solution.  New fields will be added to display alternate operating names and registration details. 
Please see the updated [Legal Name technical solution summary](https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-other-assets/legal_name_solution.pdf) with examples for API developers.
Note that this solution is subject to change based on testing results.

---

**Maries** (5/22/2024):

Hi there, when we met last week (May 15th) BC Registries mentioned that the expected deployment of this change to the sandbox was Thursday, May 16. Are there delays? We have to plan resources on our side to make this change, so an update would be appreciated.

Thanks!
