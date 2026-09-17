# Error when submitting search requests through the Personal Property Registry API and the Registry Search API (Sandbox)

_Category: Uncategorized · Source: BC Registries API community forum_

**Erin** (9/19/2024):

When submitting a searchQuery through the Personal Property Registry API (Sandbox) a payment error is being returned.

When submitting a Document request for BUSINESS_SUMMARY_FILING_HISTORY through the Registry Search API (Sandbox) an "Internal server error " message is being returned.

Are these APIs currently not available?

---

**arlen.tees** (9/19/2024):

Hi Erin, thanks for letting know of the issues. Teams are investigating and we'll reply once we know more.

Thanks again,
Arlen

---

**Melissa** (9/19/2024):

@Erin can you confirm which endpoint you are searching? Can you also confirm which entity type you are searching? We had a recent update (Aug) to remove a redundant endpoint which may be the issue. We are also limited in what entities you can obtain the business_summary_filing_history for given that not all entities have modernized yet.

---

**arlen.tees** (9/19/2024):

The PPR issue with the Pay API is now corrected. You should now be able to submit a searchQuery in the PPR again.

---

**Erin** (9/19/2024):

@arlen.tees @Melissa both APIs are working again for me. Thank you both for your quick responses!
