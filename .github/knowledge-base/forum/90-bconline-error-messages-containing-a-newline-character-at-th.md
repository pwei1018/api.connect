# BCOnline error messages containing a newline character at the end of the error message

_Category: Tips and Hints · Source: BC Registries API community forum_

**Greg** (1/28/2022):

JSON parsing fails due the newline at the end of some or  all of BCOnline error messages.

These error messages break JSON formatting rules:

{"errorMessage": "API backend third party service error.", "rootCause": "message:010: the Financing Statement for registration number 405908I has expired or been discharged.
"}

{"errorMessage": "API backend third party service error.", "rootCause": "message:006: no Financing Statement found for registration number 123456A.
"}

This does not:

{"errorMessage": "API backend third party service error.", "rootCause": "message:010:the Financing Statement for registration number 405908I has expired or been discharged."}

This tool was used to determine this:
https://jsonformatter.curiousconcept.com/#

---

**Kaineatthelab** (2/1/2022):

Hi Greg, can you email registries your account info so we can look at the logs?

---

**Greg** (2/9/2022):

The fix that is required is to remove the newline character from all error messages that are returned by BCOnline.  The problem is not specific to my account.
