# Retrieving Documents

_Category: Entities · Source: BC Registries API community forum_

**pattyw** (6/11/2025):

Hello,

In the sandbox, the filing status usually becomes paid or completed within minutes and we're able to retrieve the outputs/documents pretty much right away. Will this also be the case on production so that we can always try to retrieve documents right away?

Are there any restrictions on when we can attempt to retrieve documents, including for future effective filings?

Thanks,
Patty

---

**achiu** (6/18/2025):

Hi Patty,

I would expect that you should get similar performance to sandbox in prod if not better in terms of the filing processing speed and document retrieval.

There are no restrictions that I can think of for document retrieval.

Future effective filings essentially behave the same way as any other filing in terms of document retrieval at the end of the day.  i.e. a filing in PAID and COMPLETED status will have documents available for retrieval.  

Note that the documents available in PAID and COMPLETED status are different based on filing type.  If you are looking for the final documents, you will want to wait until a filing status = 'COMPLETED'.

---

**iharder** (6/18/2025):

Argus, I'm not understanding this, and hoping you can clarify.

It appears that you're saying the documents go from a PAID status at the end of the day, then to a COMPLETED status? If so, during the filing process in production does this mean that the documents won't be available until the end of the day when the PAD payments are processed? What we're hoping to achieve here is to obtain the various documents immediately during the filing process if possible, and certainly if they're not future effective.

Thanks!

---

**achiu** (6/18/2025):

Hi Ian,

The "at end of the day" was intended to be a figure of speech and not in the literal sense.

But when I was answering the question, I did not think of PAD payment processing times so I will need to follow up with the pay team to get some more insight into when a filing moves to the status of PAID.

Will get back to you on this when I have an answer.

---

**achiu** (6/18/2025):

@iharder I talked to the pay team and even though the payment isn't technically processed until later, we treat the filing as PAID almost immediately. 

So I think the filing status transitions should be pretty quick for PAD payments in the production environment.  Which means the document retrieval for the final(filing status = COMPLETED) should be available fairly quick too.

---

**iharder** (6/18/2025):

Thanks Argus. So we should be able to poll immediately for the filing status of COMPLETED and be able to retrieve those docs, including those for future effective filings, as I understand it.

---

**achiu** (6/18/2025):

Yes, you should be able to poll for status of COMPLETED immediately.  I would put in some retries just in case it takes a bit longer to process the filing.

As for future effective filing, you will not have access to the final(filing status = COMPLETED) documents until the filing is processed.  Until the filing is processed on the provided future effective date, the filing status will be PAID.  As I mentioned earlier, PAID status does not allow retrieval of all documents that COMPLETED status provides.  Allowing the retrieval of the final documents when the filing is still in PAID status  is not supported functionality.
