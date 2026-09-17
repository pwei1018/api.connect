# Question about Email Communications

_Category: API Meetings · Source: BC Registries API community forum_

**RPOwnr** (2/13/2025):

Hey there,

Will email communications from corporate registry with attachments continue to be sent on successful filings of incorporation, change of address, change of directors etc.? If so, will they be sent to the email address value from the `header.email` field mentioned in the request body?

Thanks

---

**olga.potiagalova** (2/18/2025):

Thanks for reaching out!

Emails will not be triggered at this point due to a current limitation in the sandbox.

---

**RPOwnr** (2/19/2025):

Thanks for your response @olga.potiagalova. We want to know about emails behavior in PROD. Without this confirmation, we're unable to migrate from our existing automation to the new APIs.

---

**pattyw** (6/23/2025):

Hi @olga.potiagalova,

Can you confirm if documents and receipts will be emailed out in production like they currently are in the existing system? If so, which email are they sent to in the API requests?

Thank you,
Patty

---

**pattyw** (7/3/2025):

Hi @olga.potiagalova, @achiu - just following up on this question.

---

**achiu** (7/4/2025):

[quote="pattyw, post:4, topic:390"]
Can you confirm if documents and receipts will be emailed out in production like they currently are in the existing system? If so, which email are they sent to in the API requests?
[/quote]

Hi Patty, 

Yes, documents and receipts will be emailed out in the production environment.

The email recipients and the number of emails that go out will depend on the filing type.

For the core filings like incorporation application, alteration, change of address and change of directors, there will be two emails with documents sent out.  

When the filing transitions to the PAID status, an email will be sent to the contact email  and the completing party email provided in the filing json.  The documents attached to the email will include the receipt and documents representing what has been submitted as a part of the filing.

When the filing transitions to the COMPLETED status, an email will be sent to the businesses primary contact email.  The documents attached to the email will include emails relevant to the completed filing.

In general, this is how the core filings work but there will be differences in the number of emails that go out and the email recipients based on filing and business type.
