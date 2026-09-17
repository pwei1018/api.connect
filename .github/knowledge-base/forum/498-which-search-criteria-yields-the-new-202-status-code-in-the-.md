# Which search criteria yields? - The NEW 202 status code in the PPR SANDBOX environment

_Category: Report an Issue · Source: BC Registries API community forum_

**Greg** (4/14/2025):

I want to test the error handling of the 202 status code but I don't know how to make it show up?

It has to do with this topic:

# [PPR API Performance Related Updates](https://discourse.onebc.ca/t/ppr-api-performance-related-updates/411)

Following up from the API Users Group meeting that was held today: The 202 status code is now in the PPR SANDBOX environment and available for users to try out. It will be promoted to production in one month

---

**mbertucc** (4/28/2025):

Hi there, 

Thank you for your patience. 

From our team 

If the report service is busy it will still accept your request but return a 202 Accepted status with a JSON payload. Youâ€™ll need to resubmit with a GET until the report is ready. Since the 202 only happens under load itâ€™s hard to reproduce in tests.

Mikaela
