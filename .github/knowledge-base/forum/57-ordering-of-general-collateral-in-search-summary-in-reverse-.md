# Ordering of General Collateral in Search Summary in Reverse Order

_Category: FAQs · Source: BC Registries API community forum_

**chelsea.hansen** (1/18/2022):

On review of some search results, in trying to read the general collateral the collateral sections look to be in reverse order, both on the JSON and the PDF, it would be hard for someone to notice this or understand the order to read it in.

Not sure if this is intended or if the ordering could be amended for an easier read?

![JSON Returned Data Sample|690x265](upload://3AcWG3tlLUnKaH3Hggfye472wu0.jpeg)
![PDF Returned Data Sample|551x500](upload://3qbU0nQvhLSIGLTa0famDripHSX.png)

---

**Kaineatthelab** (1/19/2022):

Morning Chelsea, 

**Current Behavior:** The legacy registration is showing multiple base registration GC on the UI and PDF (as it is breaking the text into paragraphs). This fix will be verified in PROD when available (It is tracked under #10067).

We completed multiple user sessions with our legal and professional users. We went with reverse chronological because a large amount of users stated they Delete all the old GC and add all the new, so they just have to look at the most recent entry to see current GC â€“ so if this is at the top its easier. But some users just include the â€œdeltaâ€ and have to read the whole GC to see whatâ€™s include/not included, for them itâ€™s probably a bit easier to start at the top with the base and read down. So how easy the list is depends a bit on how itâ€™s amended. Having it match the History tipped the scales toward the first way, and with the inclusion of the dates and Base Reg ID the order should be pretty obvious.

It should look like this below which is from our app. 

![image|387x500](upload://hIFN4SApdsvxxz2Ln0TAWrIE2vx.jpeg)
