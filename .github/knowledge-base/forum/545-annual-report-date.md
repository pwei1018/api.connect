# Annual Report Date

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (6/18/2025):

Hello,

I submitted an annual report filing for BC3000367 with the annualReportDate as "2025-05-29". When I check the status of the filing, it shows that it's been completed and that the annualReportDate is "2025-05-29" but on the final annualReport document, it shows the Annual Report Date as "June 18 2025" - is this a bug?

Thanks,
Patty

---

**vsi** (7/4/2025):

Hi Patty, 
we are checking and will get back to you on this scenario.  

thanks!

---

**achiu** (7/9/2025):

Hi Patty,

This is because the annual report date in the AR document is using the filing effective date.

When submitting the AR filing, the `effectiveDate` will need to be included in the filing header block. 

Example of what an AR filing payload should look like with effective date provided in header:
![image|449x500](upload://3hG7O0lL2Mp85R0To1RejR4BmAd.png)

We will be updating the demo postman collection and Business API specs to include this.

Note that I did update the filing effective date for your AR filing manually so the AR document should display correctly for BC3000367 now.

---

**dahkong** (12/1/2025):

Hi @achiu  - weâ€™re just going through some test filings and weâ€™re looking for confirmation/clarification on what the following dates are referring to, and the documentation is not complete:

* EffectiveDate (in the filing header) - AR Report date (you confirmed this above)
* annualReportDate - is this the date of the AR that the system is expecting to be due?
* nextARDate - we couldnâ€™t find a definition on what this is

The fields in the GUI that weâ€™re trying to match up against are:

* Filed Date and Time
* Recognition Date and Time
* Annual Report Date
* Retrieval Date and Time

![image|690x224](upload://e7QLtDsc3kodrngQS6uaYhDWO8j.png)

Weâ€™re trying to determine which date is being used by the system to determine what the date of the AR is due during filing.  This is specifically tied into the validation being done by the system.

Lastly, would it be possible to have the returned message indicate which yearâ€™s AR is due, instead of a generic message?  The current system would let them know which yearâ€™s AR was to be expected.


![image|350x142](upload://dQcmlNpOsVaM5bHmZtBMVbvk292.png)

cc - @pattyw

---

**vysakh** (12/5/2025):

Hi @dahkong 

* Filed Date and Time			-	When the annual report is submitted to registries (System generated)
* Recognition Date and Time	-	Founding date of business
* Annual Report Date			-	`effectiveDate` in the header
* Retrieval Date and Time		-	Datetime when you retrieved the report (if a user download on Dec 1st it will show Dec 1st)

So only `effectiveDate` from the payload is shown in this section.

Will look into the error message and get back to you
