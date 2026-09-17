# Companies to be associated in order to submit filings

_Category: Entities · Source: BC Registries API community forum_

**dahkong** (2/25/2025):

Hi there,

I'm hoping for a bit of clarity with respect to the new concept of companies being associated/affiliated with someone for the purposes of completing registry filings for the Company.

If I manually log on with my BCeid, there is a section that shows me any companies that I am affiliated with.  How is that affiliation created?  Would companies appear if I were a director/officer of the company?  How could someone that's not a director/officer be affiliated with a company in order to file?  (e.g. a clerk in that company's legal department)

In contrast, in the current system, if I have the company password, I can complete a filing on the companyâ€™s behalf. 

Thanks

---

**dahkong** (3/3/2025):

Just following up on this when someone has a moment.

---

**davemck** (3/10/2025):

Good morning,

We will get back to you.

Dave

---

**achiu** (3/19/2025):

Hi, 

Weâ€™ll be walking through the different process flows around affiliation & delegation at todayâ€™s Service BC Connect API Updates meeting.

---

**dahkong** (3/21/2025):

Hi there,

Thanks for the demo earlier this week and going through the affiliation & delegation process.  I wasn't quite clear who approves the affiliation & delegation request?  Is it sent to the company's email address?

---

**vsi** (3/21/2025):

The company managing the business will need to approve the request. They will receive a notification via email and can also view the pending request in their account.

---

**dahkong** (3/21/2025):

Thanks for the quick reply.  How is the company managing the business determined?  Is the company managing the business the Registered Office, or is there a new managing business contact/email address?

---

**vsi** (3/24/2025):

It could be a law firm or an entity with the authority to manage business in BC registries

---

**dahkong** (3/24/2025):

Hi vsi,

When and how is that authority granted to a law firm or an entity to manage the business?  Can there be multiple entities that have the authority to manage a business?

---

**vsi** (3/24/2025):

Authority is granted to the account associated with the business , or given to another entity (Ex: law firm) through delegation
There can be multiple entities that have the authority to manage a business.

---

**dahkong** (3/24/2025):

Thanks vsi.  That's quite helpful.

Are you able to review my scenario below to confirm that my understanding is correct in the scenario of an incorporation (creation of a new company)?

1)  A law firm is using a third party application (API Partner) to file an Incorporation application.

2)  The (newly incorporated) business can associate the law firm with the business to grant them authority to file.

3)  Going forward the law firm could then delegate access to other firms or parties as required.

**Question**

Can you confirm whether the *party submitting the filing*  (API Partner) is going to be assigned as the account associated with the business, vs the *completing party* (The user that works at the firm)?

I'm just trying to determine the point of origin for who needs to grant additional associations.  In my scenario, is it the completing party (law firm), or the party submitting the filing (API Partner) that needs to grant the first authorization?

Thanks

---

**vsi** (3/25/2025):

In this scenario, since the law firm is using a third-party API partner to file an Incorporation application, the API partner is auto-affiliated with the business. 
Please test.

---

**dahkong** (3/25/2025):

@RPOwnr  - FYI - I think you're been asking about this as well.

---

**iharder** (3/25/2025):

@vsi Can you please explain how this can be tested?

Also, following this scenario, if the law firm then wishes to perform another filing for the same company through the web interface, they must then ask the API partner to grant affiliation with the firm's own client? With many hundreds of incorporations being made through the API vendor account per month, would there be an automated way to delegate affiliations to firm accounts without being requested?

---

**dahkong** (3/26/2025):

Hi vsi,

Just a few more questions if you don't mind.  We are just walking through some cases for reporting to the firms - as there have been many questions.

* If there are multiple entities that have the authority to manage a business, could any of those entities revoke access of another entity?  

* Could any of the entities associated with the business delegate access to another entity independently - without permission from any other the other associated entities?

* If there are multiple entities associated with a business and a request is made to delegate access, do all entities receive the request, or is there a "master" account that would need to do that?

Thanks

---

**vsi** (3/27/2025):

1. In the current setup, the option to revoke access is not available.

2. If the entity has the rights to manage the business, they can share it with other parties.

3. We are currently testing this workflow and will provide feedback once it's complete. I'll provide an ETA for the feedback this week so you can plan accordingly

---

**dahkong** (4/10/2025):

@vsi  - Just wanted to follow up on item 3.  If there isn't a "master" account, does that mean any party that was affiliated with the business could provide access to anyone?


> If there are multiple entities associated with a business and a request is made to delegate access, do all entities receive the request, or is there a â€œmasterâ€ account that would need to do that?

---

**vsi** (4/10/2025):

Hi - this specific scenario is currently being reviewed. The entity(ies) who has access to manage the business are expected to receive a request. 

Thanks!
