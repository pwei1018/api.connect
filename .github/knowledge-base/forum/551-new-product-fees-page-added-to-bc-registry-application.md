# New Product Fees Page Added to BC Registry Application

_Category: Uncategorized · Source: BC Registries API community forum_

**neeraja.kumar** (7/14/2025):

Hi everyone,

Weâ€™ve added a new Product Fees page to the BC Registry application to help users quickly find pricing information.

Hereâ€™s whatâ€™s new:

* Thereâ€™s now a "Fees" link at the bottom (footer) of the main page of the application.
* A "Product Fees" link also appears on the dashboard when users log in.

These updates make it easier for users to see the prices for different products and services.

---

**dahkong** (9/9/2025):

Hi @neeraja.kumar ,

Just a couple of questions regarding fees:

1)  Are you able to confirm that in the new environment, that the handling of the taxes is the same?  That is, the statutory filing fees are not subject to GST?  I believe the Fees page indicates that, but we just wanted to confirm.

2)  The Product fee page shows that the Service Charge fees of $1.50 are not subject to GST.  Would that be similar to the $1.50 per transaction fee incurred for using the API?  e.g. the $1.50 transaction fee for using the API would not be subject to GST either?

Thanks

---

**jlane** (9/12/2025):

Hello,

For statutory fees, each partner agency has different rules/regs about whether they charge GST. So far only the Environmental Site Registry (ESRA) product has stated they want to charge GST. We are in progress adding this change to production, but we are delayed due to job action.

For #2, yes transaction fee == service fee. Itâ€™s $1.50 per transaction for UI and API customers.
