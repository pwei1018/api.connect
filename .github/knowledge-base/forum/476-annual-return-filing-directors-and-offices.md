# Annual Return Filing - Directors and Offices

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (4/1/2025):

Hello,

Currently, when filing an annual return through BC Online, we don't need to submit information on directors or offices, just confirm the details we see. For the API, directors and offices are required fields (https://developer.connect.gov.bc.ca/oas/br/model/annual_report).

1. Do we only need to send current directors as of the annual report date, or do all directors, including historical ones need to be sent?
2. Which office types do we need to send, only registered and records offices?

Thank you,
Patty

---

**dahkong** (4/1/2025):

Hi there,

Just to further expand on this.  The current AR does not require the submission of any director information, rather the existing directors are displayed during filing and the user is notified of the directors.  Is this now changing with the new API environment, and director information must be submitted?

Thanks

---

**vsi** (4/1/2025):

Hi Patty, 
1. Only send current directors as of the annual report date, you could check the directors' info by using this endpoint:

`{{gateway_url}}/business/api/v2/businesses/:identifier/directors?date={{annual_report_date}}`

2. Only registered and records offices are required. 

Thanks!

---

**pattyw** (4/3/2025):

Thank you for the reply.

Since directors and offices are required fields for the annual return filing, does that mean the directors and offices will be updated as part of the annual report filing? If we submit a director with a cessation date, will the director become ceased as part of the annual report filing?  We note that directors cannot currently be ceased as part of an annual report filing.  Would this be a new requirement?

---

**pattyw** (4/11/2025):

@vsi - just following up on this question

---

**vsi** (4/11/2025):

Hi Patty, 
thanks for your patience, 

please try keeping/testing with the director information blank in the request. 

Thanks!

---

**dahkong** (5/26/2025):

Hi VSI,

Just following up to see if there's more clarification here regarding the director information being submitted during the Annual Return filing.  Will it now be possible to submit a director with a cessation date, and will the director be ceased during that time?

As mentioned above, this would be a new requirement/option, so we just want to make sure we're able to answer questions from clients.

---

**achiu** (5/27/2025):

Hi @dahkong,

The AR filing does require directors & offices data to be submitted via the filings endpoint but the submitted data is not actually used to update any director or office data.  It is just there strictly for review and convenience purposes.

Any director or office changes will need to be done via the appropriate filings.
