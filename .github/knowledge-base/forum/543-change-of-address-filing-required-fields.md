# Change of Address Filing - required fields

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (6/16/2025):

Hello,

For the change of address filing, the registeredOffice and recordsOffice are both required fields. If we're only changing the address for one office and not both, should we retrieve the other office by calling the /addresses route and just resubmit that in the request for the change of address filing?

Thanks,
Patty

---

**achiu** (6/18/2025):

Hi Patty,

Yes, calling the address endpoint to use for re-submitting of the address that hasn't changed is the recommended approach.
