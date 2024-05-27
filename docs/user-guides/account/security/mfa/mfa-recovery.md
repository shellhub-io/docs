# Recover an Account with MFA

If you lose access to your MFA credentials, you can use a recovery code or
another recovery option.

:::warning
If you lose access to all your recovery options, you will **NOT** be able to
recover your account.
:::

## With Recovery Codes

You can use your **recovery codes** to regain access to your account. Each
**recovery code** is unique. If you use all of them, you must disable and
re-enable your MFA to generate new ones. This method will not disable your MFA,
but you can use the same recovery code within 10 minutes to disable it.

### Steps to Recover with Recovery Codes
1. Go to the ShellHub [Cloud](https://cloud.shellhub.io) or Enterprise edition
   login or disable MFA page.
2. When prompted for your MFA credentials, select the option to use a recovery
   code.
3. Enter one of your unused recovery codes to regain access.

## With the Recovery Email

:::note for enterprise edition end users
You won't be able to recover your access by yourself with a recovery email. You
need to contact the administrator of the server instance.
:::

If you have lost your credentials and do not have any recovery codes, you can
use your [recovery email](../recovery-email). This method will disable your
MFA.

### Steps to Recover with the Recovery Email
1. Go to the ShellHub [Cloud](https://cloud.shellhub.io) or Enterprise edition
   login or disable MFA page.
2. When prompted for your MFA credentials, select the option to use the
   recovery email. It will send two codes: one for your **main** e-email and
   another for your **recovery e-mail**.
3. Type both codes at reset mfa page.
