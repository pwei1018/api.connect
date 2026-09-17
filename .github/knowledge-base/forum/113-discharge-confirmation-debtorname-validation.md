# Discharge - Confirmation debtorName Validation

_Category: Report an Issue · Source: BC Registries API community forum_

**chelsea.hansen** (3/1/2022):

With submission of a discharge via the API, would details on how the confirmation debtor is validated be shared?

We have some edge cases where if the debtor name does not match exactly the discharge is still successful without error, we are wondering if the query should be looking for an exact match or if there is a contains clause?

Example:
* On the financing statement debtor businessName = BusinessName
* On the discharge the confirmation debtor businessName = DEBTOR.BusinessName123

This is accepted and discharged where one might except a validation error.
