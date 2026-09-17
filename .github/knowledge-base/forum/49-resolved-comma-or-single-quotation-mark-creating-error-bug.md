# RESOLVED Comma or single quotation mark creating error (BUG)

_Category: Known Bugs · Source: BC Registries API community forum_

**Melissa** (1/14/2022):

When using the financing-statements API for SA registrations requests with an apostrophe in the business debtor name are failing. The businessname fields are in double quotes for both the secured party and debtor. Your API accepts the apostrophe for the secured party, but not the debtor.

{ 
    "errorMessage": "API backend third party service error.",
    "rootCause": "message:ProgrammingError('(psycopg2.errors.SyntaxError) syntax error at or near S LINE 1: select searchkey_business_name('LINDSAY'S LICORICE') ^ ')
"}

Response: This is a defect. A fix has been identified, and has been deployed in the SANDBOX environment. A comma character was also a problem, and was addressed.
