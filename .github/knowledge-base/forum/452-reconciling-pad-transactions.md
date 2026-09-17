# Reconciling PAD transactions

_Category: Pay · Source: BC Registries API community forum_

**iharder** (3/19/2025):

In [this thread](https://discourse.onebc.ca/t/api-user-inquiries-responses-from-product-owners/419), a list of columns for the relating filing transactions was itemized. One of those is Transaction ID. Is this the same as the Filing ID that we receive from our API filings? We need a way to reconcile the charges we make back to our clients.

---

**achiu** (3/20/2025):

Filing id is not the same as transaction id.

You should be able to query the [Pay API](https://developer.connect.gov.bc.ca/en-CA/products/pay/overview) to retrieve transaction info.

The `POST /pay/api/v1/accounts/{accountId}/payments/queries` endpoint will probably be relevant to your requirement to reconcile payment transactions.

---

**iharder** (3/20/2025):

Thanks for the response Argus, but that doesn't really resolve the issue. This stems from our company being a software vendor yet having multiple firms file through our account.

The only relevant attribute that we can control is the folio number. A possibility is for us to generate a unique identifier such as a UUID. However, the receipt that the users will retrieve will then not contain the folio number that they supplied with their filing, but one that makes no sense to them. See the attached receipt:
 
![BC FORM 1 (ONLINE) 6821_outR_page-0001|353x500](upload://jJ5iHpaDGxOg7207A28YHLAZSyP.jpeg)

We cannot rely on the folio number provided by the user as it may not be unique within the firm or between firms, or not included at all. It's only of use to the firm.

Our team is requesting that another element be recorded during a filing that can be associated with the transaction. The filing ID is an obvious candidate, but if it is not unique it could be one supplied by the the vendor or filing party. It need not be included on the receipts, but be available in transaction statements.

---

**achiu** (3/20/2025):

The filing id is returned by the transaction report endpoint I provided above.

e.g.

**Sample Request**
`POST /pay/api/v1/accounts/2596/payments/queries?page=1&limit=5`

POST body 
```json
{
  "dateFilter": {
    "startDate": "2024-03-20",
    "endDate": "2025-03-21",
    "isDefault": true
  },
  "excludeCounts": true
}
```


**Sample Response**

```json
{
  "hasMore": true,
  "items": [
    {
      "corpTypeCode": "SP",
      "createdBy": "BCSC/XYZUSER",
      "createdName": "BCREGTEST Delphia EIGHTEEN",
      "createdOn": "2025-03-20T14:07:38.008790",
      "details": [],
      "filingId": "184918",
      "id": 48269,
      "invoiceNumber": "REGUT00048269",
      "lineItems": [
        {
          "description": "Statement of Registration",
          "filingTypeCode": "FRREG",
          "gst": 0.0,
          "pst": 0.0,
          "serviceFees": 0.0,
          "total": 40.0
        }
      ],
      "paid": 40.0,
      "paymentAccount": {
        "accountId": "2596",
        "accountName": "XYZ-Dev-Account",
        "billable": true
      },
      "paymentDate": "2025-03-20T14:08:21.447267",
      "paymentMethod": "DIRECT_PAY",
      "product": "BUSINESS",
      "refund": 0.0,
      "serviceFees": 0.0,
      "statusCode": "COMPLETED",
      "total": 40.0
    },
    {
      "businessIdentifier": "BC0092828",
      "corpTypeCode": "BEN",
      "createdBy": "XYZ-ACCOUNT",
      "createdOn": "2025-01-09T00:43:43.389645",
      "details": [
        {
          "label": "Incorporation Number:",
          "value": "BC0092828"
        }
      ],
      "filingId": "156238",
      "id": 44697,
      "invoiceNumber": "REGUT00044697",
      "lineItems": [
        {
          "description": "Correction",
          "filingTypeCode": "CRCTN",
          "gst": 0.0,
          "pst": 0.0,
          "serviceFees": 0.0,
          "total": 20.0
        }
      ],
      "paid": 0.0,
      "paymentAccount": {
        "accountId": "2596",
        "accountName": "Argus-Dev-Account",
        "billable": true
      },
      "paymentMethod": "DIRECT_PAY",
      "product": "BUSINESS",
      "refund": 0.0,
      "serviceFees": 0.0,
      "statusCode": "CREATED",
      "total": 20.0
    }
  ],
  "limit": 5,
  "page": 1
}

```

---

**iharder** (3/20/2025):

Thank Argus. In this case, is the item "id" the transaction ID that will be included with statements?

EDIT: Is that call available in the sandbox? We get network errors when attempting to use it on the developer's website, and 503 Service Unavailable when attempting with Postman.

---

**achiu** (3/20/2025):

The pay api should be back up in the sandbox.

I believe the `id` being returned is the invoice identifier.

---

**iharder** (3/20/2025):

Thanks Argus. It does appear to be working now, and I think we can use that to pull records for reconciling our transactions.

---

**iharder** (3/21/2025):

When retrieving these records, they show that they have been paid. In production, does the status of these have actual PAD transaction dates? If so, would these records only show up once those transactions have completed? Currently I'm able to retrieve associated items showing they are paid immediately after a successful filing

Also, since you noted that the ids of the returned items are the invoice identifiers, will we be able to retrieve the actual transaction ID (that I presume is of the PAD transaction).

I'm trying to determine if these records alone are sufficient for us to reconcile.

---

**travis.semple** (3/21/2025):

In sandbox it's likely mocked PAD transactions go into PAID or COMPLETED status right away.

In production PAD invoices are set to APPROVED and make it into PAID or COMPLETED after the funds have been successfully withdrawn from the client's account. The payment_date (should be able to see this in the API) will get populated then. We typically still provide the product for PAD when it's APPROVED as the client has agreed to our PAD agreement and we lock their account if they end up being NSF. 

If the client has gone into NSF, we typically move the invoice_status_code into SETTLEMENT_SCHED for PAD only.

---

**iharder** (3/26/2025):

Thanks for that explanation Travis.
