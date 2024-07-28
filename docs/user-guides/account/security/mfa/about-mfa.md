# About MFA

:::note
MFA is only available on Cloud and Enterprise editions.
:::

- MFA has been available since `v0.15.0`.
- Starting from `v0.16.0`, you will need a [recovery email](../recovery-email) to
  activate your MFA. Users who enabled MFA before must add one, or they will be
  unable to recover their access when all methods are lost.

Multi-Factor Authentication (MFA) adds an extra layer of protection to your
account. When MFA is enabled, you are required to provide additional
verification, such as a time-based one-time code, along with your password when
logging in. ShellHub supports MFA with TOTP apps, such as Google Authenticator
and 1Password.

Once MFA is configured, ShellHub generates a list of recovery codes. Each
recovery code has a unique use and is invalidated after use. You can use it to
regain account access when you do not have your TOTP provider available or have
lost it. See [Recover an Account with MFA](./mfa-recovery) for further
informations.
