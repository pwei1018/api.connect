# Business Search API updated to show Good Standing status for corporations

_Category: Upcoming Releases · Source: BC Registries API community forum_

**Fareen** (10/19/2023):

On October 19, 2023 the Business Search API was updated to include a goodStanding field when returning search results for active cooperative associations and corporations under the Business Corporations Act. The new field is an indicator of whether or not the business is in 'good standing'. 

No changes have been made to the existing response fields and we do not anticipate users having to make any code changes. All API users have access to the 'goodStanding' field if you wish to include it in your query results. 

The updated API specification is available on the [Business Search API page](https://developer.bcregistry.daxiom.ca/registry-search-api). The new â€˜goodStandingâ€™ field has been added under Facets results with a description found [here](https://bcregistry-demo.apigee.io/docs/regsearchproxy/1/routes/businesses/search/facets/get).

This change may be tested in the sandbox environment under the business details of the search response.

Additional details:

* The goodStanding field applies only to active businesses that fall under the Business Corporations Act. Historical businesses do not receive a status of standing.
* Good Standing for Societies may be available in a later release, pending further review of the business rules.
