---
sidebar_position: 3
---

# Features

ShellHub is a powerful and feature-rich platform for remotely accessing and
managing Linux servers and devices. Some of the key features that make ShellHub
stand out from the standard OpenSSH server and other similar solutions include:

## Native SSH support

ShellHub provides native SSH support, allowing you to access any device
behind the ShellHub SSH gateway using standard tools such as OpenSSH Client and PuTTY.
This means you don't need to install any additional third-party tools to connect
to your devices behind ShellHub. Simply use the tools you are already familiar
with to remotely manage your servers and devices through ShellHub.

## SCP/SFTP support

ShellHub offers SCP/SFTP support, allowing you to copy files to and from your devices
using industry standard tools without the need for any additional third-party applications.
This makes it easy to transfer files securely to and from your servers and devices,
ensuring that your data remains safe and secure throughout the process.

## Public-key authentication

ShellHub supports public-key authentication, which allows multiple users to
log in as the same system user without having to share a single password.
This can make it easier to manage access for multiple users,
as you can revoke a single user's access without affecting the access of other users.
Additionally, public-key authentication can make it easier for a single user to
log in to many accounts without having to manage multiple passwords.

## Firewall rules

ShellHub provides flexible firewall rules for filtering SSH connections,
giving you fine-grained control over which SSH connections can reach your devices.
This helps to improve the security of your servers and devices by allowing you to specify
which connections are allowed and which are blocked, helping to prevent unauthorized access.

## Audit logging

ShellHub includes audit logging capabilities, which means that every time an SSH connection
is made to ShellHub, a session is created and stored on the server for audit purposes.
This can be useful for tracking and monitoring access to your servers and devices,
and can help you to identify unauthorized access attempts.

## Session recording

ShellHub offers session recording, which means that all interactive SSH sessions are recorded,
including all user activity that occurs during the session.
These recordings can then be replayed via a built-in session player in the ShellHub Web UI.
This feature can be useful for a variety of purposes, such as training and documentation,
as well as for tracking and monitoring user activity on your servers and devices.

## Container Remote Access

ShellHub seamlessly integrates with Docker, enabling you to remotely access Docker containers.
With this feature, users can securely connect to containers. Whether you're troubleshooting,
performing maintenance, or overseeing your containerized services,
ShellHub's Container Remote Access simplifies container remote access management,
providing flexibility and control over containerized environments.

## Device tagging

Device tagging in ShellHub allows users to categorize and manage devices efficiently by 
assigning tags, facilitating easy organization and filtering. This improves device management 
and operational efficiency.

## Multi-Factor Authentication (MFA)

ShellHub's Multi-Factor Authentication (MFA) enhances security by requiring users to enter a one-time verification code sent using your favorite TOPT Provider before granting access to the platform. This additional layer of security helps protect your account from unauthorized access, even if your password is compromised.
