# BC Short Term Registry API - /permits/:batchValidate requesting data not in API spec

_Category: STRR · Source: BC Registries API community forum_

**taivo** (3/21/2025):

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

p.s.

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

**arlen.tees** (3/21/2025):

Thanks for posting this Taivo, I've passed this on to the dev team and waiting their response.

---

**mbertucc** (3/24/2025):

Good morning, 


HI Taivo, 

Thanks again for your continued engagement and questions.

To clarify, the SPEC has already been released. It was shared ahead of the Sandbox at the request of the Platforms team, who required early access to support their planning.

Weâ€™ll share an announcement as soon as the Sandbox is ready for use.
