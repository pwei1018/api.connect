# Collection of questions regarding validation endpoints

_Category: STRR · Source: BC Registries API community forum_

**spencer.gervais** (5/28/2025):

We have some questions still outstanding regarding some of the validation endpoints we'd like clarified if possible.

Additionally, can someone check on the status of this query: https://discourse.onebc.ca/t/error-codes-in-batch-validate-endpoint/525/1, which relates to error codes

1. Will the output of the batch validate always contain the full input, regardless of whether it matches the expected schema (ie we could pass more information about the property than just identifier and address and have them be present in the response). Wasn't sure if this was intentional or not
2.  looking at validate permit, is there a reason it only requires street number, unit number and postal code? we pass all the data regardless just in case but it seems not all are necessary to validate the permit
3. we see frequent timeouts in sandbox env, is there a good value to set for that in production? we have it set to 3s in both currently

---

**arlen.tees** (6/23/2025):

Apologies for the delay in the response, we were able to get answers and actions for you:

1 - Although not currently present, enforcement on the schema will be added soon
2 - The fields for address validation are defined by legislation, please refer to [Section 13.1 of the Regulations](https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/268_2023#section13.1). You can pass the full address object, but only those three data points of unit number, street number, and postal code will be considered for validation. 
3 - Sandbox was previously set to 10 minutes, it has now been set to 2 hours to match the production set up.
