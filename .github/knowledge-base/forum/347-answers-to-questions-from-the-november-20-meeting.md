# Answers to questions from the November 20 meeting

_Category: API Meetings · Source: BC Registries API community forum_

**Sandra** (11/29/2024):

Hello, API users. We received a few questions in the chat at the meeting on Wednesday, November 20, and we wanted to provide the answers here for anyone who is interested.

**Is it possible to request that certain companies get migrated from the old BC Online to the new environment for testing in advance of the March launch date?**
Our plans do not include migrating data for specific companies ahead of the March launch date. However, we may be able to set up specific conditions in our environment that will enable particular types of testing. If you have specific needs or concerns, please reach out to us with more information.

**We are new to the integration and we would like to know if there's any protocols for volume spikes?**
No, currently there are no protocols for volume spikes. The API gateway does have the ability to limit volume by API and API key, but we are not currently configuring this feature. Our API services scale up under load, although there is a delay of a few seconds starting up new containers.

**Should we stop sending maintenance hours?**
(We're assuming this question is intended to ask whether API users should avoid sending requests during maintenance hours.) No, we have had almost no planned outages where we configure API requests to return a 503 service unavailable response. However, we do encourage API consumers to handle a 503 response and retry after a delay interval, as there may be unplanned outages that are out of our control, such as when the payment service is down.

**Do you have any timeline for this update? "Extra provincial companies, limited partnerships, limited liability partnerships, etc., will move to the Business Registry in later phases."**
No dates have been announced. BC Registries is currently working to modernize BC Limited Companies, after which they will begin the planning for additional entity types.

---

**Sandra** (12/5/2024):

Here's one additional question from the last meeting, and the answer.

**We would like some clarification on this highlighted part in [this announcement](https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/permits-licences/news-updates/modernization-updates/setup-manage-corporation). Is this change merely impacting the Annual Reports document or will we lose coverage in 'officers' in the Business Search APIs as well?**
![officer-information-change|690x478](upload://72PBPHgsYgD9t0f4y4JVVJNdAnc.png)
Officers will not be maintained in the new business registry. We implemented this when benefit companies went live.
 
This means that officers will not be on the AR filing, Corp summary, or outputs, and data will not be migrated over from the legacy application.
