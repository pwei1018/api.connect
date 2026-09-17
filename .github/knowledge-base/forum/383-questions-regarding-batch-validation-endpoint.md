# Questions regarding Batch Validation endpoint

_Category: STRR · Source: BC Registries API community forum_

**spencer.gervais** (2/12/2025):

Booking.com has some questions regarding the proposed batch validation endpoint in the STRR API

1. Is there a way to guarantee that we will have a result returned immediately? providing a callback URL that is accessible over the public internet is not simple (e.g. auth and security concerns) and immediate results are much preferable to us to fit in with our current validation architecture. Eventually we can move away from requiring batch validation, but that is not feasible before H2 at the earliest.
2. In the schema we've seen, there's no response body schema. Is it possible to share this schema, and if its different, what the request body of the callback will look like?
3. Is the callback URL paradigm guaranteed or is it liable to change?

---

**mbertucc** (2/15/2025):

@spencer.gervais Thanks for reaching out with your questions!

Iâ€™ve connected with our technical architect, and youâ€™ll find their responses below. Let me know if you need any further clarification. 

1. No, some of the requests are too large, hence using an OAS callback. The requirement is to submit the entire set everyday, and for some groups that's in the 10s of thousands. We suggest you putting some key identifier into your callback.
2. We'll check and ensure the spec is posting properly.
3. It's not going to materially change. In discussion we're looking at have the base domain added into the registration, but this would not change the callback specification, just rather confine the domain the callback URI can use.

---

**taivo** (3/21/2025):

Re: callback URL and response body. 
What are the criteria we send that will trigger a callback? Is there a number of validations?
If you are returning a callback response, how will we know? i.e. what are the possible responses with data and with callback?

FYI the POST /permits/:batchValidate return an error message right now using your sample data from your API. I have made another discourse post on this but have gotten no replies.

Example request:
```
curl --location 'https://sandbox.api.connect.gov.bc.ca/strr/v1/permits/:batchValidate' \
--header 'Account-Id: OUR_ACCOUNT_ID' \
--header 'Content-Type: application/json' \
--header 'x-apikey: [REDACTED]' \
--data '{
  "control": {
    "count": 2,
    "callBackUrl": "http://example.com/jurisdiction/hostsBatch?token=[REDACTED]"
  },
  "permits": [
    {
      "identifier": "H12345678",
      "address": {
        "unitNumber": "12A",
        "streetNumber": "234",
        "streetName": "Test St",
        "postalCode": "H0H0H0",
        "city": "Test City"
      }
    },
    {
      "address": {
        "unitNumber": "12A",
        "streetNumber": "234",
        "streetName": "Test St",
        "postalCode": "H0H0H0",
        "city": "Test City"
      }
    }
  ]
}'
```
Current response:
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": "errors:[code:INVALID_REQUEST,message:'control' object does not have required attributes.] "
}
```

---

**mbertucc** (3/24/2025):

Hi there, 

Thanks for your continued engagement and questions.

To clarify, the SPEC has already been released. It was shared ahead of the Sandbox at the request of the Platforms team, who required early access to support their planning.

Weâ€™ll share an announcement as soon as the Sandbox is ready for use.

---

**taivo** (3/27/2025):

RE: spencer.gervais, Feb 12, Q2:

> In the schema weâ€™ve seen, thereâ€™s no response body schema. Is it possible to share this schema, and if its different, what the request body of the callback will look like?


And your Feb 15 response to Q2:

> Weâ€™ll check and ensure the spec is posting properly.

We do not see the requested callback response body schema in the SPEC provided. Is this available somewhere?

---

**spencer.gervais** (3/31/2025):

To clarify on this, our batch validation is done in a particular way, where we only send <=3000 registrations at a time, we don't currently have a process which sends all registrations at once, so fulfilling this would require us to modify our process a bit. Can you confirm:

1. Even with this logic (sending a few batches of a fixed size query), we cannot guarantee immediate validation response
2. Sending just a single query to the batch validation endpoint for all the data is sufficient such that we do not need to break it up further into smaller chunks (i.e. there's no "max size" for the endpoint, and it will just post the data to the callback URL regardless). This would at least make it slightly easier to handle on our side.

We were hoping that doing this would allow us to validate and return a synchronous response (as we have a known size), so this would fit more cleanly in our existing system. An endpoint which may return data or may not isn't really useful if we can't predict its behavior, as we will have to assume the data will be returned asynchronously anyway.

If this is a hard requirement, we would re-iterate that we need to be able to see the POST body of the asynchronous callback, as well as we would need clarity on the format of the callback URL (i.e. whether its the query path for a pre-defined URL, or whether we have to send the entire qualified URL)

Also, if there is a possibility that the endpoint does synchronously return validation response, that is also missing from the API spec and should be added back in.

---

**spencer.gervais** (3/31/2025):

Another set of questions we have for this involve authentication.

Is there some way we can authenticate the call coming from your system? Is there some sort of IP-whitelisting or API key we can configure or will we need to enforce the authentication control through some parameter passed in via the callback URL.

If, e.g. a token is provided in the callback URL, having a guarantee of the maximum delay in processing will allow us to set a reasonable TTL

---

**arlen.tees** (3/31/2025):

Good afternoon,

Yes, we can upon request (in an email to [REDACTED_EMAIL]) provide the IP Addresses of our outbound services.

For the batch async we don't, as of yet, provide any suggested bounds on the reply. We are leaving the batch call as async, and are getting a sample of the response ready to publish.

And finally, yes, we strongly advise you to add a token to the query string of the callback url

---

**spencer.gervais** (4/11/2025):

thanks for the response. 

follow-up question: is there any chance you would support alternative types of authentication on your side? e.g. if we had OAuth, could we provide you client credentials and you fetch a token you could attach to our callback endpoint? or should we focus on the short-term token generation and IP allow-list?

---

**arlen.tees** (4/11/2025):

I've checked in with the team that manages our authentication, and we have no plans currently to use third-party partner OAuth.

Thanks!

---

**spencer.gervais** (5/8/2025):

Following up once more.

For this endpoint, are there guarantees about the order of the data generated? Can we always be sure that the output matches the order of the input? 

The main issue is whether we can map identifiers from the input such as hotel ID or room ID to the output by maintaining the order in which they were populated. Otherwise, it seems the only thing we can do is map the combination of identifier+address to the output of the batch validation. Please let me know if this makes sense.

---

**arlen.tees** (5/8/2025):

Hi, I'm checking in with our technical architect and will post a reply as soon as possible, thanks!

---

**arlen.tees** (5/9/2025):

Heard back from our technical architect: if the batch size is less than 5000, the order is maintained. If it is more than that, the order is not guaranteed.

Hope that helps!
