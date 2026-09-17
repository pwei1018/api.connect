# Character Encoding Scheme Standard?

_Category: FAQs · Source: BC Registries API community forum_

**chelsea.hansen** (1/7/2022):

With the increased acceptance punctuation and special characters, is someone able to share if there is a standard character encoding being used, for example ISO 859 / UTF 8?

---

**Kaineatthelab** (1/7/2022):

We are using UTF8, thank you!

---

**pheath** (1/26/2022):

Although we support UF8 Character set, characters with accents arenâ€™t searchable and have downstream affects to other groups.  We had to limit the creation of them for now until we are able to holistically look at special characters.

---

**chelsea.hansen** (1/26/2022):

Thanks, would specs on characters that are being limited be able to be provided?
The API has a spec available on property lengths, would be a good possible extension to that.

I'd suspect maybe you would be limiting on searchable values, like debtor name, but maybe be more flexible on general collateral?
