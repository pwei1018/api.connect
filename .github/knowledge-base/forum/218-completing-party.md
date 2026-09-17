# Completing Party

_Category: Uncategorized · Source: BC Registries API community forum_

**dahkong** (1/18/2023):

Hi there,

I had some questions and comments with respect to the suggestion that the service provider would be the completing party for filings (not to be confuse with Authorized Signatory).  Would it be possible to pass along the following for discussion with your team?  I would be interested in feedback on the legal perspective.

1. Section 15 of the BC Business Corporations Act (https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02057_02#section15) outlines the obligations of the Completing Party.  Specifically section 15(1)(a)(i-iii).

 
**Obligations of completing party**
>**15** (1) A completing party must,
 (a) before an incorporation application is submitted to the registrar for filing to incorporate a company,
(i) examine the articles and incorporation agreement to ensure that both are endorsed within the  meaning of subsection (2),
 (ii) designate as incorporators, in the incorporation application, all of those persons who have endorsed both the articles and the incorporation agreement and no other persons, and
 (iii) complete the completing party statement in the incorporation application, and
 (b) after the company is incorporated, deliver to the delivery address of the company's records office, or mail by registered mail to the mailing address of the company's records office, the originally signed articles and incorporation agreement examined by the completing party.
 (2) For the purposes of subsection (1), a record is endorsed if
 (a) the record contains a signature line for each signatory with the name of that signatory set out legibly under the signature line,
 (b) an original signature has been placed on each of those signature lines, and
 (c) the completing party has no reason to believe that the signature placed on a signature line is not the signature of the person whose name is set out under that signature line.


**Question:  Is the expectation that the service provider has viewed and confirmed that signatures have been received?**



2.  Section D of the Incorporation Application (https://www2.gov.bc.ca/assets/gov/employment-business-and-economic-development/business-management/permits-licences-and-registration/registries-forms/form_01_com_-_incorporation_application.pdf) indicates:


> COMPLETING PARTY â€“ The completing party must be an individual, not a corporation or a firm.

**Question:  As the completing party must be an individual, and not a corporation or a firm, do we as the service provider have to select someone from our organization to be the completing party?**

 In connection of the requirements of the completing party in section 15 of the BCBCA, we would find this very challenging to make commercially viable.




3.  From an End User (e.g. Paralegal working at the firm) work flow perspective, it is quite common for the Completing Party to request a copy of the Incorporation Application via email upon completion of the Incorporation (13(3)(a)(ii)) [ https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/02057_02#section13]. 

> Incorporation
 **13** (1) A company is incorporated
 (a) on the date and time that the incorporation application applicable to it is filed with the registrar, or
 (b) subject to sections 14 and 410, if the incorporation application specifies a date, or a date and time, on which the company is to be incorporated that is later than the date and time on which the incorporation application is filed with the registrar,
 (i) on the specified date and time, or
 (ii) if no time is specified, at the beginning of the specified date.
 (2) After a company is incorporated under this Part, the registrar must issue a certificate of incorporation for the company and must record in that certificate the name and incorporation number of the company and the date and time of its incorporation.
 (3) After a company is incorporated under this Part, the registrar must
 (a) furnish to the company
 (i) the certificate of incorporation, and
 (ii) if requested to do so, a certified copy of the incorporation application and a certified copy of the notice of articles,
 (b) furnish a copy of the incorporation application to the completing party, and
 (c) publish in the prescribed manner a notice of the incorporation of the company.

**Comment:   I'm quite confident we would receive quite a bit of push back from firms if the work flow was altered in which the service provider received an emailed copy of the Incorporation Application to pass along to the End User.**

---

**dahkong** (3/30/2023):

Hi @jlane 

Thanks for revisiting this.  We were hoping it would be possible to consider this post as a potential solution.  

https://discourse.onebc.ca/t/user-authentication-and-security-for-premium-accounts/210

I realize @thor mentioned there are internal challenges with getting approval for this, but it seems if we had that in place, changes to the architecture with respect to the completing party would be relatively minimal.

* Users that access the system outside of an API partner are required to use their BCeID, so seemingly something is already in place to facilitate use of the BCeID.
* The person that's associated with the BCeID would be the completing party ;
* Any filing confirmations would be sent to the person that has logged in using their BCeID, addressing any potential privacy concerns;
* Potential creation of a "submitting party ID", for recording of the API partner doing the submission.

Thank you for your time and consideration.
