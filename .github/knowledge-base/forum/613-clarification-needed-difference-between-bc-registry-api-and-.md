# Clarification Needed: Difference Between BC Registry API and OrgBook API Search Results

_Category: Tips and Hints · Source: BC Registries API community forum_

**magicmman** (12/29/2025):

Hello everyone,

I am currently integrating BC business data and would appreciate some clarification on the difference between the **BC Registry API** and the **OrgBook API**, particularly around search behavior and data coverage.

While testing, I noticed that business search results from the BC Registry API do not always match the results shown on the public OrgBook search page:
[https://orgbook.gov.bc.ca/search](https://orgbook.gov.bc.ca/search)

This raises a few questions:

1. What is the core difference between the BC Registry API and the OrgBook API in terms of purpose and data source?

2. Why do search results differ between the BC Registry API and OrgBook?

3. Is OrgBook consuming data from the BC Registry, or does it apply additional filters, validations, or indexing logic?

4. If the goal is to retrieve **all registered BC businesses**, which API is considered the authoritative or most complete source?

Understanding which API provides the full and canonical dataset is important for ensuring accuracy in production systems.

Any official guidance, documentation references, or architectural explanations would be very helpful.

Thank you in advance for your time and support.

---

**Melissa** (12/29/2025):

1\. The BC Registry API allows API access for BC Registries services. The OrgBook API includes information about verified organizations that is not solely restricted to the data housed at BC Registries. It allows users to better understand relationships between businesses and companies in the way data is displayed.

2\. The BC Registry API includes basic information, allowing access to additional information at a fee (e.g. corporate summary with addresses). OrgBook is not set up to collect statutory fees on behalf of BC Registries and thus, only provides the BC Registry data that is available at no cost. If you are speaking to specific instances where a companies data does not match across systems please provide details so we can review.

3\. OrgBook leverages BC Registries data as the source of truth.

4\. BC Registries is the authoritative source for BC Registry information.

OrgBook API documentation is available here: [https://orgbook.gov.bc.ca/about/orgbook-api](https://orgbook.gov.bc.ca/about/orgbook-api)
BC Registries API documentation is available here: [https://developer.connect.gov.bc.ca/en-CA](https://developer.connect.gov.bc.ca/en-CA)
