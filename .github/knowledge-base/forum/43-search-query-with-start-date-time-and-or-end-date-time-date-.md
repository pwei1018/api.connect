# Search query with Start Date Time and or End Date Time - Date Filter has no effect

_Category: Known Bugs · Source: BC Registries API community forum_

**chelsea.hansen** (1/12/2022):

When testing searches via the sandbox API, if we include a startDateTime or endDateTime in the searchQuery this seems to have no effect in filtering the search results.

Do others have the same issue with providing  start or end date?

**Search Query No Start or End Date**
Business Name: AIR CANADA
Match type: Exact only
Start date: nil
End date: nil
Total result size: 26

**Search Query with End Date**
Business Name: AIR CANADA
Match type: Exact only
Start date: nil
End date: January 1 2010
Expected Total result size: 12
Actual Total result size: 26

The below registration should not be returned by query as per the registration date being after January 1, 2010

|**Base Registration Number**|**Registration Date**|
| --- | --- |
|231227N|09/09/2021|
|168117N|8/10/2021|
|107200M|3/9/2020|
|070586M|2/20/2020|
|025256M|1/27/2020|
|658327L|7/25/2019|
|189254L|12/3/2018|
|968314K|8/17/2018|
|725037K|4/30/2018|
|723533K|4/30/2018|
|689768K|4/13/2018|
|578031K|2/20/2018|
|559243K|2/8/2018|
|001454J|12/9/2015|

---

**pheath** (1/13/2022):

Although startDateTime and endDateTime parameters are included in the schema, they are not part of the search logic for Registration Date at this time.

---

**Kaineatthelab** (1/13/2022):

Hi Chelsea, this feature never made it to a priority. We will look at it for a post go live feature depending on demand.
