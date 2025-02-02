---
sidebar_position: 1
---

# SAML Authentication

:::note Enterprise Feature
SAML Authentication is available exclusively for enterprise customers.
:::

SAML (Security Assertion Markup Language) is an open standard for exchanging
authentication and authorization data between parties, specifically between an
identity provider (IdP) and a service provider (SP). It enables Single Sign-On
(SSO), allowing users to access multiple applications with a single set of
credentials. In that context, ShellHub acts as an SP, and uses users from an
IdP to authenticate instead of relying on self reigstered one.

ShellHub supports integration with one IdP at a time. This means you can
configure and maintain only one active SAML connection for your instance. When
switching to a different IdP, all SAML-authenticated users will automatically
transition to using the new provider for authentication.

:::tip
Once SAML is enabled, administrators have the option to disable the local
authentication. Forcing all users authenticate exclusively through your
configured IdP.
:::

:::warning
At least one authentication method must be enabled. If you plan to disable
local authentication, ensure you have configured and tested an alternative
authentication method like Local first.
:::
