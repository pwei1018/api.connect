# Affiliations and Company Passwords?

_Category: Entities · Source: BC Registries API community forum_

**Haran** (3/4/2025):

Hi, we're looking for clarity around the design and rationale of the Affiliation model and the state of the Company Password.

Could you please comment how these 4 workflows have changed between the current BC Online/COLIN and the Modernization model?

> 1. Firms currently perform filings on behalf of their clients (BC Companies) in our product or through BC online interchangeably and do not require the Vendor to intervene to perform a BC Online filing.
> 2. BC Companies change representing Firms as desired, sometimes with the new Firm using a different Vendor, and filings can continue without intervention from either Vendor using the Company Password.
> 3. Firms expect to exclusively maintain and store their records and information (including KYC) about their Clients (BC Companies) pursuant to their solicitor-client relationship.
> 4. Firms require Vendors to segregate data as a best practice. Currently the vendor can track relationships around transactions as they define (including Firm or Office identifiers) but don't perform the transaction itself (screen scraping method) so there's no collating of all client data.
> 
>     a. Is the invoicing data and filing data returned by the registry coalesced for all Firms under a single Vendor API account if they all use the same Vendor?
---

There appears to be a disconnect between how Vendors and other stakeholders view the API.

In an effort to better articulate the distinctions from a Vendor perspective, we've included a simplified schematic diagram in a post comparing the BC Online system to the modernization model. 

[Post: Vendor Impact Comparison - BC Registry Modernization](https://ascenti.atlassian.net/wiki/external/OGZkZGViMjJmOGY4NDdmOGFiYzc1ZGUxNDhiNzI5YTc)

This was created to respond to Firms asking for details of all the changes that may impact them from the interface, their accounts, payments, and data. A copy of the diagram is included below.

[details="Schematic Diagram - Comparison of BC Online/COLIN & BC Registry Modernization API models"]
Explanations of the elements and swimlanes are available in the post above.
![vendor_bcreg_schematic|, 100%](upload://4wEFhkJ9QejSWVL0Bx7MDpdXpKk.png)


[/details]

Thank you

---

**Haran** (3/11/2025):

Hi I'm wondering if we are able to get some guidance around these issues? Please let me know if anything needs clarifications.
Thanks!

---

**achiu** (3/19/2025):

Hi,

Weâ€™ll be walking through the different process flows around affiliation & delegation at todayâ€™s Service BC Connect API Updates meeting.

---

**Haran** (3/21/2025):

Thanks for the walkthrough of the scenario on Wednesday. I'm wondering if we can revisit the scenarios above to understand how the model applies to them?

(New) 5. From the meeting workflow in the 4th step the API Client would "Create a Business Registry API request for access to the Business(es)". 
- On the first attempt let's say the Law Firm sees the notification and approves the request to manage.
***- How does a vendor managing multiple Law Firm detect if that delegation is in place? Is there an API call to validate the delegation we can check before every Filing submission?***

The real world scenario with no bad actors is as follows.
- Firm A manages company 123 Inc. in Vendor
- 123 Inc. moves representation to Firm B, who also uses Vendor
- Firm A doesn't close the 123 Inc. (data entry error) and files an Annual Report 

Previously 123 Inc. would change their Company Password.  In the delegation model, the API account has the delegation. Firm A could act in error and the Vendor has no mechanism to detect that.

---

(New) 6. From the February meeting it seemed that a new Incorporation through the API sets the affiliation to the Vendor account. 
***a. Does it also allow the vendor to programmatically add the Firm Account?***
***b. If not, is the expectation that the Firm has to seek delegation from the Vendor?***
***c. What specifies who has the responsibility to delegate? The vendor and Firm would never want the Vendor controlling the company data.***

---

1. Firms currently perform filings on behalf of their clients (BC Companies) in our product or through BC online interchangeably and do not require the Vendor to intervene to perform a BC Online filing.
**- I understand it's designed to require intervention with the Delegation model. Unclear pending the answer to 6 if this model makes the Vendor the delegator in new incorporations.**

---

2. BC Companies change representing Firms as desired, sometimes with the new Firm using a different Vendor, and filings can continue without intervention from either Vendor using the Company Password.
**- I understand it's designed to require intervention with the Delegation model. The new Firm and Vendor have to seek Delegation on N companies being transferred**
--
***(New) a. Does this scenario mean N requests for access could be sent by the Vendor at once?***
***b. Does that mean the Firm has N email notifications to respond to?***
---

3. Firms expect to exclusively maintain and store their records and information (including KYC) about their Clients (BC Companies) pursuant to their solicitor-client relationship.
**- Unrelated to the Delegation issue so will split out as a separate ticket**
---

4. Firms require Vendors to segregate data as a best practice. Currently the vendor can track relationships around transactions as they define (including Firm or Office identifiers) but donâ€™t perform the transaction itself (screen scraping method) so thereâ€™s no collating of all client data.
a. Is the invoicing data and filing data returned by the registry coalesced for all Firms under a single Vendor API account if they all use the same Vendor?
**- Looks like this is by design but Vendors must track additional data provided in the API [Reconciling PAD transactions - bcregistry](https://discourse.onebc.ca/t/reconciling-pad-transactions/452/9)**

Thanks, H

---

**vsi** (3/24/2025):

Hi Haran, Thank you for attending the session and for your follow-up questions. We are currently reviewing them and will provide feedback within 3 business days.

---

**vsi** (3/27/2025):

Hi Haran, 
Thanks for your patience, 

**How does a vendor managing multiple Law Firm detect if that delegation is in place? Is there an API call to validate the delegation we can check before every Filing submission?**

We are currently reviewing the API endpoint and will share detailed instructions on how to utilize it for requests. Additionally, we will explore options for your team to enable polling of the delegation status

**a. Does it also allow the vendor to programmatically add the Firm Account?**
**b. If not, is the expectation that the Firm has to seek delegation from the Vendor?**
The firm will need to request delegation if the initial setup was done using the vendor application. Endpoint validations for this setup are in progress, and we will also provide detailed guidance on the requests and parameters.

**What specifies who has the responsibility to delegate?** 
The account used for incorporation can also extend delegation to any parties that request it, as needed.

**I understand itâ€™s designed to require intervention with the Delegation model. Unclear pending the answer to 6 if this model makes the Vendor the delegator in new incorporations.**
The account used for incorporation can also extend delegation to any parties that request it, as needed.

**a. Does this scenario mean N requests for access could be sent by the Vendor at once?**

One request per business would be needed. 

**b. Does that mean the Firm has N email notifications to respond to?**
In the current setup, Yes. 


For the pay related questions, i will get one of my colleagues to help with the feedback.

---

**Haran** (4/1/2025):

Thanks for the replies. It does clarify things though I would reiterate that it seems like this model ignores the law firm "primacy" in the relationship with the client (BC Company). 

I suspect Firms will be reaching out to your teams en masse once they are fully apprised of being cut out of the process and being wholly dependent on the responsiveness of the initial vendor a Firm chooses to use.

Could some consideration be put towards allowing the incorporation to take in the vendor account and an optional Firm account? That way a relationship between the Firm and the BC Company that is their direct client could be created right away and they wouldn't be dependent on the vendor to authorize them.

Or a way to have the vendor add authorization by way of an endpoint so it can be done programmatically right after an incorporation?

---

**vsi** (4/4/2025):

Hi Haran, thanks for your feedback

We are reviewing the scenarios and will confirm back

Thanks!

---

**vsi** (4/14/2025):

Hi Haran, 
We will review the affiliation scenarios during the April 16th session and aim to address any questions related to both affiliation and delegation

Thanks!

---

**Haran** (4/15/2025):

Great thanks, will look forward to reviewing the video as I won't be able to attend that day. 

Hopefully all the various scenarios described in this ticket would be reviewed during the meeting.
