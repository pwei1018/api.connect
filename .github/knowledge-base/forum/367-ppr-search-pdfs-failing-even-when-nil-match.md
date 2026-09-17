# PPR search PDFs failing even when NIL Match

_Category: Report an Issue · Source: BC Registries API community forum_

**frank** (1/22/2025):

Can someone please comment on why the pdf for search id 3045204 would fail to generate, but then an identical search ordered a few minutes later search id 3045287 did generate properly.   

We are noticing a lot of searches are failing to generate the PDF on the first request since about Friday.  Email to bcregistries support has had no response.  

Please advise.

---

**arlen.tees** (1/22/2025):

Hi Frank, thanks for reaching out. Our dev team did notice that searches and reports were under heavy load which resulted in some timeout errors occurring, which required a restart of the report server. Response times should be back to normal now without any intermittent errors.
