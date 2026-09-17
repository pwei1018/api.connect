# Registered By name in 'My Registrations' for API

_Category: Tips and Hints · Source: BC Registries API community forum_

**Melissa** (1/7/2022):

Question: In the modernized PPR application you provide a 'Registered By' Field in the My Registrations table. This lists the name of the user who completed the registration. Will a name display for transactions that are done through the API?

Response: Registered by comes from the user first name and last name based on the registration token userid. The UI makes an API call to set up the user record. The direct API users do not make this call, so there is no userid to get the name for, so the APi users currently get no registered by value. If we did set up the user information as part of setting up API access, the name value will not be very meaningful. Looking at a sandbox token, there is no first name and the last name is "api-key-account-XXXX-sandbox", where "XXXX" is the account id.
