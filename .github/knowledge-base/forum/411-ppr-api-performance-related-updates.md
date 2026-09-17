# PPR API Performance Related Updates

_Category: Upcoming Releases · Source: BC Registries API community forum_

**arlen.tees** (2/19/2025):

An investigation into some recent performance issues with regard to search result report generation led to some potential optimization improvements for the PPR, one of which will impact our API Users.

Because we know report generation is CPU intensive and can be a bottleneck, we would like to add a new http 202 response code back to the API client indicating that the request was received but no response is available from the server yet.

We do not have a firm timeline for this change, but we will be using discourse to send out further communication on this topic. Please follow this post for future updates.

---

**arlen.tees** (3/19/2025):

Following up from the API Users Group meeting that was held today: The 202 status code is now in the PPR SANDBOX environment and available for users to try out. It will be promoted to production in one month
