# Unable to access Business Registries party endpoint

_Category: Report an Issue · Source: BC Registries API community forum_

**simranjeets** (11/4/2024):

Hi,

We are trying to access ***/businesses/{identifier}/parties*** endpoint in the sandbox environment to test the functionality but its returning 401 response. It seems like we only have access to *Registry Search API* but not to *Business Registry API*
 
Could you please help us enable access for Business Registry API  in Sandbox environment and also if there are reference documentation for test data such as Account ID and identifiers; which we can use to search details. The exact API which we are trying to access is:   
https://bcregistry-sandbox.apigee.net/business/api/v2/businesses/{identifier}/parties 

In the attached screenshots, you can verify that using the same api key and account ID, I am able to access business search api but for business api , it returns 401 error.

![image|690x265](upload://uGieokXZmS58HKVQerWrG1tDdWP.png)

Could you please review the issue and help us out. 

Thank you,
Simranjeet

---

**Melissa** (11/5/2024):

@simranjeets in this case the issue is what is deemed public data. With business search it only returns public data, so you are able to retrieve that. With the search that is returning a 401 the call is not a public call. You would need to have that business linked to your account and access it in that way. If it's not a business you own you'd need to purchase information through the business summary via the search api (business summary includes parties data).

---

**simranjeets** (11/5/2024):

Hi @Melissa,

Thank you for your reply. Is there any way we can use the
**Business/api/v2/businesses/{identifier}/parties** endpoint directly.  This endpoint is under Business category which we want to use. Specifically we want to get Director information from the parties data. Business search does not provide us **Director** information, it only provide information about **partners** and **proprietors** .

Could you please confirm how we can use the above mentioned api for our use case.. and what we can do to get access to this data?

Thank you
Simranjeet

---

**Melissa** (11/5/2024):

@simranjeets directors cannot be searched by public accounts. This is not part of our public offering. To see directors for a company, you can search the company itself, but there is no ability to look up a directors name to determine the company(ies) they are linked to.

---

**iharder** (12/2/2024):

@Melissa Can you clarify how one would link a business to an account as you described above? 

We are required to use our premium account (as software developers) to perform filings for numerous legal firms. Say that a firm needs to perform a change of directors filing for a BC company. In the existing system we compare the directors online with those in the firm's records to ensure that we are in sync before proceeding. Would we somehow need to have that BC company associated with our account, or otherwise for that firm to both obtain the director info and submit the filing? If so, what is the process for that association? In the existing system we can perform filings by having the firms provide the company password or a filing code that may have been provided for an annual filing.

---

**Melissa** (12/2/2024):

@iharder when I mentioned linking to an account the processing of using the company password or filing code so that you are able to complete a filing for that company is what I was referring to. When you have a company linked to your account you can view data for that company and initiate changes. As you've noted, viewing the current data can be helpful to confirm if a company needs to make an update or not.

---

**pattyw** (2/13/2025):

Hi @Melissa, a few questions:

1. When you say have a business "linked" to an account, is that a permanent link that we could need to configure in our account or is that a temporary link where we include that information for each API request?

2. Can you please provide a sample of how we include the company password or filing code when trying to complete a filing? I couldn't find an example where the password or filing code is used in the sample requests here: https://bcregistry-demo.apigee.io/docs/businessproxy/1/routes/businesses/%7Bidentifier%7D/filings/post

Thank you,
Patty

---

**Melissa** (2/13/2025):

[quote="pattyw, post:7, topic:337"]
* When you say have a business â€œlinkedâ€ to an account, is that a permanent link that we could need to configure in our account or is that a temporary link where we include that information for each API request?
* Can you please provide a sample of how we include the company password or filing code when trying to complete a filing? I couldnâ€™t find an example where the password or filing code is used in the sample requests here: [https://bcregistry-demo.apigee.io/docs/businessproxy/1/routes/businesses/{identifier}/filings/post](https://bcregistry-demo.apigee.io/docs/businessproxy/1/routes/businesses/%7Bidentifier%7D/filings/post)
[/quote]

Good Afternoon Patty. I've directed your questions to the team that is building the filings for the modernized BC Registry. They've noted they will review and respond:)

---

**vsi** (3/25/2025):

Hi Patty, please review this process and let us know if there are follow-up questions. 
[API Client/Partner Processes](https://discourse.onebc.ca/t/business-registry-api-client-partner-processes/465) 

Thanks
