# Finding/Parsing out error messages

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (3/18/2025):

Hello,

I ran into this error when filing an incorporation application where the "email" field for the "contactPoint" object was "test":

`{"errorMessage": "API backend third party service error.", "rootCause": "errors:[context:[jsonPath:$.filing,message:'adminFreeze' is a required property,validator:required,validatorValue:[adminFreeze],jsonPath:$.filing,message:'agmExtension' is a required property,validator:required,validatorValue:[agmExtension],jsonPath:$.filing,message:'agmLocationChange' is a required property,validator:required,validatorValue:[agmLocationChange],jsonPath:$.filing,message:'amalgamationApplication' is a required property,validator:required,validatorValue:[amalgamationApplication],jsonPath:$.filing,message:'alteration' is a required property,validator:required,validatorValue:[alteration],jsonPath:$.filing,message:'annualReport' is a required property,validator:required,validatorValue:[annualReport],jsonPath:$.filing,message:'changeOfAddress' is a required property,validator:required,validatorValue:[changeOfAddress],jsonPath:$.filing,message:'changeOfDirectors' is a required property,validator:required,validatorValue:[changeOfDirectors],jsonPath:$.filing,message:'changeOfName' is a required property,validator:required,validatorValue:[changeOfName],jsonPath:$.filing,message:'changeOfRegistration' is a required property,validator:required,validatorValue:[changeOfRegistration],jsonPath:$.filing,message:'consentContinuationOut' is a required property,validator:required,validatorValue:[consentContinuationOut],jsonPath:$.filing,message:'continuationIn' is a required property,validator:required,validatorValue:[continuationIn],jsonPath:$.filing,message:'continuationOut' is a required property,validator:required,validatorValue:[continuationOut],jsonPath:$.filing,message:'conversion' is a required property,validator:required,validatorValue:[conversion],jsonPath:$.filing,message:'correction' is a required property,validator:required,validatorValue:[correction],jsonPath:$.filing,message:'courtOrder' is a required property,validator:required,validatorValue:[courtOrder],jsonPath:$.filing,message:'dissolution' is a required property,validator:required,validatorValue:[dissolution],jsonPath:$.filing.incorporationApplication.contactPoint.email,message:'test' is not a 'email',validator:format,validatorValue:email....`

It seems like there are errors returned that are not relevant to the incorporation filing itself, for example, the first message in the "rootCause" object about "adminFreeze" being a required property.

The error about the email: "test is not a email" is quite buried in the errors returned and not easy to find/parse out for debugging and display purposes.

Is there a better way to easily identify/parse out these error messages?

Thank you,
Patty

---

**achiu** (3/19/2025):

Hi Patty, thanks for bring this up.

We do not currently provide an easier way of determining the specific field(s) that failed schema validation for a given filing.

Your concerns have been noted and I will bring it up to the Business API team.

---

**vsi** (3/31/2025):

Hi Patty, 
We will address error handling improvements after we complete the priority items for the sandbox release

Thanks!
