# Clarity for name fields

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (6/9/2025):

Hello,

I'm noticing some differences in the name fields being used for different filings and in the documentation versus what's in the Postman collection.

For the incorporation filing, the documentation shows:
![image|690x335](upload://uCJkFsjo1JoMDg3Fw3ZJnIZBdmZ.png)

but the Postman tests use "firstName", "lastName" and "middleName".

Also, for the Annual Report and Change of Directors filings, the "officer" objects use "middleInitial" instead of "middleName" - are these interchangeable or is there one we have to use?

Thanks,
Patty

---

**achiu** (6/10/2025):

Hi Patty,

Will review and get back to you.

---

**pattyw** (7/3/2025):

Hi @achiu, any update on this?

---

**achiu** (9/18/2025):

Hi @pattyw , please use `middleInitial`.  I know the spec and postman collection has references to both.  We will be cleaning that up.
