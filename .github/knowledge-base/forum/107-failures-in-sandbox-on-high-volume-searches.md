# Failures in Sandbox on High Volume Searches

_Category: Tips and Hints · Source: BC Registries API community forum_

**Melissa** (2/25/2022):

Question: We are working on implementing the call back URL for higher volume searches.
In testing this in the Sandbox API today we received failed responses but are getting success in production. 

Regarding status of the Sandbox API. Is it expected that the call back URL will work in Sandbox? and if so â€“ would the environment been â€¦going through somethingâ€¦ today?

We were running tests against:
â€¢	Western Energy Services Corp
â€¢	PROVINCIAL RENTAL HOUSING CORPORATION
â€¢	Canada: We realize this is probably returning too many results â€“ as your production front end seems to be successful at maybe a little more than 500 matches our assumption is you are still working on getting these larger ones to return.

Response: It looks like the PDF response is not being submitted in the format in the search step 2 request. With no callback, the subsequent GET is timing out because of the report size. The DEV site documents that for large reports they must provide a callbackURL and request the format as PDF (request header Accept=application/pdf) in search step 2.
