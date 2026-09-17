# Unable to get company summary via Business Search API sandbox

_Category: Uncategorized · Source: BC Registries API community forum_

**linda** (10/22/2024):

Hi team! I am new to the Business Search API so my questions can be very basic. I have reviewed all the questions on the board but could not find the right answers to mine. Here are a few questions I would like to clarify with you:

1) I am building and testing the sandbox based on [this documentation](https://bcregistry-demo.apigee.io/docs/regsearchproxy/1/overview). I am getting the error below when calling the **POST /v1/businesses/{identifier}/requests** (I copied the endpoint from the documentation)
![image|690x315](upload://Abg4KyYMv3Uc0sPimalFB4qECQ.png)

I found a couple of posts with similar issue but their endpoint is a bit different from the documentation: 
**POST /v1/businesses/{identifier}/documents/requests** 

After updating the endpoint with the same request, I now get a different error. 

```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "details:[error:Invalid Document Type],message:Invalid payload "
}
```

Could you please share some insights on this? 

2) Could you please explain the difference in **POST /v1/businesses/{identifier}/requests** & **GET /v1/businesses/{identifier}/requests**? I am mainly interested in BUSINESS_SUMMARY_FILING_HISTORY but would also want to test out the other documents like CERTIFICATE_OF_GOOD_STANDING, CERTIFICATE_OF_STATUS, LETTER_UNDER_SEAL

3) Are all Search API endpoints subject to the $1.50 service fee? In addition, there is only one price for business search listed on the website ($7) but I plan to call 3 endpoints. Could you help me to understand which endpoint will trigger the $7 billing? 
 
* POST /v2/search/businesses

* POST /v1/businesses/{identifier}/requests

* GET /v1/businesses/{identifier}/documents/{document_key}

Thank you!

---

**linda** (10/24/2024):

Regarding the **POST /v1/businesses/{identifier}/requests** error, here is the response I get calling via the swagger. 

![image|690x347](upload://cG8ScIljj7FET0tK5nu8ZLqkxMh.png)

---

**Melissa** (10/30/2024):

Hi Linda. 

1. Our developers have reviewed and confirmed there is an issue in the documentation. The endpoint should be
{{base_url}}/{{version}}/businesses/{{identifier}}/documents/requests. In the documentation it is missing the '/documents' in the path. 

2. The difference between GET vs POST is that POST creates the access request / processes payment where as the GET retrieves active access requests you have already purchased for that business. Note: The /purchases endpoint retrieves all your account access requests across all businesses.

3.  Fees are associated with purchasing documents. In all cases where a document is purchased both the search fee and the service fee will apply. The service fee is always $1.50.  There is a link to the Fees in the Registry Search API page, and when opening it you can review the different search fees based upon the product. To summarize, Business Summaries are $7.00 where a document such as a Certificate of Good Standing, Letter Under Seal or Certificate of Status will be $25.00.

The purchase endpoint that triggers payment is POST /v1/businesses/{identifier}/requests.

---

**linda** (11/7/2024):

Hi @Melissa! Really appreciate the help - we were able to get company summary returned in the sandbox. 

We received our production key today and we are getting the same error again with the Document Access Request endpoint. All the businesses we tested were successfully returned in the Search endpoint but we were unable to get any company summary for these entities. Could you share some insights on this? Thanks!


```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "details:[],message:Business not found. "
}
```
One example we tested:
Identifier: BC0782446

Request body: 

```
{

    "documentAccessRequest":{
        "documents": [
            {
                "type": "BUSINESS_SUMMARY_FILING_HISTORY"
            }
        ]
    }
}
```

---

**Melissa** (11/8/2024):

Good Morning @linda. In the modernized system documents are only available for legalType BEN, CP, SP and GP. There will be work next year to bring over other BC Corporations. The company being searched in the example above is the legalType BC which is why it isn't being retrieved. Can you try again with the types mentioned and confirm if that works?
