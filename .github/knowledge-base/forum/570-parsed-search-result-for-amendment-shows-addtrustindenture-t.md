# Parsed search result for amendment shows addTrustIndenture: True, but the PPR Search Result shows Trust Indenture: No

_Category: Report an Issue · Source: BC Registries API community forum_

**cchimney** (9/17/2025):

```json
    {
      "financingStatement": {
        "baseRegistrationNumber": "871383M",
        "changes": [
          {
            "addDebtors": [
            ],
            "addTrustIndenture": true,
            "createDateTime": "2022-05-25T13:10:27+00:00",
            "deleteDebtors": [
            ],
            "description": "XXX",
            "payment": {},
            "registeringParty": {},
     ...
    }
    
```

![Screenshot 2025-09-17 at 1.08.54 PM|690x300](upload://y3CNa4Yp3y5m5krqyCCWMiL9kGY.png)

---

**mbertucc** (11/4/2025):

Hi there. I have my team looking in to this. I will get back to you as soon as I have an answer for you.

---

**mbertucc** (11/5/2025):

As described in [https://developer.connect.gov.bc.ca/oas/ppr/tag/financing-statement](https://developer.connect.gov.bc.ca/oas/ppr/tag/financing-statement "https://developer.connect.gov.bc.ca/oas/ppr/tag/financing-statement") 

> trustIndenture
>
>           type: boolean
>
>           description: Indicates if security interest is contained in a Trust Indenture. Required when the type is SA. Should be null otherwise.

while 

> addTrustIndenture:
>           type: boolean
>           description: Include only if the base registration is a Security Agreement and adding a trust indenture.

---

**cchimney** (11/10/2025):

Hello, this doesnâ€™t answer my question. On this amendment (750929N) addTrustIndenture: True is present in the **parsed results**.

```
"addTrustIndenture":true,
                  "amendmentRegistrationNumber":"750929N",
                  "baseRegistrationNumber":"871383M",
                  "changeType":"AM",
                  "clientReferenceId":"45697529",
                  "createDateTime":"2022-05-25T13:10:27+00:00",
```

Since, Trust Indenture was changed to True on the amendment, why does the **government search result** note this as â€œTrust Indenture: Noâ€ in the header of that filing?

![Screenshot 2025-11-10 at 6.51.19 AM|614x202](upload://ywTvYTMAWt68HylkrxP2WDseP9H.png)

Additionally, the **government search result** does not note any changes to trust indenture on the amendment History section. Shouldnâ€™t it be noted that Trust Indenture was changed in the history for people who do not rely on parsed results?

---

**cchimney** (11/19/2025):

Hi @mbertucc, Iâ€™m still waiting on an answer to this please. Thank you.

---

**mbertucc** (11/21/2025):

HI there, Working on this now. Mikaela

---

**mbertucc** (11/21/2025):

Hi there,

The PPR API is returning the incorrect addTrustIndenture value in the amendment response when the amendment includes removeTrustIndenture=true and there is no existing trust indenture to remove. No change was made to the trust indenture with the amendment on base registration 871383M. 

This bug will be fixed shortly in a release within the next two weeks.  

The search trust indenture value is correct.

Thank you for your patience,

Mikaela

---

**cchimney** (11/21/2025):

Thank you for your assistance.
