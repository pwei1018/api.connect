# Business Registry Sandbox Samples

_Category: Uncategorized · Source: BC Registries API community forum_

**iharder** (9/11/2024):

Thanks to the team for releasing the new business registry API sandbox recently.

The description in the postman collection indicates that the data may not be correct as it was created in the development environment. It notes that sandbox data should be used.

I'm using a postman collection for the registry search API sandbox. While I can retrieve business records with that, it seems to be production data and is not recognized when attempting business filings in the sandbox. For instance, I can find my company name with the registry search, but when trying an annual filing API call, it returns saying that the business can't be found.

I'd like to suggest that a list of businesses in the sandbox be made available as an HTML page, or spreadsheet. Additionally, if those were reset on a daily or weekly basis then we can mess with them and still have them available for others to work with soon after.

---

**davemck** (9/12/2024):

Thank you for your question.  We will set up something shortly and record the demo so others can view it.

David

---

**iharder** (9/12/2024):

Thanks David, much appreciated.

Ian

---

**iharder** (2/4/2025):

We're still experiencing the same problems with the data, so that we're not able to find a company to perform any filings. The exception is the draft incorporation that doesn't require an existing company. However, we're still not clear on what API steps are required to complete that as a demo is not yet available as far as we're aware.

Even if the data issue was resolved today so that the sandbox was usable and we were able to figure out the sequence of API calls and elements required to successfully complete the various filings, that gives us less than a month to go live. I hope the API team realizes that this timeline is not realistic.

---

**trish.reimer** (2/13/2025):

Hello, There will be a demo on Feb 19. We look forward to seeing you there.

Trish

---

**achiu** (2/19/2025):

In order to perform filings on a business, your API key will need to linked to an account that is associated with a given business.  This means that providing sample businesses linked to other accounts is not possible.

The postman collection is intended to provide business api endpoint calls with example request payloads and query parameter usages.  The business identifiers are in the collection cannot be used.

In the BC Business Registry API Updates meeting today, we will be demoing the latest updates to sandbox that will allow creation of a business via the incorporation application filing.  With the ability to create your own business, it will be possible to file any subsequent maintenance filings as well as create any data that is required for your testing purposes.

---

**iharder** (2/19/2025):

From a my previous question we were informed that linking a company to an account is simply done by using a password or filing coding when filing:

https://discourse.onebc.ca/t/unable-to-access-business-registries-party-endpoint/337/3

I don't understand how we can't use a given password to use sample data. In the simplest case all of the sample companies could be given the same password or filing code.
