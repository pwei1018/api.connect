# Annual Report Filing Error

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (4/2/2025):

Hello,

I incorporated a company yesterday in the sandbox and when looking up the business using its identifier, the response has the "foundingDate" as "2025-04-01T00:03:40.862581+00:00" and the "allowedActions" include "Annual Report" under "filingTypes" but when I try do an annual report filing with "annualReportDate" set to "2025-04-02", I get the error: "Annual Report Date cannot be before a previous Annual Report or the Founding Date".

Is there a step I'm missing before I can file the annual report?

Thanks,
Patty

---

**vsi** (4/3/2025):

Hi Patty, 
As its a newly incorporated business (as of 2025-04-01), the annual report would be due in 2026 (2026-04-01), thereby the error. 

thanks!

---

**pattyw** (4/3/2025):

Are there sample companies we can use in the sandbox to try the annual report filing? Otherwise, we're blocked in testing and completing our implementation.

Thank you,
Patty

---

**vsi** (4/3/2025):

We are reviewing available options and will come back with next steps/recommendations. 

Thanks!

---

**vsi** (4/28/2025):

Hi Patty, 
We have received your sample businesses for AR testing, will update you once they are ready. 

Thanks!

---

**pattyw** (5/8/2025):

Hi @vsi,

Any update on these sample businesses for AR testing?

Thanks,
Patty

---

**achiu** (5/8/2025):

The businesses you have submitted for AR testing should be ready.

---

**pattyw** (5/8/2025):

Hi @achiu,

Sorry I've lost track of the businesses I submitted, can you provide the business identifiers?

Thanks,
Patty

---

**achiu** (5/8/2025):

Here are the business identifiers:

BC3000118, BC3000153, BC3000149, BC3000147, BC3000155, BC3000157, BC3000158, BC3000159

---

**pattyw** (6/4/2025):

Hi @achiu,

I submitted some more businesses for AR testing, can you let me know when they're ready?

Thanks!
Patty

---

**achiu** (6/4/2025):

Hi Patty, 

The businesses you submitted for AR testing should be good to go.

---

**pattyw** (6/25/2025):

Hi @achiu,

I submitted some more test data, can you let me know when they're ready?

Thank you,
Patty

---

**achiu** (6/25/2025):

The businesses should be ready for testing Patty.

---

**dahkong** (9/16/2025):

Hi @achiu  - should I request Test data for Name Reservations just through discourse?  Iâ€™m hoping to get a number of NRs to test.  The actual names donâ€™t matter, I would just need to know what they are.

Thanks,

Daniel

---

**achiu** (9/17/2025):

@dahkong the sandbox Business API in its current state is not integrated with Name Requests.  As such, any NR number will be accepted as no NR validation takes place in the sandbox.

We are still looking into whether we are able to standup the Name Request service in the sandbox and integrate it with the sandbox Business API.

---

**dahkong** (9/22/2025):

Hi @achiu ,

We have submitted some more test data again for ARs.  Could you let us know when itâ€™s ready for use?

Thanks,

Daniel 

cc - @pattyw

---

**achiu** (9/25/2025):

Hi @dahkong ,

The businesses youâ€™ve submitted should be ready for AR testing.

Iâ€™ve pushed the incorporation date for each business back 5+ years so you should be able to test 5 AR filings per business.

Note that these businesses should be only used for testing AR filings.  Iâ€™m not sure if testing other filings will cause issues as the data reset Iâ€™ve done does not take into consideration other data elements which may be affected.
