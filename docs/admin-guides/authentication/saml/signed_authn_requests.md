---
sidebar_position: 2
---

# Signed Authentication Requests

## Overview

ShellHub supports signing SAML authentication requests to enhance security when
communicating with your Identity Provider (IdP). This security feature ensures
that authentication requests originate from a legitimate ShellHub instance and
maintains request integrity during transmission. With signed requests enabled,
your IdP can verify the authenticity of all incoming requests from ShellHub.

## How It Works

The signing process begins when you enable signed authentication requests in
ShellHub. The system automatically generates an X.509 certificate which is then
used to digitally sign all SAML authentication requests.

The generated certificate has a validity period of one year and can be renewed
before it expires. This certificate is dedicated solely to signing SAML
requests, providing a secure and dedicated authentication channel between
ShellHub and your IdP.

![](/img/sso/sign-authn-requests.png)

:::warning
Your certificate will be automatically regenerated in two scenarios: when you
disable and re-enable SAML, or when you modify SAML configuration with signed
requests enabled. After any certificate regeneration, it's crucial to update
your IdP configuration with the new certificate information to prevent
authentication disruptions.
:::

ShellHub implements the *C14N* canonicalization method.

## Enabling Signed Requests

You can enable signed authentication requests through your IdP configuration
settings. Look for the "**Advanced Settings**" section where you'll find the
"**Sign authorization requests**" option. Once enabled, you can download the
public certificate using the "**Download SP Certificate**" button. The final
step involves configuring your IdP with this downloaded certificate
information.

![](/img/sso/download-sp-certificate.png)
