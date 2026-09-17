# Serial_Number type search does not return AF or AC

_Category: Tips and Hints · Source: BC Registries API community forum_

**Melissa** (1/14/2022):

Question: In search testing for NON-Vin Serial Numbers it was found that Airline ('AC Airframe registered in Canada' and 'AF Airframe not registered in Canada') are returning results as not found. All other Serial Collateral Types are successful.

Response: A SERIAL_NUMBER type search query does not return results for AF or AC serial collateral types. Use the search query type AIRCRAFT_DOT to search on the AC or AF serial collateral.
