# Getting directors for a business

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (2/14/2025):

Hello,

Is there an API path for retrieving just the directors for a business? The " get /businesses/{identifier}/parties" route seems to return all parties associated with a company.

Would we need to parse the "/parties" response to extract the directors information or what would be the recommended approach to get just the directors?

Thank you,
Patty

---

**vysakh** (2/18/2025):

replace `/parties` with `/directors`

Note: More details will be shared in the next meeting
