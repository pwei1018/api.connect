# Change of Directors Filing - Incoming and outgoing directors

_Category: Entities · Source: BC Registries API community forum_

**dahkong** (9/5/2025):

Hi there,

When filing a Change of Directors filing in which I cease a director and appoint a new director in place, the draft filing shows the correct information:

![image|690x252](upload://pf6MlTLLVwI2ojFCQxe9Fn2xb4k.png)

But the actual PDFs (Change of Directors, or the Notice of Articles) returned do not show the current directors:

![image|658x500](upload://cLBit5Ag54thLSyxJ3u0hRL0k0g.png)

![image|565x500](upload://oMkxyGIgB9rj06hsQnOzBVgx29o.png)

---

**achiu** (10/2/2025):

Hi @dahkong ,

Iâ€™ve taken a look at the COD filing you had filed for BC3000571.  What has happened is that the cessation date field was populated for the new appointed director which is why you donâ€™t see any active directors in the pdfs.  This should be scenario that triggers Business API validation as we should not allow a state where there are no active directors.  I will make sure this gets addressed in our API validation update work.

The other issue that I noticed in your COD filing submission was the missing party id for the director you were trying to cease.  Any updates or ceasing of existing directors will need to provide the corresponding party id in the COD filing submissions.

**Things that need to be addressed in the COD filing payload you had provided**

![image|201x500](upload://t6aTtEy6UUy1ns5q11XdVyQXKag.png)

**Example of a successful COD submission where director A is ceased and director B is appointed**

COD payload

![image|530x500](upload://7OBYdLWs2r3F8GtlFHQY1zkxFTV.jpeg)

Director Change PDF

![image|418x500](upload://bU9uFCDoMv8bOlADQ19oP09yQvt.jpeg)

Notice of Articles PDF

![image|390x500](upload://mHRq8DCogPyiayBCAWmzWOtaIsG.jpeg)
