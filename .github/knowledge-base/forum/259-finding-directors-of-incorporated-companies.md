# Finding directors of incorporated companies

_Category: Tips and Hints · Source: BC Registries API community forum_

**bb_tsbc** (1/26/2024):

Can the director of incorporated companies be extracted via API?  When using the path GET /businesses/search/parties on the Registry Search API I note the error:
"rootCause": "message:Expected 'partyRoles:' with values 'partner' and/or 'proprietor'. Other partyRoles are not implemented. 

Is there another path on either the business API or registry-search API to get this information or is it not yet available?

---

**Fareen** (1/31/2024):

Currently, you cannot search by Director name in any of the BC Registries APIs as this is confidential data. You can only get the Director data from the business-api if you own the business.
You can get all of the data for a business, in the Business Summary, which is available in JSON or PDF format through the registry-search API.
