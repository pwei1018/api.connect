# ERROR results already provided for search ID XXXX

_Category: Tips and Hints · Source: BC Registries API community forum_

**Melissa** (1/11/2022):

Question: In the SANDBOX environment it appears that you can only request results once (regardless of whether you are trying to get the data or PDF). I just did a BUSINESS_DEBTOR search and attached are the results after back-to-back posts with the same URL to pick up the data. You can see in the first screenshot properly shows the results while the second screenshot shows the message: "results already provided for search ID XXXX". The same thing happens when I try to fetch the PDF (first attempt works, second attempt errors out).

Response: You can only submit a POST search step 2 request once. Afterward, as in the spec, you can retrieve a previously completed search with a GET /ppr/api/v1/search-results/{searchId}.
Here is the description for this endpoint from the spec:

After a search has completed, this operation may be used to retrieve the search detail information identified by the searchId path parameter. This operation is permitted for up to seven days after the initial search.
