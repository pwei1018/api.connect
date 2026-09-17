# Cannot access new domain

_Category: Report an Issue · Source: BC Registries API community forum_

**iharder** (2/23/2025):

I'm having problems accessing the latest domain. According to the discussion at the latest API meeting as well as the announcement (https://discourse.onebc.ca/t/important-domain-name-change-affecting-all-endpoints/406), *.apigee.net is to be replaced with *api.gov.bc.ca.

I can access https://bcregistry-sandbox.apigee.net, but cannot access https://bcregistry-sandbox.api.connect.gov.bc.ca

Have I missed something?

---

**Sandra** (2/24/2025):

Hi, sorry about this. We're going to get some more documentation about this change ready very shortly. I'll post here when we have more details.

---

**Sandra** (2/28/2025):

Hi again. I think the issue with the URL in your example is the first part - **bcregistry-sandbox** is not correct.

---

**pattyw** (2/28/2025):

Hi @Sandra,

I downloaded the Demo Postman collection from this page: https://developer.connect.gov.bc.ca/en-CA/products/br/overview and the gateway_url used in the "Business API Demo (Sandbox).postman_environment.json" file is https://bcregistry-sandbox.apigee.net

Can you please let us know what URL we should be using instead?

Thank you,
Patty

---

**Sandra** (3/3/2025):

Update from the developer:

> We've upgraded the URLs on the devsite (currently in dev) and PR'ed the OAS spec files in the product repos.
> 
> When it's next promoted to prod the new URLs will be there.

---

**Maries** (4/23/2025):

Hi @Sandra, given that there was some confusion about the new sandbox endpoint (that is, we were told to just replace the apigee.net with api.connect.gov.bc.ca, and it seems there was another change to remove the bcregistry part) can you please publish here the full endpoint for production?

---

**Sandra** (4/23/2025):

The URLs for the environments are available on the [developer site](https://developer.connect.gov.bc.ca/en-CA/products/get-started/apis-summary#environments):

Sandbox environment:  https://sandbox.api.connect.gov.bc.ca
Prodution environment:  https://api.connect.gov.bc.ca
