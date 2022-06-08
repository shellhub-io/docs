# Using Public Key authentication

Public Key authentication is a way of logging into an devices
using a cryptographic key rather than a password which is
the default method most SSH clients use to authenticate
with remote devices, but it suffers from potential
security vulnerabilities like brute-force login attempts.

Using key-based authentication offers a range of benefits:

* Allow multiple developers to log in as the same system
user without having to share a single password between them.
* Revoke a single developer's access without revoking access
by other developers.
* Make it easier for a single developer to log in to many
accounts without needing to manage many different passwords.

## Creating a SSH key pair

You can generate a new SSH key on your local machine by using the `ssh-keygen`
utility from the OpenSSH suite.

Run the following command in your terminal:

```
ssh-keygen -t ed25519
```

:::caution
This command may overwrite an existing key with the same name.
:::


## Add a public SSH key

After you create an SSH key pair, you can upload your public key to ShellHub.

:::note

It’s safe to share your SSH public key to anyone because it cannot be used to
re-create the private key. It can only be used to validate the user who holds
the associated private key (which should never be shared).

:::

From the Public Keys page, click on **Add Public Key** button and fill the form.

![](/img/new-public-key.png)
