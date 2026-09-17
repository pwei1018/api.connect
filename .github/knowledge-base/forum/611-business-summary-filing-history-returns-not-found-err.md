# BUSINESS_SUMMARY_FILING_HISTORY returns NOT_FOUND_ERR

_Category: Uncategorized · Source: BC Registries API community forum_

**RegiCorpINc** (12/29/2025):

Hello,

Iâ€™m using the BC Registry Search API and can successfully search for businesses. However, when calling:

`GET /registry-search/api/v2/businesses/{identifier}/documents/BUSINESS_SUMMARY_FILING_HISTORY`

I consistently receive the following error for all businesses tested:

`ResourceErrorCodes.NOT_FOUND_ERR: no Document found for BUSINESS_SUMMARY_FILING_HISTORY`

Could you please clarify:

* Is this document type available for all businesses?

* Are there any prerequisites or limitations for this endpoint?

* Is there an alternative way to retrieve filing history or summary details?

Thanks in advance for your help.

![image|690x121](upload://cQCok8UvNX2oCPSXgmnpFOE3Dr4.png)

---

**Melissa** (12/29/2025):

Hello,

The business summary is currently available for modernized entities that are managed through our modernized Business Registry. This includes sole proprietorships, general partnerships, cooperative associations and BC benefit companies. We are in the process of modernizing BC Companies, and taking an iterative approach to moving them over. At this time the vast majority of BC Companies remain in the legacy system and will not be available through this API. In early January I will circle back with more information on how to identify which BC Companies are modernized.

Thank you

---

**RegiCorpINc** (12/30/2025):

Thank you for the clarification.

To help us design our integration, could you please advise on the following:

For legacy BC companies, which API should be used to retrieve business details such as legal name, status, incorporation date, and filing information?

Is there a recommended approach to reliably retrieve basic business details for all BC businesses using BC Registry or OrgBook APIs?

This will help us determine the correct API strategy while modernization is ongoing.

Thank you.

---

**Melissa** (12/30/2025):

BC Registries does not have a separate API offering for legacy services. If you wish to access companies that have not yet modernized the OrgBook API can be leveraged. As noted, the OrgBook API retrieves publicly available information and will not include additional details that would constitute a search and require a fee. If you require additional documentation on legacy companies searches can be placed through BC Registries staff or ordered through BC Online. Information on ordering documents is available here: https://www2.gov.bc.ca/gov/content/governments/organizational-structure/ministries-organizations/ministries/citizens-services/bc-registries-online-services.

Thank you
