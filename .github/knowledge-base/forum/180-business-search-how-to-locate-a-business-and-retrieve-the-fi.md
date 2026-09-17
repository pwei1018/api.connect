# Business Search - how to locate a business and retrieve the filing PDF for a single filing

_Category: Uncategorized · Source: BC Registries API community forum_

**jlane** (8/25/2022):

Here are the steps one would take in order to complete this.
1. Search for a business using Business Search Facets - GET /businesses/search/facets
2. Pay for the BUSINESS_SUMMARY_FILING_HISTORY docs - POST /businesses/{{identifier}}/documents/requests
2. Retrieve all of the filings for that business using Businesses Filings - GET /businesses/{{identifier}}/filings
3. Review the response, noting the filing ID and filing name of the filing you're interested in.
4. Using the Business Search API once again, call this to fetch the PDF for 1 filing - GET /businesses/{identifier}/documents/filings/{filing_id}/{filing_name}


Please follow along with the postman collection as it fills in key parameters for you if you follow this sequence.

---

**bhargavi.kallakuri** (8/26/2022):

Hi @jlane ,
I followed the steps and I receieved the error below. I have blocked the account ID for security purposes. Thank you.
![image|690x356](upload://ylQzanLKcB9JlF9l71DI1J9aEG6.png)

---

**jlane** (8/26/2022):

Hi @bhargavi.kallakuri . I missed a step initially, but I have edited the original topic. I forgot to include the step where you pay for the summary and filings; this is required to pull down the filings PDF.

Please give that a try and let me know if you're still getting the authorization error.

---

**bhargavi.kallakuri** (8/26/2022):

[quote="jlane, post:1, topic:180"]
POST /businesses/{{identifier}}/documents/requests
[/quote]

Hi @jlane,

Can you please share a screenshot for step 2? Are you suggesting me to follow the process on 
Postman
 or
https://bcregistry-demo.apigee.io/docs/businessproxy/1/overview

I don't see "POST /businesses/{{identifier}}/documents/requests" on the developer site and I tried  step 2 on postman with the following details and received an error.

**EndPoint** :{{base_url}}/{{version}}/businesses/{{identifier}}/documents/requests

**Request** 
{
    "documentAccessRequest":{
        "documents": [
            {
                "type": "BUSINESS_SUMMARY_FILING_HISTORY"
            }
        ]
    }
}


**Response**
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:[error:Document Access Request can be created only by a premium account user] "
}

---

**jlane** (8/26/2022):

Hello @bhargavi.kallakuri. Sorry for the confusing naming. 
The POST to pay for the summary is described here:
https://bcregistry-demo.apigee.io/docs/regsearchproxy/1/routes/businesses/%7Bidentifier%7D/requests/post

Then, in the postman collection, note that the account ID in the header for that POST call is static instead of being a variable so you will need to update that to be your account.

Here are the headers - make sure your account ID is used:
![image|664x374](upload://voxZIDrubpZYAiWeIx7PNIlg1pK.png)

Here's the body. Note that businessName has been added, but is optional (will be updated in specs shortly)
![image|644x467](upload://jfKgWoTrYeeSKaFfj6EM2ef8M1l.png)

---

**bhargavi.kallakuri** (8/26/2022):

Hi John ,
I have followed your updated steps and I am receiving the following error  at step 2. Please help.
![image|690x397](upload://bBUemdRLDUtz3kAihhrvTMOXYtt.png)

---

**jlane** (8/26/2022):

Hello. can you please confirm that your account id is present in the headers when you made that call?

---

**bhargavi.kallakuri** (8/26/2022):

Yes John . My account ID and key was also present.

---

**bhargavi.kallakuri** (8/29/2022):

Good Morning @jlane ,
Did you have a chance to look into this?

---

**jlane** (9/8/2022):

Hello @bhargavi.kallakuri I am unable to reproduce your issue. If you were given an API key then your account is definitely premium, and you have stated that you entered your account ID as a parameter as well. 

Can you please retry these steps in sequence with a new business just as a a sanity check against errors or omissions. Please post your calls/responses here if possible or via email is it's easier to format.

---

**bhargavi.kallakuri** (9/8/2022):

Hi John .I repeated the steps but getting the same error at step 2. May be we should try to resolve it over a call .
