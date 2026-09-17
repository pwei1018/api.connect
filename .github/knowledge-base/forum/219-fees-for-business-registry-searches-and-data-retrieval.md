# Fees for Business/Registry Searches and Data Retrieval

_Category: Uncategorized · Source: BC Registries API community forum_

**iharder** (1/24/2023):

Both the business and registry API pages reference a [fees page](https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/businesses-incorporated-companies/forms-corporate-registry) that describes fees for registry searches.

It's unclear when those fees would apply. For instance, would a facet search in the Registry API that resulted in a number of results cost $7.00? Would a search in the Business API have the same fees applied? More specifically, if an identifier is obtained and then used to retrieve information of a business, would fees apply to that? If clients are searching for a specific business we would want to retrieve as much information as possible, such as general information, all addresses, all related parties and their details, etc. Since it appears that we will need to make multiple calls to retrieve all the information for a company, would fees apply to each call? 

Looking at the Pay API calls in hopes to retrieve this information, it seems that it only returns fees related to filings (e.g. incorporation, annual filing, etc).

To summarize, we are looking for more detail on what fees will be charged for searching and retrieval of a company's information. We need to accurately relay those fees to users so they can make informed decisions regarding the amount of information to retrieve.

---

**iharder** (2/18/2023):

To follow up on this message, it is just the POST calls that result in fees. The business API has Document Access Request POST to request access to a company summary. Then, given the resulting access id, for a defined period after that, GET calls can be made to retrieve JSON or PDF summary information for that company.

Thor has indicated that the Pay API calls will be updated to include current pricing information for all types of (paid) transactions.
