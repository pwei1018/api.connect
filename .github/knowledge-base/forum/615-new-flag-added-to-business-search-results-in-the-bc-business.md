# New Flag Added to Business Search Results in the BC Business Registry

_Category: Announcements · Source: BC Registries API community forum_

**lance.hall** (1/8/2026):

The BC Registries Digital team has added a flag within search responses to specify whether an entity resides in the BC Business Registry or Corporate Online application. While all businesses now appear in the modernized search, it doesn't support all document purchases. This update helps users quickly understand document availability, especially for migrated companies.

Context:

Previously you could only purchase documents for businesses with legal types of 'CP', 'BEN', 'SP' or 'GP'. Now you can purchase documents through Search for businesses of legal type 'BC' that have been loaded into the BC Registry application (these will have the "modernized" field set to True).

New Field:

* a new "modernized" field has been added to the business search response

* this field will be present and True if the business is loaded in the modernized entities system (this means documents can be purchased through the search application)

* if this field is not present or is False then documents for this business are still only available through COLIN (attempting to purchase through Search will provide a 400 error)
