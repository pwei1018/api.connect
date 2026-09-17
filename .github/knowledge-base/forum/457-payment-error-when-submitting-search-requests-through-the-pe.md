# Payment error when submitting search requests through the Personal Property Registry API (Sandbox)

_Category: Pay · Source: BC Registries API community forum_

**Erin** (3/20/2025):

Hello, I am receiving the following error when trying to submit a search

    "errorMessage": "API backend third party service error.",
    "rootCause": "detail:,message:004:503 payment error for account ####.,status_code:503,type: "

---

**travis.semple** (3/21/2025):

Could you retry please?

---

**Erin** (3/21/2025):

It's working now. Thank you for your help.

---

**Greg** (4/7/2025):

I am receiving a similar error when using the new sandbox URL, sandbox.api.connect.gov.bc.ca:

 "errorMessage": "API backend third party service error.",
  "rootCause": "detail:HTTPSConnectionPool(host='pay-api-sandbox-178801140315.northamerica-northeast1.run.app', port=443): Read timed out. (read timeout=20.0),message:004:500 payment error for account....

---

**travis.semple** (4/8/2025):

Hello Greg, this is probably due to a cold start (1st request in a while). I'll see if I can make some changes to fix this.
