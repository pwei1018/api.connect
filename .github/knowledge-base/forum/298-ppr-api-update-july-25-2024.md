# PPR API Update July 25 2024

_Category: Announcements · Source: BC Registries API community forum_

**arlen.tees** (7/26/2024):

Please be aware of a change to the way the PPR API handles the callbackURL parameter.

As of version 1.2.5, a callback URL will be used in a search results report request if it is submitted and the response JSON is over 220KB in size, which corresponds to a report of approximatedly 150 pages or more.

Only include a callbackURL in the request if one of the above conditions is true.

This update was necessary to address performance issues with the API. Please refer to https://developer.api.bcregistry.gov.bc.ca/ppr-api/ and the spec https://bcregistry-demo.apigee.io/docs/pprproxy/1/routes/ppr/api/v1/search-results/%7BsearchId%7D/post for full details.
