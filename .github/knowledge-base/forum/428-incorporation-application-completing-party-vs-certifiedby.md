# Incorporation Application - Completing Party vs certifiedBy

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (3/3/2025):

Hello,

For an incorporation application, both the "Completing Party" and "certifiedBy" values are required. In the sample Postman requests, they are set to different values/parties.

From the API page (https://bcregistry-demo.apigee.io/docs/businessproxy/1/routes/businesses/post), the "certifiedBy" field is the "Staff certifying filing." - Can someone confirm if this should be the same value as the "Completing Party" as per the BC Business Corporations Act (https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02057_02#section15)?

If the "Completing Party" and "certifiedBy" values are not the same, can we get clarification on what this "certified by" person is to have certified?

Thank you,
Patty

---

**davemck** (3/10/2025):

Hi Patty, we will get back to you.

Dave

---

**achiu** (3/19/2025):

Hi, yes the "Completing Party" and "certifiedBy" values should be the same person.

We will be updating the sample postman collection to fix this issue.

---

**vsi** (3/25/2025):

Hi Patty, We are targeting to publish the updated collection by Thursday this week and will update you as soon as it's available.

---

**vsi** (3/27/2025):

Hi Patty, 
We should have the postman collection available today, will follow-up with specs in the next 1-2 days. 

The updated collection should fix your noted issue. 

Thank you!

---

**pattyw** (3/31/2025):

Thank for you for the update.

For other filings, like the annual return filing, there isn't a Completing Party but the certifiedBy field is still required. What should be used for the certifiedBy field for these other filings?

---

**vsi** (3/31/2025):

Hi Patty, 
*certifiedBy* would be the legal name of the person authorized to manage the business

thanks!

---

**Haran** (4/1/2025):

This is a bit ambiguous. Is that the name of the user, the name of the responsible lawyer, the firm, the vendor...? 

This seems like it might be related and having a glossary of what the Registry means by Completing Party, certifiedBy, affiliated, authorized to manage, etc. might be useful. 
https://discourse.onebc.ca/t/companies-to-be-associated-in-order-to-submit-filings/417/16

---

**vsi** (4/2/2025):

Hi Haran, 
*certifiedBy* is the legal name of the person, the firm or the business, has authorized to perform the filing. 

We are also looking at ways to enhance the clarity and understanding of the terms to better support users. 

Thanks!

---

**dahkong** (4/2/2025):

Hi Vsi,

The ambiguity stems from the business side in terms of which person would be required to certify in this case.

The three potential parties that can certify based on the information you are providing for a service provider are:

1) Someone at the company (e.g. a director of the company) would sign the registry form as the applicant.

2)  Someone working at the law firm would sign into (currently) BC Online  and submit the filing on behalf of the company.

3)  Based on the information we've been receiving, it's been indicated to us that the API key holder (vendor) could be the a certifying party.

**Question:  Based on the Registry's guidelines, who is the certifying party in the case above?**


When referring to "Certified by", your definition above refers to someone that has authorization to perform a filing.

The Registry form indicates that the "Certified Correct / Name of Applicant" is someone that has read the form and has found it to be correct.

**Question 2:  **

Based on the two different definitions above, can you please confirm if the API filing definition is intentionally different from the Registry form?  If so, will there be a separate field in the API filing to submit the name of the person that has read the form and has found it to be correct?


![image|690x145](upload://lH3vkZLJM6KYjhYxM10aVblk3Aa.png)

Thanks,

---

**vsi** (4/3/2025):

The definition for both UI/form and API is expected to be the same, I will get additional details to further clarify the field definition. 

Thanks!

---

**vsi** (4/3/2025):

For the *certifiedBy* field, the [Full Legal Name] of the person filing is required, certifying that they understand the business and that the information provided is accurate.

- If a company director is filing, it should be the directorâ€™s full legal name.

- If someone from a law firm is filing, it should be the name of that individual.

Please let me know for any further clarifications or question

Thanks!
