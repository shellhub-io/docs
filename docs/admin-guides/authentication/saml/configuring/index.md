---
sidebar_position: 1
---

# Configuring an Identity Provider

## Overview

ShellHub supports SAML authentication through any compatible Identity Provider
(IdP). You can enable SAML authentication at any time using either your IdP's
metadata URL or by manually configuring the required attributes. The SAML
method can be disabled whenever an alternative authentication method is
available.

For information about user authentication with your IdP, see [Authenticating
Users](../authentication).

## Configuration Methods

There are two ways to configure your IdP: [using a metadata
URL](./enabling-with-metadata) or [manual attribute
configuration](./enabling-manual). You can also enable [signed authentication
requests](../signed_authn_requests) for enhanced security and customize
attribute [mappings](../mapping) as needed.

Once enabled, configure your IdP to allow callbacks to ShellHub using your
instance's authentication endpoint. The URL follows this format:
`https://your-instance.managed.shellhub.io/api/user/saml/auth`

:::warning
Use the exact URL format to avoid routing errors.
:::
