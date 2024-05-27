# Logging In with MFA

Enabling Multi-Factor Authentication (MFA) adds an extra layer of security to
your login process by requiring a password generated from your TOTP app or a
recovery code.

### With TOTP code

1. **Enter Your Credentials**: Start by entering your credentials on the login
   page as usual.

2. **MFA Prompt**: After submitting your credentials, you'll encounter a prompt
   to complete the second verification step.

   ![Verify with TOTP App](/img/verify-totp.png)

3. **Enter Verification Code**: Input the code from your TOTP app and then
   click "Verify."

4. **Access Granted**: Upon successful verification, you'll be granted access
   to your ShellHub account.

### Using Recovery Codes

Recovery codes have a unique purpose: once used, they become invalid for any
future use. However, they won't disable your Multi-Factor Authentication (MFA).
You can use the same recovery code within a 10-minute window to disable MFA.

1. **Enter Your Credentials**: Begin by entering your credentials on the login
   page as usual.

2. **Lost Your TOTP Password**: After submitting your credentials, you'll
   encounter a prompt to complete the second verification step. Instead of
   using your TOTP password, click on "Lost your TOTP password?".

   ![Verify with recovery code](/img/verify-recovery-code.png)

3. **Enter the Recovery Code**: Input the recovery code and then click "Recover
   Account".

   ![Verify with recovery code screen](/img/verify-recovery-code-screen.png)

4. **Access Granted**: Upon successful verification, you'll gain access to your
   ShellHub account.

5. **(Optional) Disable MFA**: If you wish to disable MFA within 10 minutes
   after login, use the same recovery code. Click on "Disable MFA".

   ![Disable MFA with recovery code
   screen](/img/verify-recovery-code-disable-screen.png)
