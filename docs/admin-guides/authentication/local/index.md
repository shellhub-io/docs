---
sidebar_position: 1
---

# Local Authentication

Local authentication is ShellHub's built-in user management system that handles
user registration, authentication, and access control directly within the
platform. This method stores user credentials securely in ShellHub's database
and doesn't require external identity providers.

With local authentication, users create and manage their accounts directly
through ShellHub's interface. Each user account is associated with a unique
email address, which are used for authentication.

:::tip
Local authentication is enabled by default and can be used immediately after
ShellHub installation. No additional configuration is required to start
registering and authenticating users.
:::

:::warning
At least one authentication method must be enabled. If you plan to disable
local authentication, ensure you have configured and tested an alternative
authentication method like SAML first.
:::
