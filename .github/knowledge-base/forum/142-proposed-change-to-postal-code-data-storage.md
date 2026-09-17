# Proposed change to postal code data storage

_Category: Uncategorized · Source: BC Registries API community forum_

**Melissa** (5/11/2022):

In our UI we collect postal codes according to Canada Post standards, which include a space between the first and last 3 characters. We would like to make a change to the way we store data for API postal codes to be consistent and include the space. This change would be for existing and new Canada address postal code data. We are reaching out to ask if this would pose any concern for you, our API users.

---

**Lynn** (5/12/2022):

I wanted to clarify if this means the registry would now also only accept postal codes in that format (i.e. with the spaces in between). I understand that the registry will be storing it that way in the DB but I wanted to confirm if the registry will reject requests with no spaces between the postal code, for instance. Or if the registry will accept both formats submitted but will adjust and store the ones with no spaces on their side. I also understand that any data we retrieve will have the space in between.

---

**chelsea.hansen** (5/13/2022):

On review with the team we would not have an issue if in the API was amended so that a space was made mandatory for a Canadian postal code field value.

---

**Melissa** (5/13/2022):

Hi Lynn,

We will accept Canada postal codes with or without a space character. We will store a value with a space character. For API JSON responses we would include a space character to be consistent with the UI and the Canada Post format.

Let us know if this works for your team!
Melissa

---

**Melissa** (5/13/2022):

Thank you for the review Chelsea!

---

**Lynn** (5/17/2022):

Hi Melissa,

Thank you and yes, with the below response this will work for us without impact.

Thank you,

![image001.png|279x27](upload://sMZo3PRiLtXHgWjOt1ptMBlF7td.png)
