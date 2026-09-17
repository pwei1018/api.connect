# Question about quota/rate limits regarding validation of full set of properties

_Category: STRR · Source: BC Registries API community forum_

**spencer.gervais** (3/31/2025):

Hi all.

I was struggling to find this information in the API agreements but is there any limit/throttling of requests?

We are investigating a system where we replace batch validation of the full set of properties at a single point in time with an asynchronous process which validates all properties individually at least once per day (i.e. instead of single call to batch validation endpoint, we guarantee that each property requests the single permit validation endpoint at least once per day and updates its status for us to take action). We're wondering if we're likely to run into any issues this way, particularly if, for example, the validation requests were done in quick succession.

---

**arlen.tees** (3/31/2025):

Good afternoon, we currently do not have any rate limiting system in place, however we do reserve the right to throttle requests if users are flooding the service.

If validating over 1000 properties, it will be a requirement to use the batch request.
