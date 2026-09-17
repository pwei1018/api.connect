# RESOLVED - Error (BUG) - 75 Limit Result Set

_Category: Known Bugs · Source: BC Registries API community forum_

**Kaineatthelab** (12/29/2021):

BC Registry has a known error for large result sets. The solution is a document repository, which would allow these PDFs time to render while the user continues to complete their work. In the old system these results were mailed out to users, so we expect this new solution to enhance user experience.

Given I am a personal property user
When I have results that are over 75 registrations
Then I see a modal in the UI that states "Reports containing........(see below msg)"
Then I see the search immediately in my dashboard with an information icon and it will update to a PDF icon when available

Planned Release - December 30th 4pm

![image|690x336](upload://9VwybVhXD6fizPUcuZNJC2Xy8Wi.jpeg)
![image|690x371](upload://mVTzq7KXAjIQURKXwEDgz8ZPjo3.jpeg)

---

**Kaineatthelab** (12/31/2021):

UPDATE - Delay** we are having trouble with reports over 1000 results so will need more time to test. Update coming tomorrow morning.

---

**Kaineatthelab** (12/31/2021):

Today before 4 pm you will be able to test up to 350 financing statement results to produce a PDF (there are only approx. 15 business names with 350+ results).

API details will be updated on developer site at the same time.

JSON results continue to not have a limit issue and are unaffected by this.

---

**Kaineatthelab** (12/31/2021):

DEPLOYMENT COMPLETE

- results less then 300 will work as planned

---

**chelsea.hansen** (1/7/2022):

Is there a known sample name in the sandbox environment that would return a large quantity of results? I guess at this time less than 300 more than 75?

---

**pheath** (1/7/2022):

An Individual Debtor Name search with the parameter 'David Smith' will return 200+ results. (or use Michael Smith for 200+ results)

For Business Debtor Name search:
Pioneer Garage Ltd. - about 200 results
TOLKO - about 165 results
Amazon Data - about 155 results

Note that Manufactured Home Registration Number and Registration Number searches will only return a single exact result (or none).

---

**chelsea.hansen** (1/11/2022):

On testing these high volume result sets today, on request to receive the PDF we are receiving time out response errors.

Is this being experienced by others?
Any solution suggestions?

**Here is request info:**

{Method: GET, RequestUri: 'https://bcregistry-sandbox.apigee.net/ppr/api/v1/search-results/2860', Version: 1.1, Content: <null>, Headers:
{
Account-Id: *removedForPrivacy*
x-apikey: [REDACTED]
Accept: application/pdf
}}

**Here is response we received**

{StatusCode: 504, ReasonPhrase: 'Gateway Timeout', Version: 1.1, Content: System.Net.Http.StreamContent, Headers:
{
  Connection: keep-alive
  Date: Tue, 11 Jan 2022 21:19:36 GMT
  Content-Length: 169
  Content-Type: application/json
}}
