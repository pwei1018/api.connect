# PPR July 21 Release

_Category: Uncategorized · Source: BC Registries API community forum_

**pheath** (7/21/2022):

* **Ticket 12833** - Verification statements can sometimes be unavailable for retrieval from the dashboard if there is a report api failure. Automatic regeneration of the report has been added if report status is still pending after 15 minutes. This will allow clients to retrieve the verification statements without having to raise an OPS ticket and have developers regenerate the output.
