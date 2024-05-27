# Recover an Account with MFA

:::note for enterprise edition users
If you’re using the enterprise edition, you won’t be able to recover access by
yourself with a recovery email. In that case, you need to contact the
administrator of the server instance.
:::

If you lose access to your TOTP app and all recovery codes, you can regain
access to your account using your [recovery email](../recovery-email).

1. **Log In to ShellHub**: Access your ShellHub account using your credentials.

2. **Navigate to the Settings Page**: Click on your profile icon and select
   “Settings.”

3. **Disable MFA**: In the “Multi-Factor Authentication” section, click the
   “Disable MFA” button.

   ![Disable MFA](/img/disable-mfa.png)

4. **Click on “CLICK HERE”**: Once you can provide a TOTP code, click on “CLICK
   HERE”.

   ![Recover Code](/img/disable-mfa-rc.png)

5. **Click on “CLICK HERE” (again)**: Once you can provide a recovery code, click
   on “CLICK HERE.”

   ![Recovery Code](/img/disable-mfa-re.png)

6. **Verify Your Emails**: After clicking the button, two emails will be sent—one
   to your primary email and another to your recovery email. Each email
   contains a code. You must provide both codes on the page where the email
   button redirects you. Both emails will redirect to the same page.

   ![Email Verification](/img/disable-mfa-re-screen.png)

7. **Enter Your Codes**: Enter the codes sent to both your primary and recovery
   emails.

   ![Enter Codes](/img/disable-mfa-re-codes-screen.png)

8. **Disable MFA**: Click the “Disable MFA” button, and your MFA will be activated.
   You’ll be redirected to your dashboard in a few seconds.

