# Error Message Submitting VIN / Serial number search

_Category: Known Bugs · Source: BC Registries API community forum_

**Melissa** (1/19/2022):

Issue: Our QA team received an odd error randomly when submitting a VIN / Serial number search and we wanted to make the team is aware in case thereâ€™s an issue there. The error message is the following with additional details attached:

 "criteria": {
        "value": "1111111"

:::Response Type: AutomationProcessingError:::{â€œerrorMessageâ€: â€œAPI backend third party service error.â€, â€œrootCauseâ€: â€œdetail:DatabaseException(MultipleResultsFound(â€˜Multiple rows were found when one or none was requiredâ€™)),message:013: error processing request. â€œ}:::

RESPONSE: This occurred due to an error with our data load. During the data load more than one record for value "1111111" loaded. We have verified this is not an issue with PROD data.
