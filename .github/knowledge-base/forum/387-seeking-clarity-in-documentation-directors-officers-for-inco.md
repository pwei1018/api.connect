# Seeking clarity in Documentation - Directors & Officers for Incorporation & Annual Return

_Category: Connect · Source: BC Registries API community forum_

**RPOwnr** (2/13/2025):

Hey,

1. For filing an annual report, a list of directors (described as `individual who is a member of the board of directors of the company as a result of having been elected or appointed to that position`) is required according to the documentation and each director should have an `officer` property which is described as `Person responsible for the management and day-to-day operations of the company.`Based on this, can you clarify if the directors array required for annual report should include both the directors and the officers of a company?

2. In the documentation for partyRole schema, `officer` is provided as an example of roleType. But it is not a valid value. Can you confirm that information about a companyâ€™s officers is not required to be included in an incorporation application? We saw a post stating that officers will not be required, however the documentation says otherwise.
 
3. Will officers information be available for `existing` companies using the endpoint `GET /businesses/:id/parties`? Is it true that officers data is no longer required for filing an annual report?

---

**achiu** (2/19/2025):

We will get back to you on this.

---

**RPOwnr** (3/14/2025):

@achiu Hey there, any updates to share?

---

**trish.reimer** (3/19/2025):

Currently, in Corporate Online, officers can be created and updated within the Annual Report filing.  

When we go live and transition BC Companies from Corporate Online to the new Business Registry, officers will NOT be included as part of the Annual Report filing (in the UI). Instead, people will be able to create/update officers, for no fee, through another transaction (in the UI) as optional and as needed. 

We are planning to migrate the officer data from the Corporate Online system to the new Business Registry.

We are aiming to have this functionality in place for the go live, targeting May, but TBC.

---

**trish.reimer** (3/19/2025):

When we launched Benefit Companies on the new Business Registry, in 2020, officers were not included as part of the incorporation application for Benefit Companies. 

But  note: officers were still captured in the legacy Corporate Online application for other BC Company types. 

Since we announced officers were not going to be included for other BC Company types (in addition to Benefit Companies) on the new Business Registry, we  received feedback from some partners and interested parties over the last few months stating officer information is important and needed to be kept on file with the Registry. 

So based of this feedback, we revisited the decision and will be adding officers back into the new Business Registry.

---

**trish.reimer** (3/19/2025):

Lastly, the team is currently reviewing the officer API and UI's  so we will be in touch soon to share how more on officers.

---

**dahkong** (4/30/2025):

Hi Trish,

I just wanted to follow up on this thread.  We have been receiving some questions from law firms asking for details as to whether officer information is going to be stored, and if they will be able to add/remove officer information through our platform.  Your last response mentioned the officer api and UI was being reviewed.

Thanks

---

**vsi** (5/1/2025):

Hi Daniel, 
It is currently under review, particularly with regards to the officers' information. We will follow up with more details next week.

thanks!

---

**vsi** (5/29/2025):

Hi Daniel, 
The features related to officer information are still under review. Iâ€™ll provide an update as soon as the next steps are available.

Thank you for your understanding and continued support!

---

**dahkong** (5/30/2025):

Thanks vsi.  The other question that came up recently from clients is whether the Individuals of Significant control (ISC) members are going to be required as part of the AR filing as well.  Are you able to look into that as well?

---

**Melissa** (2/3/2026):

@dahkong I recently joined the team as the Product Owner for Entities. Regarding your question about whether Significant Individuals (under the Transparency Register) must be included in Annual Reports: the release date for the Transparency Register has not yet been confirmed. Once the regulations are formally deposited, weâ€™ll have clarity on both the implementation timeline and the specific requirements associated with that release.
