---
sidebar_position: 3
---

# Enabling Local Authentication for a User

## Overview

Local authentication can be enabled for any user who doesn't already have it
configured. Enabling this method preserves all existing authentication methods
(such as SAML) for the user, providing them with additional login options.

When local authentication is enabled, the system generates a temporary
password. Users should change this password after their first successful login
for security purposes.

:::warning
The generated temporary password should be securely shared with the user. Make
sure they understand the importance of changing this password upon their first
login.
:::

1. Navigate to "**Users**" in the Admin Dashboard

2. Find the target user and select "**Enable Local Authentication**"

   ![User list showing the Enable Local Authentication option](/img/local/enable-password-index.png)

3. Confirm the action by selecting "**ENABLE**"

   ![Confirmation dialog for enabling local authentication](/img/local/enable-password-confirmation.png)

4. Save or securely share the generated password with the user

   ![Dialog showing the generated temporary password](/img/local/enable-password.png)
