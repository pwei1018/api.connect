# Authentication Question

_Category: Entities · Source: BC Registries API community forum_

**RPOwnr** (2/19/2025):

Hi team,

Thanks for the demo today.

Towards the end of the demo, there was mention about authentication/verification being different for the businesses that we serve. We were told to be mindful about our development work with these changes moving forward.
We're not sure what these changes are. Can you please point us in the right direction?

Additionally, for businesses that we incorporate using the New API, how would these businesses manage their own filings independently should they wish to do so in the future?

Thanks

---

**trish.reimer** (2/25/2025):

For the authentication, API clients will need to your know their client and verify identity. [Here is the current terms that outlines this responsibility.](https://developer.api.bcregistry.gov.bc.ca/shared/api-terms-of-use.pdf) Today, many clients are using the BC Online ID and password to login and track payments. Going forward, these options will not be available.

---

**trish.reimer** (2/28/2025):

To add: API clients will need to know their client (KYC). KYC or KYC check is the mandatory process of identifying and verifying the client's identity (i.e., using passport, drivers licence, etc.) when opening an account and periodically over time. We follow the standard definition used in the financial industry.

---

**trish.reimer** (2/28/2025):

[quote="RPOwnr, post:1, topic:412"]
Additionally, for businesses that we incorporate using the New API, how would these businesses manage their own filings independently should they wish to do so in the future?
[/quote]

There is an option in the UI to grant authorization to someone else. 

We will get back to you about your question on how to do this in the API soon.

---

**RPOwnr** (8/5/2025):

Hey @trish.reimer , could you please share the documentation regarding how a business incorporated using the API can manage their own filings independently?
