# Payment failures and gateway timeouts

_Category: Known Bugs · Source: BC Registries API community forum_

**frank** (1/25/2022):

Hi Gang

We are seeing gateway timeouts for PDFs on search id 391.  

We are also getting random payment failures with SBCPaymentException.  Message:004:500 payment error for account.

---

**Kaineatthelab** (1/25/2022):

Hi Frank!! Taking a look at this right now:)! We did have an overload in the system(auth api) that was causing timeouts for other interactions which has now subsided.  I will get someone to look at this now:)

---

**Kaineatthelab** (1/25/2022):

Hi Frank, It looks like the errors were due to the overloading. Let us know if you see anything else!!

---

**frank** (1/25/2022):

Getting gateway timeout errors retrieving PDFs.  Last one was search id 813.
