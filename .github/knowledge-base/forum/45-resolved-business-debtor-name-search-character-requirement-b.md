# RESOLVED: Business Debtor Name search character requirement (BUG)

_Category: Known Bugs · Source: BC Registries API community forum_

**Melissa** (1/12/2022):

Question: When testing our system with PPSA searches we noticed your new API does **not accept** business name having less than 5 characters.

This is a new limitation specific to the new API; your old system accepts business name of 4, 3 (and maybe less) characters.

I looked up in the historic our own system to see what short business names real peoples searched in different Canadian PPR production environment, and found searches on:

â€¢	â€œIBMâ€
â€¢	â€œRONAâ€
â€¢	â€œCAEâ€
â€¢	â€œLGSâ€
â€¢	â€œA&Wâ€
â€¢	â€œBELLâ€
â€¢	â€œDELLâ€

RESPONSE: The issue identified above is a bug. In the UI we require two characters for a business name search. A change will be made to the UI over the next few days to implement the same two character minimum.

RESOLUTION: The change to address this was released Jan 19, 2022.
