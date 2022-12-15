# Security

**How devices are hidden on the network.**

It uses the reverse connection originating from the agent within the device.

**Is it safe to couple all the accesses in a single platform?**

Yes, because it is possible to create firewall rules in ShellHub to further restrict access to devices (example: blocking access from anywhere and allowing only one IP).

**How does ShellHub prevent man-in-the-middle attacks?**

The last step of the authentication process takes place on the device, not the centralized server. That way, in case of a "man-in-the-middle attack" your devices won't be compromised.

**Is it possible to filter connections via MAC both in ShellHub and SSH?**

Yes, you can filter by device MAC address and via tags.

**Is it allowed to use authentication via public and private keys?**

Yes, you can generate a public key and name it within shellhub for easy authentication.


