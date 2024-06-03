# ShellHub Multi-Factor Authentication (MFA)

## Introduction

ShellHub's Multi-Factor Authentication (MFA) enhances security by requiring multiple verification methods before granting access to the platform. This additional layer of security helps protect your account from unauthorized access, even if your password is compromised.

## How ShellHub MFA Works

### 1. Enabling MFA

To enable MFA on your ShellHub account:

1. **Log In to ShellHub:**
   Access your ShellHub account using your username and password.

2. **Navigate to Settings Page:**
   Go to the Settings page by clicking on your profile icon and selecting "Settings".

3. **Enable MFA:**
   Find the "Enable MFA" section and click on the "Enable MFA" button.

![](/img/enable-mfa.png)

4. **Save your Recovery Codes:**
   You MUST download or copy the Recovery Codes from this dialog. It will be needed when you try to recover your account.
   
   :::warning
   Please just continue to the next step when you're confident you've saved your recovery codes. Without them, **you won't be able to get back into your account** if you lose your MFA device!
   :::

   Check "I have saved my recovery codes and I want to continue the MFA Setup" then click "Next Step".

5. **Set up multi-factor authentication:**
   Use apps like Microsoft Authenticator, Google Authenticator or Authy to generate time-based one-time passwords (TOTP) or just scan the QR code provided by ShellHub MFA Setup.

![](/img/set-up-multi-factor-auth.png)
   
6. **Close the last dialog:**

![](/img/mfa-successful.png)
   Complete the setup process by entering the verification code from your chosen method. Click "Save" to enable MFA.

### 2. Logging In with MFA

Once MFA is enabled, the login process will include an additional verification step:

1. **Enter Username and Password:**
   On the login page, enter your ShellHub username and password as usual.

2. **MFA Prompt:**
   After submitting your credentials, you will be prompted to complete the second verification step.

![](/img/mfa-totp.png)

3. **Enter Verification Code:**
   Enter the code from your authenticator app or the email verification code them click "Verify".

4. **Access Granted:**
   Upon successful verification, you will gain access to your ShellHub account.

### 3. Recovering Account with MFA

If you lose access to your MFA device or method:

1. **Enter your Recovery Codes:**
   After clicking "Lost your TOPT password?", just paste one of your Recovery Codes that you saved before then click "Recover Account".

2. **Verification of access to the authentication device**
   In order to keep the access to your account, please click "Disable MFA" if you doesn't have access to the device used for authentication. Else, click "I have access to my authentication device and don't need to disable MFA" and Close the dialog.

![](/img/verify-access-auth-device.png)

## Disabling MFA Settings

To manage your MFA settings:

1. **Navigate to Settings Page:**
   Go to the Settings page by clicking on your profile icon and selecting "Settings".

2. **Disable MFA:**
   If you need to disable MFA, click the "Disable MFA" button and follow the prompts to confirm your decision.

## Conclusion

Enabling MFA on your ShellHub account is a critical step in protecting your account from unauthorized access. By requiring multiple verification methods, ShellHub ensures that only authorized users can access the platform, providing peace of mind for you and enhanced security for your account and data.