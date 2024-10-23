# About MFA

:::note
MFA is only available on Cloud and Enterprise editions.
:::

Multi-Factor Authentication (MFA) adds an extra layer of protection to your
account. When MFA is enabled, you are required to provide additional
verification, such as a time-based one-time code, along with your password when
logging in. ShellHub supports MFA with TOTP apps, such as Google Authenticator
and 1Password.

Once MFA is configured, ShellHub generates a list of recovery codes. Each
recovery code has a unique use and is invalidated after use. You can use it to
regain account access when you do not have your TOTP provider available or have
lost it. See [Recover an Account with MFA](./recovery-access) for further
informations.
