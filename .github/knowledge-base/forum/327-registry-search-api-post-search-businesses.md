# Registry Search API - POST Search businesses

_Category: Uncategorized · Source: BC Registries API community forum_

**asheshbhatt** (10/15/2024):

Please find few findings and questions below with a request to review and provide more details. 

When using the V2 Registry Search API POST (Search Businesses), can you please confirm exactly which field (on the API response) will indicate Legal Name and which field will indicate the Operating Names, for each business type?

We understand that this may vary depending on business type; CAS needs to confirm the fields, for each business type.

We also understand that for some business types, the primary record (1st ACTIVE Registry Site) shows less fields than the subsequent Registry Site records. CAS would need BC Registries to confirm which business types this applies to and which Registry Site # record to refer to, to obtain the Legal Name & which record to refer to for the Operating Names. (Keeping in mind that the BC0001 record may not always be ACTIVE.) 

We show 2 examples below: BN100652692 & BN 819897323. *Please note that in the following PROD example for 100652692, only â€œTELUS COMMUNICATIONS INC.â€ is considered (by CAS) to be the Legal Name, while â€œKOODOâ€, â€œBROAD-CONNECT TELECOMâ€, â€œTELUS MOBILITYâ€, "SECURE SENSE", etc. are considered to be Operating Names.

CAS is writing code for the Corporate Financial System based on this information, so it is critical that we get this correct & confirmed by BC Registries and not base this on our assumptions.

-- Search Business
Postman Link: {{baseUrl}}/v2/search/businesses
Example 2) TELUS
--------
{
   "query": {
       "bn": "100652692",
                            "identifier": "",
       "name": "",
                            "value": "*"
   },
   "rows": "20",
   "start": "0"
}
 
{
   "facets": {
       "fields": {
           "legalType": [
               {
                   "count": 14,
                   "value": "SP"
               },
               {
                   "count": 3,
                   "value": "A"
               },
               {
                   "count": 1,
                   "value": "BC"
               },
               {
                   "count": 1,
                   "value": "C"
               }
           ],
           "status": [
               {
                   "count": 15,
                   "value": "ACTIVE"
               },
               {
                   "count": 4,
                   "value": "HISTORICAL"
               }
           ]
       }
   },
   "searchResults": {
       "queryInfo": {
           "categories": {
               "legalType": null,
               "status": null
           },
           "query": {
               "bn": "100652692",
               "identifier": "",
               "name": "",
               "value": "*"
           },
           "rows": "20",
           "start": "0"
       },
       "results": [
           {
               "bn": "100652692BC0007",
               "identifier": "FM0729810",
               "legalType": "SP",
               "name": "KOODO",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0010",
               "identifier": "FM0769467",
               "legalType": "SP",
               "name": "BROAD-CONNECT TELECOM",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0001",
               "identifier": "A0055547",
               "legalType": "A",
               "name": "TELUS COMMUNICATIONS INC.",
               "score": 9.0,
               "status": "HISTORICAL"
           },
           {
               "bn": "100652692BC0003",
               "identifier": "A0097809",
               "legalType": "A",
               "name": "TELUS COMMUNICATIONS INC.",
               "score": 9.0,
               "status": "HISTORICAL"
           },
           {
               "bn": "100652692BC0005",
               "goodStanding": true,
               "identifier": "BC1101218",
               "legalType": "BC",
               "name": "TELUS COMMUNICATIONS INC.",
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0016",
               "identifier": "FM1016698",
               "legalType": "SP",
               "name": "MASCON BY TELUS",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0004",
               "identifier": "C1100237",
               "legalType": "C",
               "name": "TELUS COMMUNICATIONS INC.",
               "score": 9.0,
               "status": "HISTORICAL"
           },
           {
               "bn": "100652692BC0002",
               "identifier": "A0094610",
               "legalType": "A",
               "name": "TELUS COMMUNICATIONS INC.",
               "score": 9.0,
               "status": "HISTORICAL"
           },
           {
               "bn": "100652692BC0006",
               "identifier": "FM0729795",
               "legalType": "SP",
               "name": "TELUS MOBILITY",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0018",
               "identifier": "FM1025864",
               "legalType": "SP",
               "name": "SECURE SENSE",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0012",
               "identifier": "FM0769470",
               "legalType": "SP",
               "name": "TORTEL COMMUNICATIONS",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0014",
               "identifier": "FM0776780",
               "legalType": "SP",
               "name": "FOCUS GESTION DE FLOTTE ET CARBURANT",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0008",
               "identifier": "FM0729812",
               "legalType": "SP",
               "name": "KOODO MOBILE",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0015",
               "identifier": "FM0787767",
               "legalType": "SP",
               "name": "PUBLIC MOBILE",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0013",
               "identifier": "FM0776779",
               "legalType": "SP",
               "name": "FOCUS FLEET AND FUEL MANAGEMENT",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0009",
               "identifier": "FM0729832",
               "legalType": "SP",
               "name": "TELUS",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0019",
               "identifier": "FM1051431",
               "legalType": "SP",
               "name": "FULLY MANAGED",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0011",
               "identifier": "FM0769469",
               "legalType": "SP",
               "name": "BROAD-CONNECT CANADA",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "100652692BC0017",
               "identifier": "FM1018576",
               "legalType": "SP",
               "name": "PRICE'S ALARM",
               "parties": [
                   {
                       "partyName": "TELUS COMMUNICATIONS INC.",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "organization",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           }
       ],
       "totalResults": 19
   }
}
 
Example 2) SALIM-ANA
 
{
   "query": {
       "bn": "819897323",
                            "identifier": "",
       "name": "",
                            "value": "*"
   },
   "rows": "20",
   "start": "0"
}
 
 
{
   "facets": {
       "fields": {
           "legalType": [
               {
                   "count": 3,
                   "value": "SP"
               }
           ],
           "status": [
               {
                   "count": 3,
                   "value": "ACTIVE"
               }
           ]
       }
   },
   "searchResults": {
       "queryInfo": {
           "categories": {
               "legalType": null,
               "status": null
           },
           "query": {
               "bn": "819897323",
               "identifier": "",
               "name": "",
               "value": "*"
           },
           "rows": "20",
           "start": "0"
       },
       "results": [
           {
               "bn": "819897323BC0002",
               "identifier": "FM0736961",
               "legalType": "SP",
               "name": "AVENUE AUTO GLASS",
               "parties": [
                   {
                       "partyName": "SALIM ANA-GHOLI",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "person",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "819897323BC0003",
               "identifier": "FM1038352",
               "legalType": "SP",
               "name": "APOLLO TOWING SERVICES",
               "parties": [
                   {
                       "partyName": "SALIM ANA-GHOLI",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "person",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           },
           {
               "bn": "819897323BC0001",
               "identifier": "FM0663834",
               "legalType": "SP",
               "name": "HAOMA OCCUPATIONAL THERAPY",
               "parties": [
                   {
                       "partyName": "SALIM ANA-GHOLI",
                       "partyRoles": [
                          "proprietor"
                       ],
                       "partyType": "person",
                       "score": 0.0
                   }
               ],
               "score": 9.0,
               "status": "ACTIVE"
           }
       ],
       "totalResults": 3
   }
}

---

**DaniWilliamson** (10/17/2024):

Thanks you for your questions; the bcregistry team is working on the response.

---

**karimjazzar** (10/17/2024):

Hi,

Hope all is well. Here are the answers to your questions:

**When using the V2 Registry Search API POST (Search Businesses), can you please confirm exactly which field (on the API Response) will indicate Legal Name and which field will indicate the Operating Name, for each business type.**

If the entity is a corporation/society/co-operative association the legalName is the name of the corporation/society/co-operative association. If the entity is a partnership or proprietorship the legalName is the name of the partners combined with a comma, or the name of the proprietor. For a partnership or proprietorship the operating name is contained in the alternateNames field. See examples below that demonstrate this.

E.g. for Corporation name 1051715 B.C. LTD.

The legalName = â€œ1051715 B.C. LTD.â€

E.g. for General Partnership ABC General Partnership owned by Gina Smith and Jamie Jenkins.

The legalName = â€œGINA SMITH, JAMIE JENKINSâ€

E.g. for Sole Proprietorship Ortega Properties Group, if it is owned by an individual.

The legalName = â€œJAMIE RALPH GORDONâ€

E.g. for Sole Proprietorship Ortega Properties Group, if it is owned by corporation 1051715 B.C. LTD. (SP owned by corporation or other business entity is known as doing business as)

The legalName = â€œ1051715 B.C. LTD.â€

Hereâ€™s an example which compares how the data displays in the API response for a BC Benefit Company (currently available to search in the modernized system) and a sole proprietorship (doing business as) owned by the BC Benefit Company.

BC Benefit Company 1053905 B.C. LTD.

legalName: â€œ1053905 B.C. LTDâ€

alternateNames, name: â€œUSER CREDTIENTIALS DBA TEST 1â€

Note, here, the alternateNames, name field is used to list the DBA name for the DBA owned by the corporation.

Sole Proprietorship USER CREDENTIALS DBA TEST 1

legalName: â€œ1053905 B.C. LTDâ€

alternateNames, name: â€œUSER CREDENTIALS DBA TEST 1â€

**We also understand that for some business types, the primary record (1st ACTIVE Registry Site) shows less fields that the subsequent Registry Site records. CAS would need BC Registries to confirm which business types this applies to and which Registry Site # record to refer to, to obtain the Legal Name & which record to refer to for the Operating Names. (Keeping in mind that the BC0001 record may not always be ACTIVE.)**

Iâ€™m not familiar with what a Registry Site is. Is the core need to understand why/when different data elements are returned? If so, BC Registries would produces records uniquely based upon business type (legalType in search API). Each different business type (legalType) has different requirements for the data provided. Search will retrieve what is available.

For information on the schemas for registration (sole proprietorship or partnership) or incorporation (benefit company) you can refer here:

[Registration Schema](https://bcregistry-demo.apigee.io/docs/businessproxy/1/types/Registration)
[Incorporation Application Schema](https://bcregistry-demo.apigee.io/docs/businessproxy/1/types/Incorporation_application)

*We show 2 examples below: BN 100652692 & BN 819897323. *Please note that in the following PROD example for 100652692, only â€œTELUS COMMUNICATIONS INC.â€ is considered (by CAS) to be the Legal Name, while â€œKOODOâ€, â€œBROAD-CONNECT TELECOMâ€, â€œTELUS MOBILITYâ€, â€œSECURE SENSEâ€, etc are considered to be Operating Names.**

**CAS is writing code for the Corporate Finance System based on this information, so it is critical that we get this correct & confirmed by BC Registries and not base this on our assumptions.**

In this search example, the search results specify that there are 14 SP (Sole Proprietorship) results, 3 A (Extraprovincial) results, 1 BC (BC Limited Company) result, 1 C (Continuation In) result.

For the BC corporations (BC) the name is the Legal Name. For instance, you will see that BC1001218 shows the name TELUS COMMUNICATIONS INC.

For the Extraprovincial Corporations, the name is the Legal Name. For instance, A0083329 show the name CTM VENTURES LTD.

For Continuations In (C) the name is the Legal Name. For instance, you will see that C1100237 shows the legal name TELUS COMMUNICATIONS INC.

For Sole Proprietorships (SP) the name is the operating name and the partyName is showing the legal name.

Note: The search results set showed the list of names that is retrieved when a search is executed. Full company details are provided when a purchase is made for one of the returned results. In the modernized system, not all entities have been migrated over, so full search is not yet available for a large number of types. Full search is currently available for BC Co-operative Associations, BC Benefit Companies, Sole Proprietorships, General Partnerships. Image below to demonstrate example.

![demonstration search|690x470](upload://zIcSsOi1olns3o9U6YobhX9Vnzx.png)

Please let us know if you have any other questions or concerns. Thanks!

---

**DaniWilliamson** (10/21/2024):

Hi, some clarifying information. For SPs/GPs: the 'legalName' is `partyName` (in the JSON response) while the 'operating name' is `name`. See example 1.

For non-SPs/non-GPs: the 'legalName' is `name` while the operating name is `N/A`. See example 2.

![image|435x500](upload://ul5YeHdmgAR2LBco74I8NhQ0aGC.jpeg)

Please let us know if you have questions.
