# Token for callback on search reports

_Category: Tips and Hints · Source: BC Registries API community forum_

**Melissa** (1/10/2022):

Question: For the notification service / callback URL for the high volume searches, we can provide the callback URL in the API search details request as specified in their specs; however, when itâ€™s time for the registry to notify us when the results are ready (via the callback URL), they will need to go through authentication (via username and passwords) and authorization (via token retrieval) first. We will provide the documentation with the steps, links and credentials needed to do so but wanted to confirm that they are aware and okay with this i.e. it may not be as simple as just directly using the callback URL provided in the search details request.

Response: The callback URL provided by the client/consumer can include the security credentials/token at the end of the URL string. This is a common convention for callbacks/hooks. We do not want to support multiple security policies as different accounts will have different requirements.
