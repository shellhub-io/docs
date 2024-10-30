# Namespaces

Namespaces in ShellHub provide a structured and collaborative environment
designed to streamline the management of devices, firewall rules, SSH keys, and
more. At the core of ShellHub’s platform, namespaces promote efficient, secure,
and isolated resource management, enabling teams or components to operate
independently while remaining accessible for team collaboration.

Each user must belong to at least one namespace, where resources are shared and
organized. Within namespaces, users can become
[members](../settings/namespace/members/index.md) and have roles and
permissions tailored to their access needs. This enables collaborative
management of devices and configurations while upholding robust security.

Namespaces enhance security by enforcing firewall rules, such as blocking
specific IPs, disabling root authentication, or limiting connections to
predefined users. Additionally, private/public SSH keys can strengthen
connection security within namespaces, adding another layer of control over
access.

Automation is also a key feature in namespaces. [API
keys](../settings/namespace/api-keys/index.md) allow secure, programmatic
access for integration and scripting. These API keys make it easier to automate
tasks like device updates, firewall rule adjustments, and SSH key management,
ensuring seamless operations.

To help manage large device fleets, tags offer a flexible way to categorize
devices within a namespace. Tags allow users to organize and retrieve devices
based on specific criteria, simplifying device management by enabling quick
identification, updating, or monitoring of grouped devices.
