# Configuring your MFA

:::note
To enable MFA for your ShellHub account, you must provide a recovery email.
:::

You can configure MFA using a Time-Based One-Time Password (TOTP) app. In order
to disable MFA, you must provide either the TOTP password, a recovery code, or
request the MFA reset via your [recovery email](../recovery-email).

Each recovery code has a unique use. If you use them to log in, you can use the
same code to deactivate your MFA within 10 minutes.

## Enabling

Once enabled, every time you attempt to log in, you will need to provide an
additional verification method along with your password.

### Steps to Enable your MFA:
1. Log in to your ShellHub account on [Cloud](https://cloud.shellhub.io) or
   Enterprise edition.
2. Navigate to your account settings and go to the bottom of the page.
3. Click on the option to enable Multi-Factor Authentication.
4. Follow the on-screen instructions to set up MFA using your preferred method.

:::warning
Be sure to securely store your recovery codes as you will not be
able to recover them.
:::

## Disabling

If you no longer wish to use Multi-Factor Authentication for your ShellHub
account, you can disable it. Once MFA is disabled, you will no longer need to
provide an additional verification method along with your password to log in to
your account.

However, keep in mind that disabling MFA may reduce the security of your
account. Make sure to consider the implications before disabling this feature.

### Steps to Disable your MFA:
1. Log in to your ShellHub account on [Cloud](https://cloud.shellhub.io) or
   Enterprise edition.
2. Navigate to your account settings and go to the bottom of the page.
3. Click on the option to disable Multi-Factor Authentication.
4. Follow the on-screen instructions to confirm the disablement of MFA.
