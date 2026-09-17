# Change of Directors - Name Change

_Category: Entities · Source: BC Registries API community forum_

**iharder** (4/8/2025):

When submitting a director change in the current system, there is a requirement that only legal name changes are submitted. That is, spelling corrections etc are not permitted and must be done through some other process like calling the registry. The new API has an action called 'nameChanged.' Does the same rule apply, so that only a legal name change is permitted, or can it be any change?

---

**vsi** (4/11/2025):

Hi Ian, 
we are looking at this scenario for name change and will get back to you with next steps

Thanks!

---

**achiu** (4/14/2025):

For the director change filing via the Business API, the following changes are permitted:

- Appointing a new director
- Ceasing an existing director
- Changing the address for an existing director
- Changing the legal  name for an existing director

As for the "actions" list in the demo postman collection that you are referencing with the "nameChanged" item, these are artifacts specific to the Registry UIs.  We will be cleaning these up in the near future.
