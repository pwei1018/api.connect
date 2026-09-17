# Endpoint to get all Businesses and postman collection

_Category: Entities · Source: BC Registries API community forum_

**MKSi** (4/21/2025):

Hi team,

Please help with the following questions -
1. Is there an endpoint in the API specifications through which we can get all the businesses that are associated with an account-id?

2. Will the API specs and Postman collection for the affiliation flow be available on this page https://developer.connect.gov.bc.ca/en-CA/products/br/overview ? Just want to make sure we're using the latest version for testing.
 
Thanks

---

**vsi** (4/22/2025):

Hi @MKSi 

1. You can use Registry search API to search across all businesses [Link](https://developer.connect.gov.bc.ca/en-CA/products/rs/overview) . For searching specifically by account id, you should be able to utilize the latest postman collection, once its available (See 2 below)
2. Yes, that's the correct link. We are targeting to have the updated collection for Affiliation flow uploaded early this week. I will update you as soon as its up.

Thanks!

---

**vsi** (4/28/2025):

Hi @MKSi 
The postman collection has been updated for Affiliation flows. 

Thanks!

---

**MKSi** (4/29/2025):

Thanks @vsi for the response!
On trying the `GET /orgs/:account_id/affiliations `, I got the following error with `504 Gateway Timeout`.  Is it because the account doesn't have any affiliations? Won't the businesses created in the sandbox be automatically affiliated with the account? 
Please advise.
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "{\"fault\":{\"faultstring\":\"Gateway Timeout\",\"detail\":{\"errorcode\":\"messaging.adaptors.http.flow.GatewayTimeout\",\"reason\":\"TARGET_READ_TIMEOUT\"}}}"
}
```

---

**vsi** (4/30/2025):

Hi @MKSi 
will check and get back to you this week

thanks!

---

**vsi** (4/30/2025):

Hi @MKSi 
Please if you could share the *request url* that eventually led to the above error?

thanks!

---

**MKSi** (4/30/2025):

Hey @vsi, 
The request url is `https://sandbox.api.connect.gov.bc.ca/auth/api/v1/orgs/:account_id/affiliations` and I had substituted the `account_id` param with the same value as the account-id set in the request headers.

---

**MKSi** (5/2/2025):

Hey @vsi,

While the above mentioned endpoint still gives the gateway timeout error, I was able to make a successful request using the `https://sandbox.api.connect.gov.bc.ca/auth/api/v1/orgs/:org_id/affiliations/:business_identifier`. Which answered my question about businesses created in the sandbox being automatically affiliated with the account!

I had submitted a few business identifiers for enabling the affiliations testing using this [support form](https://discourse.onebc.ca/t/api-sandbox-affiliation-testing-support-form/505) and did not yet receive a confirmation about the update. But I noticed that the business identifiers I had submitted in the form had the `passCodeClaimed: false` property value and the others `passCodeClaimed: true`(which I assume is the default for businesses created using API system?).  Does this mean that the businesses are ready for testing and if so, are there fake passcodes that can be used for creating affiliation for these business identifiers?

Attaching screenshot for reference
![Screenshot 2025-05-02 at 2.19.54 PM|690x334](upload://geQ007xTQcZSrgzgQxwjtBd3bxa.png)

Thank you!

---

**vsi** (5/5/2025):

Hi @MKSi 
Passcode has been shared for the businesses separately

thanks!
