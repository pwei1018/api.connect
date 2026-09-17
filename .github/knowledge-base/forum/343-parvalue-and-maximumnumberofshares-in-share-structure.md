# parValue and maximumNumberOfShares in share_structure

_Category: Uncategorized · Source: BC Registries API community forum_

**tony.nguyen** (11/28/2024):

Hi!

Our team was reading into the documentation for share_structure (found here: https://bcregistry-demo.apigee.io/docs/businessproxy/1/types/Share_structure). Specifically we were looking at the fields:

hasParValue
parValue
maximumNumberOfShares
hasMaximumShares

since you can pass FALSE to hasParValue and hasMaximumShares. What would we pass as a value to parValue and maximumNumberOfShares since these fields seem to be required based on the documentation.

Please let us know.

Thank you!

---

**davemck** (11/29/2024):

Good morning,

These fields (parVValue and maximumNuberOfShares) are required to be part of the payload, but null is an acceptable value for these fields when their corresponding field is set to false.

David
