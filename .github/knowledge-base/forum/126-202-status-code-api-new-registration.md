# 202 Status Code - API New Registration

_Category: Report an Issue · Source: BC Registries API community forum_

**chelsea.hansen** (3/17/2022):

Starting today we are receiving a 202 status code response when filing a new registration via the BC PPR API. This status code is not in the specs can details be provided?

---

**Kaineatthelab** (3/17/2022):

Hi Chelsea, there was an issue related to our release today where you can't add a registration to your table. We are working to fix that urgently now and roll forward(1 hour or so) RESOLVED

Are you able to give any more details to that issue please? Is it it happening all the time, does the registration get created which would be a 201 if it was? As 200 is a success response but we are checking it was recently added for the call back response.

---

**chelsea.hansen** (3/17/2022):

[quote="Kaineatthelab, post:2, topic:126"]
e you able to give any more details to that issue please? Is it it happening all the time, does the registration get created which would be a 201 if it
[/quote]

Thanks for the details.
It has happened with every new registration we had today.
The registration is successful but it seems that the failure might happen when trying to get the PDF verification.
We have handling for a 201 and 200 status code but not a 202, so I understand at the moment we are working on adding 202 as an exception code.
Messaging that might help "The HTTP status code of the response was not expected"

---

**Kaineatthelab** (3/17/2022):

The 202 response on a Registration means it was *successfully* received and accepted, but that the PDF output has not yet been generated and is pending creation "Pending report generation"

It was updated but slipped the site update. Thank you!!

---

**chelsea.hansen** (3/24/2022):

Thanks, do you happen to have an optimal wait time or average wait time it takes for PDF output generation on a new registration, discharge, renewal or amendment?
