---
sidebar_position: 4
---

# Authenticating Users

## Overview

When SAML is enabled, ShellHub provides Single Sign-On (SSO) capabilities
through your Identity Provider (IdP). Users can access this feature through the
"**LOGIN WITH SSO**" button on the login page.

![ShellHub login page showing the SSO login option](/img/sso/login.png)

## Authentication Flows

ShellHub handles SAML authentication differently depending on whether the user
already exists in the system.
### First-Time Users

When users authenticate through SAML for the first time, ShellHub creates their
account automatically. The system imports essential information from the SAML
assertion, including the user's email and name, to set up their profile.

These SAML-created accounts don't have passwords since they rely on your
Identity Provider for authentication. However, if SAML becomes disabled in the
future, administrators can generate temporary passwords to enable local
authentication for these users (see [Enabling Local Authentication for a
User](../local/enabling-method) for more details.)

:::tip
Users can view and manage their available authentication methods through their
account settings page.
:::

### Existing Users

For users who already have ShellHub accounts, the system matches their email
address from the SAML assertion with existing records. When a match is found,
SAML authentication is enabled for their account while preserving any existing
authentication methods. This means users can choose to log in either through
SAML or with their existing password (if they have one).

## Changing Identity Providers

ShellHub makes transitioning between Identity Providers seamless. When you
configure a new IdP your existing SAML users automatically migrate to the new
provider without any disruption to their access. The system handles all
necessary updates behind the scenes, requiring no action from individual users.
Authentication continues to work smoothly through the new provider.
