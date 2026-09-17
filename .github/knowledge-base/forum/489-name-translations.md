# Name Translations

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (4/8/2025):

Hello,

In the API specs (https://developer.connect.gov.bc.ca/oas/br/model/name_translations#model/name_translations), the names for name translations have to match specific characters: ^ [ A-Za-zÃ€-Ã¿_@./#â€™&+-]*$ --  if I send a name that contains a single quote ('), then I get an error about it not matching '^ [ A-Za-zu00c0-u00ff_@./#u2019&+-]*$'.

The legalName in the name request doesn't seem to have these restrictions. How should we handle these cases where the name translation contains special characters or characters not in that list?

Thank you,
Patty

---

**vsi** (4/9/2025):

Hi Patty, 
i will check and get back to you this week

thanks!

---

**vsi** (4/28/2025):

Hi Patty
we will provide feedback this week

Thanks!

---

**pattyw** (5/29/2025):

Hi @vsi,

Any updates on this?

Thanks,
Patty

---

**vsi** (5/29/2025):

Hi Patty, 
will get back with feedback this week!

thanks!

---

**achiu** (5/30/2025):

Hi Patty, 

I will need to get back to you if we have plans on expanding the name translation to support other special characters.

As for what is allowed in the `legalName` value in the name request, this is based off of what names are approved by the name examiners via https://www.names.bcregistry.gov.bc.ca/.  In the production environment, the business api will validate the name request with the provided NR number to ensure the NR exists and that the legal type and legal name matches the approved values.
