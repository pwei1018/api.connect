# API User Inquiries: Responses from Product Owners

_Category: API Meetings · Source: BC Registries API community forum_

**lance.hall** (2/25/2025):

We have received recent inquiries from our API users, and the responses provided are from our Product Owners.

We will continue sharing answers to your questions on this channel as they come in.

**Question 1:** 
It was mentioned last meeting that we would be invoiced daily â€“ is it for that dayâ€™s transactions, or is the pad submission for the previous dayâ€™s submissions?

* if itâ€™s for that dayâ€™s transactions, when is the cut off time?  Ideally itâ€™s not for the current day to allow for a buffer in the event thereâ€™s some unforeseen issues.
* How much notice can they provide us with (with this info) before pulling the funds?
* to ensure we have the funds in our account to cover the amount and;
* to know how much notice we can provide to our clients about how much we'll pull from their account to ensure they have adequate funds in the account
* What is the cut off for transaction, that will be included in the funds being pulled daily at 6 pm?

**Answer:** 
PAD is billed each evening at 6pm. At 6pm the transactions that have happened since the last dayâ€™s batch are rolled up and prepared for debiting. Each evening your accountâ€™s transactions for the day are rolled up and sent to the back end to be debited from your bank account. At this time, we will send an email summarizing the amount you will be debited. It will take 2 business days until the money is debited from your bank account, so thatâ€™s the buffer time. 

**Question 2:** 
What information will your summary/.csv file contain?  It was mentioned there was a folio field available, but as firms have their own folio naming conventions, it would be ideal if the Registry could provide additional information (e.g. firm thatâ€™s doing the filing, since it was mentioned that the Registry is assigning records to firms).  Itâ€™s very common that a user thatâ€™s incorporating a company in a rush uses â€œNew numbered Companyâ€ in the folio field.

**Answer:**
The â€œStatementsâ€ and â€œTransactionsâ€ tabs are currently part of all accounts on the platform. When you are logged in, click your account name in the top-right corner. From there, choose â€œAccount Infoâ€ to get a view of all settings available. The Transactions section is meant for searching and filtering the complete list of transactions on the account. Every charge made on the account will show in the Transaction list. Here are the columns available. The Transaction list is a payment record and wonâ€™t have the complete filing details such as completing party in it.

* Transaction
* Transaction Details
* Folio Number
* Initiated By 
* Date 
* Purchase Amount
* GST
* Statutory Fee
* BCOL Fee
* Status 
* Corp Number 
* Transaction ID 
* Invoice Reference Number

**Question 3:** 
If a filing is performed in error, what is the process for to reverse their filing and obtain a refund (if applicable)?

* Do you have any insight to the types of queries and frequency of calls you would get for this?  Is this potentially being passed on to us now?
* How would a refund be processed?  I assume they would be contacting the Registry directly vs us?
* What if there are corrections needed on the filing? I assume they would still contact the Registry directly?  Note firms would definitely push back if we were the point of contact here in the context of client confidentiality.
* What if there are issues with the Registries API that cause incorrect information to be submitted.

**Answer:** 
If a filing is done in error a correction filing will need to be completed, and this is a staff-only function.  There is no automated refund process.  Refunds would only be processed if the error was made by BC Registries or its staff.  In the case of a refund being issued, it would be back to the method of payment.  Please note: if a correction is made, in nearly every case, this will not â€œreverseâ€ the error, rather it will add a new entry onto the ledger indicating that the error occurred and what the new corrected entry should be.

**Question 4:** 
In the current system, a draft filing page is returned and users had to confirm the filing with a â€œpay and fileâ€.  Is that something the Registry is still providing through the API? 

**Answer:**
Yes

---

**iharder** (2/26/2025):

Thank you for the replies to those questions, Lance.

A follow-up to the answer to question 4... this question had been asked during the recent API meeting and the answer was no. To clarify, the draft filing page was a formatted response that the user can view to verify all information prior to committing the filing. Is that what you are referring to? That is, would we be able to retrieve a draft document or other formatted response or will it be just the data elements returned in JSON format?

---

**davemck** (2/26/2025):

Hi Ian, 

I was not at the API user group meeting, but as I read your response here, I'm wondering if your question was about sandbox specifically as opposed to how I read it, which was generally about file and pay.  Did I misunderstand your question the first time?  Do you remember who it was who said "no" so I could get a clarification from them?

Thank you,

Dave

---

**iharder** (2/26/2025):

Hi Dave,

I believe it was one of the developers that was doing the demo, but I had also asked the question at the recent meeting between ALF/Ascenti and the API team and was told no at that time. I can't recall specifically who answered then. The recent meeting was recorded and I'm eager for it to be published so I can review it as it contains helpful filing information. It should also contain my question and the response.

My question is more general as opposed to the sandbox specifically (although having it available there would allow us to properly test before going into production).

---

**achiu** (3/19/2025):

> A follow-up to the answer to question 4â€¦ this question had been asked during the recent API meeting and the answer was no. To clarify, the draft filing page was a formatted response that the user can view to verify all information prior to committing the filing. Is that what you are referring to? That is, would we be able to retrieve a draft document or other formatted response or will it be just the data elements returned in JSON format?

Hi Ian, the business API has the ability to save and retrieve draft filings as demonstrated via the business API postman collection demos recently.  With a draft filing, it is possible to validate whether the filing meets all the submission critiera before doing the actual submission via file & pay.

Providing documents related to a filing during the draft stage of a filing is not supported.  Only the retrieval of the draft filing json is supported via the Business API.

---

**dahkong** (4/8/2025):

Hi @lance.hall  - I just wanted to confirm an example with you based  on your response to Question 1 above.

> Answer:
PAD is billed each evening at 6pm. At 6pm the transactions that have happened since the last dayâ€™s batch are rolled up and prepared for debiting. Each evening your accountâ€™s transactions for the day are rolled up and sent to the back end to be debited from your bank account. At this time, we will send an email summarizing the amount you will be debited. It will take 2 business days until the money is debited from your bank account, so thatâ€™s the buffer time.


**Scenario details:**

* ABC Company is incorporated on Monday at 9:00 am
* This incorporation transaction is rolled up and a notification is sent to the API Partner that the fees for this incorporation till be debited from their bank account.
* The funds for the incorporation would be pulled from the bank account on Wednesday 

**Additional Questions:**

1.  Can you confirm whether the details on the scenario above are correct?

2. Would the notification email be sent on the evening that the incorporation transaction is rolled up? - e.g. Monday evening in this example

3. Can we say with absolute certainty that fees would not be debited until Wednesday (in this example), which is two days after the transaction?  Do we know what time on Wednesday (in this example) the funds would be debited, or is that subject to the banks?

---

**travis.semple** (4/8/2025):

1. Seems correct
2. Yes, the same night the invoices were created (around 5-6 pm)
3. Subject to the banks, can vary a bit
