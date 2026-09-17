# User Authentication and Security for Premium Accounts

_Category: Uncategorized · Source: BC Registries API community forum_

**iharder** (12/4/2022):

Currently, our system makes use of the BC Online user accounts to authenticate our firmsâ€™ account users. Through our screen scraping interface, they must log in. We also use the BC Online VerifyUser webservice to authenticate each user submitting records to our transaction service and ultimately to the BC Online DebtAcct webservice.

For premium subscribers, our agreement specifies that we must authenticate our users. This means that each premium subscriber must do so using their own architecture and security measures. This seems to be a security risk for access to the BC Registry API. There are two alternatives we see of mitigating this risk. The first is for registry API calls to require a BCeID and use an authentication mechanism for each call, such as oAuth2 or other means. The downside to this is that every premium subscriber would need to ensure that their calls are associated with an individual BCeID account, unless the account is somehow flagged to use or not use this feature. The second alternative is to provide some standardized API call to authenticate individual BCeID accounts for the premium subscribers to access. The downside to this is that it is still possible for a bad actor to bypass this call before making a registry API call. However, it does help to avoid ad-hoc authentication mechanisms.

Finally, we must consider what happens if a bad actor DOES make their way into the registry API and is identified. Does this mean that all of the users that access it through the associated premium account will be blocked? This can be hundreds of users of many firms that will be affected. If an individual user can be identified then that user can be blocked without affecting so many others.

Corrections, clarifications, or thoughts for further discussion?
