---
sidebar_position: 2
---

# Creating API Keys

API keys can be created by any member with a role higher than *observer*. The
API key must have the same or a lower role than that of the member creating it.
Additionally, API keys have an optional expiration date, which can be set to
30, 60, 90, or 365 days after creation and **cannot** be reset.

1. Navigate to **Settings > Namespace** and click the **GENERATE KEY** button.

   ![](/img/api-keys/table-with-generate-red-square.png)

2. Choose a name, an expiration date, and a role, then click **GENERATE API
   KEY**.

   :::tip
   While it is possible to create a key without an expiration date, defining an
   expiration date is advisable for security purposes.
   :::

   ![](/img/api-keys/create-with-red-square.png)

3. Save the UUID in a safe place. This UUID is the identifier used to
   authenticate requests and cannot be retrieved later.

   ![](/img/api-keys/create-uuid.png)
