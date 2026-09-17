# Business Summary - Discrepancy between Registration Date (PDF) and foundingDate (JSON)

_Category: Report an Issue · Source: BC Registries API community forum_

**chelsea.hansen** (10/22/2022):

Business Search - Business Summary

There appears to be a discrepancy between the Registration Date on the PDF and the foundingDate in the JSON for some entities.  The date in the JSON is one day later than the date on the PDF.

**Example 1**
![image|690x287](upload://kmba2qPoiCqluoFZ63O4RuLCjPy.png)
![image|625x500](upload://o47gMRrHcrKR586hw1FFqkM9H5o.png)

**Example 2**
![image|690x281](upload://joD5ayDhVA7fFOhvHiPlDQd00xt.png)
![image|618x500](upload://ds42YTSUb8cfPTLkfLosUZWL149.png)

---

**jlane** (11/7/2022):

Hello,
I've logged this as https://github.com/bcgov/entity/issues/14018
We need to pass this to another team for review. Sorry for the delay.

I believe the SP and GPs have additional logic in the report that is not transparent to API users. I will be in touch as I learn more.

---

**jlane** (11/8/2022):

Here is more detail from our dev:

Founding Date is the date a business is recognized by the registry. In the business summary json

registrationDateTime = effective date in the filing ( Set when the filing is submitted , before the filer process the filing)
founding date is set by the filer if the processing of the filing is successful

There will a few seconds between the time a filing is submitted and the time filer processes it.

The date time in the json is in the UTC format. The Registration date time in the pdf is the PST/PDT representation of the founding date.

Business start date is different from the regsitration/founding date. It is the date that the user selects in the registration process. There are some rules around this.

Summary json
"business": {
"adminFreeze": false,
"arMaxDate": "2022-11-08",
"arMinDate": "2023-01-01",
"associationType": null,
"complianceWarnings": [],
"coopType": "Not Available",
"fiscalYearEndDate": "2022-10-18",
"foundingDate": "2022-10-18T03:12:05.481928+00:00",
"goodStanding": true,
"hasCorrections": false,
"hasCourtOrders": false,
"hasRestrictions": false,
"identifier": "FM1018136",
"lastAddressChangeDate": "2022-10-17",
"lastAnnualGeneralMeetingDate": "",
"lastAnnualReportDate": "",
"lastDirectorChangeDate": "2022-10-17",
"lastLedgerTimestamp": "2022-10-18T03:12:29.868321+00:00",
"lastModified": "2022-10-18T03:12:29.868303+00:00",
"legalName": "BHAV CONSTRUCTIONS",
"legalType": "SP",
"naicsCode": "236110",
"naicsDescription": "Residential building construction",
"naicsKey": "6343ddaa-c24d-42f2-af26-e35773ad6611",
"nextAnnualReport": "2023-10-18T07:00:00+00:00",
"registrationDateTime": "2022-10-18T03:12:29.075628+00:00",
"startDate": "2022-10-12",
"state": "ACTIVE",
"warnings": []
}
![image|508x500](upload://ohiNWWgHbsMiMQ9QHJyys6imJfs.png)
