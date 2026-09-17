# Endpoint to create document access requests - error:Invalid Document Type

_Category: Report an Issue · Source: BC Registries API community forum_

**Greg** (8/30/2022):

Using the API programatically I receive the error:

Invalid Document Type

Using the site:

https://bcregistry-demo.apigee.io/docs/regsearchproxy/1/routes/businesses/%7Bidentifier%7D/requests/post

I receive the error:

An unknown error occurred while making the request. Please verify your connection and try again. If you continue to experience issues please contact support

It appears the documentation of the API page is not correct when referencing the URL to use.

This does not work programmatically:

https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/{identifier}/requests

This does:

https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/{identifier}/documents/requests

The documentation is missing the 'documents' part in the url.
![Screen Shot 2022-08-30 at 8.50.34 AM|690x204](upload://95jzcQrnn754cZ3Al5xBjkB6ikj.png)


I am seeing the URL documentation mismatch and the call returning different errors depending on the way I try to make the request through the website or programatically.

URL used:

https://bcregistry-sandbox.apigee.net/registry-search/api/v1/businesses/FM0601236/documents/requests

I used this is the JSON request:
{
  "documentAccessRequest": {
    "documents": [
      {
        "documentType": "BUSINESS_SUMMARY_FILING_HISTORY"
      }
    ]
  }
}

Error:

{"errorMessage"=>"API backend third party service error.", "rootCause"=>"message:[error:Invalid Document Type] "}

Through the webpage I get this:

![Screen Shot 2022-08-30 at 8.45.56 AM|514x499](upload://j3Y9c9wtAjb1nRW7lXOQ1QsrDso.png)

I can search through the webpage so I know that much does work and that I am authorized to do that much.

---

**jlane** (9/8/2022):

Hello. Thank you for this message. I will raise this concern about the API documentation. In the meantime, can you please run all examples using the postman collection we provided?

Please reply if you don't have a copy of the collection and I can send that to you right away.

---

**Greg** (9/8/2022):

Please send me a copy of the collection.

---

**Greg** (9/9/2022):

I continue to get this error:

message:[error:Invalid Document Type]

All these types were attempted:
BUSINESS_SUMMARY_FILING_HISTORY, CERTIFICATE_OF_GOOD_STANDING, CERTIFICATE_OF_STATUS, LETTER_UNDER_SEAL

Return:

message:[error:Invalid Document Type]

---

**jlane** (9/9/2022):

Good morning.

I am working with the team to get our documentation updated. One small change within this call
POST {{base_url}}/{{version}}/businesses/{{identifier}}/documents/requests
is that child of "documents" in the body is called "type" instead of "documentType"

{

    "documentAccessRequest":{
        "documents": [
            {
                "type": "BUSINESS_SUMMARY_FILING_HISTORY"
            }
        ]
    }
}

Note that the business and search index are being syncronized because they didn't match. You may encounter this error if you request a PDF for one of the businesses that is out of sync:

{
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:Business not found. "
}

---

**linda** (10/29/2024):

@jlane Hi John! I am encountering similar issues and updating the documentType to type did not fix my issues. I tried using entities returned from the facet endpoint but still no luck. Can you please share the postman collection?

---

**Melissa** (10/30/2024):

Good Morning @linda . I have placed a request to have the documentation updated tp reflect type instead of documentType. As far as the error you're receiving, you mentioned having similar issues as noted on the chain. Are you also receiving a Business not found error? If so, if you provide the environment you are in and the entity you were searching? I could find another entity you could use for your purposes.

---

**linda** (10/30/2024):

Good morning @Melissa ! Thanks for the fast response. I am testing in the sandbox and yes I am getting "business not found". Could you please provide the postman collection and a few test entities for each type of identifiers (like partnership, corporations, etc. ) so I can test and log the differences in the responses? I could not find the list of test entities that are available in the sandbox. 

I also have 2 more questions posted in [my post](https://discourse.onebc.ca/t/unable-to-get-company-summary-via-business-search-api-sandbox/332) - posting here for visibility: 

> 2. Could you please explain the difference in **POST /v1/businesses/{identifier}/requests** & **GET /v1/businesses/{identifier}/requests**? I am mainly interested in BUSINESS_SUMMARY_FILING_HISTORY but would also want to test out the other documents like CERTIFICATE_OF_GOOD_STANDING, CERTIFICATE_OF_STATUS, LETTER_UNDER_SEAL
> 3. Are all Search API endpoints subject to the $1.50 service fee? In addition, there is only one price for business search listed on the website ($7) but I plan to call 3 endpoints. Could you help me to understand which endpoint will trigger the $7 billing?

* POST /v2/search/businesses
* POST /v1/businesses/{identifier}/requests
* GET /v1/businesses/{identifier}/documents/{document_key}

Just an FYI, "/documents" is missing in the the endpoints for document/summary requests in the swagger, which is causing error when testing in the swagger.

---

**Melissa** (10/30/2024):

@linda I've been provided the following postman collection by our developer. However, I've been warned these are not 100% up to date (old search version calls). They should assist you with doing a search, getting business info / documents, document purchases, getting the document purchased list and getting document pdfs / json. I will look into your other post questions.

---

**linda** (10/30/2024):

@Melissa Thank you for your help! I am unable to see the attached files if you shared it (maybe my account needs to be granted access?). 

Regarding my other 2 questions, I am mainly trying to figure out which endpoints to call and the total cost us to verify an entity, including the $1.50 fee. What would happen if we get a non-200 error - do we still get charged for the $7 and $1.50? Does the $1.50 fee apply to all endpoints including the call to download the PDF after ordering the documents? Here is what I want to get for the verification (with the endpoints) and please correct me if I missed anything:

- Search for the entity - POST /v2/search/businesses
- Get entity's detailed summary in JSON - POST /v1/businesses/{identifier}/requests (**should I call POST or GET?**) + GET /v1/businesses/{identifier}/documents/{document_key}
- Get entity's summary in PDF - GET /v1/businesses/{identifier}/documents/{document_key} **OR the Filing endpoint?**

---

**Melissa** (10/30/2024):

Hi Linda,

Sorry about that. please confirm if you are able to access this:

https://github.com/bcgov/registries-search/tree/main/integration-test-scripts/postman

As per the questions about POST vs GET and fees I've provided an answer in your initial post. Let me know if you have follow up questions.

Thank you
