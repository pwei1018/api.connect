# NEW DATE: Business Search API Updates planned for Aug 20 2024

_Category: Upcoming Releases · Source: BC Registries API community forum_

**Fareen** (8/13/2024):

On August 20th 2024, there will be an update to the Business Search functionality which will enhance the backend process in terms of update processes and maintainability.

Key Information:

* API Deprecation: For API users, the GET /businesses/search/suggest endpoint will be removed entirely.
* Data Importing: Data importing processes will be standardized
* The "GET /businesses/search/suggest" was an alternative to the "GET /businesses/search/facets" search endpoint for finding business data. It is less performant, returns less data, is expensive on our system / has performance issues and it is not being used by anyone in Production so we are removing the endpoint.

Impact on Users:

* From a user perspective, there should be no noticeable changes in the search functionality.
* The business search API updates are planned to be deployed to the Production environment throughout the morning.

---

**Melissa** (8/19/2024):

Note: The date for this release has been updated from August 19th to August 20th due to platform issues.

---

**Melissa** (8/21/2024):

Note, this release was successfully completed on August 20th.
