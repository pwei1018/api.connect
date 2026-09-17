# RESOLVED Search detail report (BUG)

_Category: Known Bugs · Source: BC Registries API community forum_

**Melissa** (1/13/2022):

Question: Our teams have tried this scenario twice so it is reproducible.  Can you please have the teams look into.  
 
â€¢ submitted a registration ( infinity) and it registered. Submitted a search and received an Infinity term search result.
â€¢ submitted a registration ( 25 years), then a renewal (infinity) and all registered.  Submitted a search and got failed response due to data issue. (see below)
â€¢ submitted a registration ( 1 year), then a renewal (10 years), then a renewal (infinity) and all registered. Submitted a search and got failed response due to data issue. (see below)
 
Search failed Received Message:
{â€œerrorMessage": "API backend third party service error.", "rootCause": "message:Data related error generating report. "}
 
As the registration transactions were all successful, it appears that the BC report generator has an issue.
 
Submitted Search request statements for all 3 are identical except for the BaseReg#â€™:

Response: This is a search detail report bug and a fix has now been deployed to the SANDBOX.
