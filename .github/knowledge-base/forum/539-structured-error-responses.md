# Structured Error Responses

_Category: Uncategorized · Source: BC Registries API community forum_

**iharder** (6/12/2025):

This is to follow up to the topic: https://discourse.onebc.ca/t/finding-parsing-out-error-messages/446.

It seems that there is now some structure to detected errors due to data validations. Currently we're seeing at least two types, where the first is a single error where the error text is an error element of an array, and the second where the error is part of a context array, identified by the message element, and the error element is now the text of the entire submitted message. Here is an example I generated that shows them both simultaneously:
```
{
    "errorMessage": "API backend third party service error.",
    "rootCause": {
        "errors": [
            {
                "context": [
                ],
                "error": "'3000069' does not match '^[A-Z]{1,3}[0-9]{7}|T[A-Za-z0-9]{9}$'",
                "path": "filing\/business\/identifier"
            },
            {
                "context": [
                    {
                        "jsonPath": "$.filing.changeOfAddress.legalType",
                        "message": "'ABV' is not one of ['A', 'B', 'BC', 'BEN', 'CBEN', 'C', 'CC', 'CCC', 'CEM', 'CP', 'CS', 'CUL', 'EPR', 'FI', 'FOR', 'GP', 'LIC', 'LIB', 'LL', 'LLC', 'LP', 'MF', 'PA', 'PAR', 'PFS', 'QA', 'QB', 'QC', 'QD', 'QE', 'REG', 'RLY', 'S', 'SB', 'SP', 'T', 'TMY', 'ULC', 'UQA', 'UQB', 'UQC', 'UQD', 'UQE', 'XCP', 'XL', 'XP', 'XS']",
                        "validator": "enum",
                        "validatorValue": [
                            "A",
                            "B",
                            "BC",
                            "BEN",
                            "CBEN",
                            "C",
                            "CC",
                            "CCC",
                            "CEM",
                            "CP",
                            "CS",
                            "CUL",
                            "EPR",
                            "FI",
                            "FOR",
                            "GP",
                            "LIC",
                            "LIB",
                            "LL",
                            "LLC",
                            "LP",
                            "MF",
                            "PA",
                            "PAR",
                            "PFS",
                            "QA",
                            "QB",
                            "QC",
                            "QD",
                            "QE",
                            "REG",
                            "RLY",
                            "S",
                            "SB",
                            "SP",
                            "T",
                            "TMY",
                            "ULC",
                            "UQA",
                            "UQB",
                            "UQC",
                            "UQD",
                            "UQE",
                            "XCP",
                            "XL",
                            "XP",
                            "XS"
                        ]
                    }
                ],
                "error": "{'header': {'certifiedBy': 'Samuel Pickwick, Q.C.', 'email': '[REDACTED_EMAIL]', 'name': 'changeOfAddress', 'date': '2025-06-12', 'accountId': '14723'}, 'business': {'foundingDate': '2024-03-26T00:00:00+00:00', 'identifier': '3000069', 'legalName': 'Test Organization Inc.', 'legalType': 'BC'}, 'changeOfAddress': {'legalType': 'ABV', 'offices': {'registeredOffice': {'deliveryAddress': {'actions': ['addressChanged'], 'addressType': 'delivery', 'streetAddress': '6th Avenue SE', 'addressCity': 'Vancouver', 'addressRegion': 'BC', 'addressCountry': 'CA', 'postalCode': 'V3D 9D9'}, 'mailingAddress': {'addressType': 'mailing', 'streetAddress': '6th Avenue SE', 'streetAddressAdditional': 'Suite 2100', 'addressCity': 'Vancouver', 'addressRegion': 'BC', 'addressCountry': 'CA', 'postalCode': 'V3D 9D9'}}, 'recordsOffice': {'deliveryAddress': {'actions': ['addressChanged'], 'addressType': 'delivery', 'streetAddress': '6th Avenue SE', 'addressCity': 'Vancouver', 'addressRegion': 'BC', 'addressCountry': 'CA', 'postalCode': 'V3D 9D9'}, 'mailingAddress': {'addressType': 'mailing', 'streetAddress': '6th Avenue SE', 'streetAddressAdditional': 'Suite 2100', 'addressCity': 'Vancouver', 'addressRegion': 'BC', 'addressCountry': 'CA', 'postalCode': 'V3D 9D9'}}}}} is not valid under any of the given schemas",
                "path": "filing"
            }
        ],
```
They are not consistent but can be parsed to determine the appropriate message to display back to the user. Can we expect just these two structures for both data and schema related error responses, or will there be others?
