# BC Short Term Registry API - :batchValidate requesting data not in spec

_Category: STRR · Source: BC Registries API community forum_

**taivo** (3/19/2025):

Getting the following error message from Developer API portal using provided test data:

```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[code:INVALID_REQUEST,message:'control' object does not have required attributes.,code:INVALID_REQUEST,message:'permits' object not present in the request.] "
}
```
As you can see, the batchValidate POST body definition has no such element:
![batch_validate_body|466x500](upload://gFJ0dZLaA7EePhwsfAPkv9OFa7i.png)

Can anyone help us interpret this?

---

**taivo** (3/19/2025):

If I change the `data` element in the POST body to `permits`, the error is reduced to
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[code:INVALID_REQUEST,message:'control' object does not have required attributes.] "
}
```
However, the control element contains all required elements specified in the API docs:
```
  "control": {
    "count": 2,
    "callBackUrl": "http://example.com/callbacks/bcstr?token=[REDACTED]"
  },
```

---

**taivo** (3/21/2025):

I have re-posted this in STRR. Please go to https://discourse.onebc.ca/t/bc-short-term-registry-api-permits-batchvalidate-requesting-data-not-in-api-spec/459?u=taivo

---

**mbertucc** (3/21/2025):

Hi Taivo, I have asked our Technical Architect to provide an answer to your question as soon as I get it I will post it.  

Thank you for your patience

---

**mbertucc** (3/21/2025):

HI Taivo, 

Thanks for your continued engagement and questions.

From our Technical Architect 

To clarify, the SPEC has already been released. It was shared ahead of the Sandbox at the request of the Platforms team, who required early access to support their planning.

Weâ€™ll share an announcement as soon as the Sandbox is ready for use.

Please let me know if you require further clarification

---

**taivo** (3/21/2025):

We do need further clarification, thanks.

Is "The SPEC" your reference the yaml RELEASE CANDIDATE doc with dated 2025-03-15 that we get from clicking "Download the Specification", here: https://developer.connect.gov.bc.ca/en-CA/products/strr/overview

```
info:
  title: BC Short Term Rental Registry Validation API
  version: '0.7'
```

We were directed to follow these `Account Setup` directions: https://developer.connect.gov.bc.ca/en-CA/products/get-started/account-setup

We have set up our Service BC account, gotten our API Sandbox key, and are trying to access the validation endpoints outlined in that doc. 

Are you saying that the Sandbox is currently unusable for testing? And that all we can do so far is to code off of the `API Version 0.7 2025-03-15 Release Candidate` doc?

I feel like I must be misinterpretating what you're saying, as we have provincial requirements to start validations May 1st, about 5 weeks away. 

If this is the case, when can we expect to test against the sandbox, in order to be able to advance to Step 7 of `Account Setup` "After completing your testing, email a request for keys to BC Registries Production Environment. "?
