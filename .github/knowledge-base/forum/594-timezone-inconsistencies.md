# Timezone Inconsistencies

_Category: Entities · Source: BC Registries API community forum_

**iharder** (12/5/2025):

Retrieving some of the test data, Iâ€™ve noticed some inconsistencies in timestamps as it relates to timezones. For example, here are some attributes retrieved from a test company, reduced for clarity:

```

    "identifier": "BC3000265",
    "foundingDate": "2024-05-05T00:00:00+00:00",
    "nextAnnualReport": "2025-05-05T07:00:00+00:00",

```

The founding date would translate to 2024-05-04, 5pm PST. However, that isnâ€™t consistent with the next annual report date that is 2025-05-05 12 am PST.

We must display both of these when generating a draft annual filing, so would cause some confusion.

Is this just an issue with the test data? Some of the attributes had been updated to allow us to submit AR filings, so wonder if this might just be an oversight when doing so. However, on a more general level, is it possible that foundingDate and nextAnnualReport can have similar inconsistencies in production?

---

**vysakh** (12/9/2025):

This look like data issue in sandbox, will investigate and get back to you
