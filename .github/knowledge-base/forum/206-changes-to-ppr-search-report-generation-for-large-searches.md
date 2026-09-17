# Changes to PPR search report generation for large searches

_Category: Upcoming Releases · Source: BC Registries API community forum_

**Fareen** (10/28/2022):

The method for generating PPR search reports with more than 700 registrations has changed. When there are more than 700 registrations, the report will be divided into sub-reports with up to 500 registrations per sub-report. All sub-reports are contained within one PPR search report (1 PDF file). Clients will continue to see one link to the PPR search report on the dashboard. This change was made to optimize performance.
