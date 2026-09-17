# RESOLVED Prov/Region Field Requirement when country is not USA or CAD

_Category: Known Bugs · Source: BC Registries API community forum_

**chelsea.hansen** (1/25/2022):

For the Region field of an address where the country is NOT Canada or USA. 
Is the character limitation still 2 characters or is more characters accepted?

On the ppr UI - more than 2 characters seem to be allowed but we are having issues submitting a filing on the ppr UI where the Region provided is "Reutte Tyrol"

---

**Melissa** (1/25/2022):

Response:

We have a bug logged under 10741 to address this. 

The Region field should only allow 2 characters. The region field should be optional when a user enters an address outside of Canada and the US.

---

**chelsea.hansen** (1/27/2022):

Just update on this.
PPR UI the region is now required for secured party and debtor when country is not equal to CAD or USA.
If we enter a 2 character abbreviation for the region, we are unable to complete the registration.
