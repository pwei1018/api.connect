# Test environments

_Category: Entities · Source: BC Registries API community forum_

**dahkong** (4/10/2025):

Hi there,

Are we able to create accounts for our testing purposes on these test environments?  If we are manually able to navigate through and create test data ourselves, this could significantly speed up our development, and likely answer a lot of our questions.

Is this database shared with Sandbox?

https://www.test.bceid.ca/aboutbceid/contact_us.aspx

https://test.bcregistry.gov.bc.ca/en-CA

Thanks

---

**Nathan** (4/10/2025):

Yes, both of the following are integrated with test.bcregeistry
gws1.test.bceid.ca (UI is www.test.bceid.ca)
gws1.development.bceid.ca (UI is www.development.bceid.ca)

---

**dahkong** (4/10/2025):

Thanks for the quick response.  Is the database reset in any regular intervals?  Just want to get an idea of how long any test data we create would survive.

---

**Nathan** (4/10/2025):

Roughly 2 years from the date an account was created, assuming no activity for those two years.

---

**vsi** (4/11/2025):

The sandbox is the designated environment for all API-related testing.

---

**jlane** (4/11/2025):

Yes, this is critical @dahkong, thank you @vsi 
The sandbox environment is the only supported environment for API clients. We have to protect Test for our own internal testing and demos, etc. That is why we undertook the effort of establishing a sandbox - so that our new API clients had an environment they could use heavily for validation without impacting our testing. Some UIs are up in the sandbox now too; stand by I will share the URL

---

**jlane** (4/11/2025):

Please use this sandbox URL to explore the UI. https://sandbox.account.bcregistry.gov.bc.ca/decide-business

---

**dahkong** (4/11/2025):

Thanks @jlane  - this is very helpful.  So if we need to setup very specific test cases, we could log onto the sandbox environment to setup the data, then use the APIs to test.  Is that correct?  Both point to the same database?

---

**dahkong** (4/14/2025):

Is there someone that can approve the creation of the bceid's in the sandbox environment?

---

**travis.semple** (4/15/2025):

Approved your two accounts

---

**dahkong** (4/15/2025):

Thanks Travis.  When I go to the following url by clicking on the Manage my business button
![image|690x368](upload://ocsMlxOO5V6eGRWzKOPepoUfGsi.png)

https://sandbox.business-registry-dashboard.bcregistry.gov.bc.ca/account[Redacted]


I am taken to a site not found page.  Is that something we are not able to view currently?  I'm just trying to get some details on the workflows for the end users.

![image|690x263](upload://rXqRD0kdvZBGtqCTXH9qQWvfkyv.png)

---

**achiu** (4/15/2025):

Only account management functionality is available at this point in time in the UI.  i.e. the Registry UIs are not available to create businesses and perform maintenance filings.

Your testing will need to happen via the Registry APIs.
