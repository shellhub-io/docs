---
sidebar_position: 1
---

# Concepts

The following are the core concepts that describe a ShellHub deployment.
As you set up and manage ShellHub, you will encounter these terms frequently.
It is important to understand these concepts before reading further in the documentation.

## SSH gateway

The SSH gateway is a server that acts as a bridge between your device and the internet.
It allows you to establish an SSH connection to the device using a unique identifier called the **SSHID**.

## Device

The device is an internet-connected device that you want to control, such as a computer,
server or a single-board computer. To use the ShellHub system, the device must have
the **ShellHub Agent** installed on it.

## Agent

The agent is software that enables the device to connect to the **SSH gateway** and
receive commands from the remote user. Once the **ShellHub Agent** is installed on the device,
it establishes a connection to the **SSH gateway**, and the device becomes accessible over
the internet using the **SSHID**.

## SSHID

An **SSHID** (Secure Shell Identifier) is a unique identifier for a device that
is connected to the ShellHub system. It is used to identify the device in the
ShellHub network and to establish an SSH connection to the device through the **SSH gateway**.

The **SSHID** consists of three parts: the **namespace**, **hostname**, and **server address**:

* The **namespace** is a way to organize devices into logical units.
* The **hostname** is the device hostname identifier, which is used to distinguish between different
devices within the same namespace.
* The **server address** is the address of the ShellHub server instance (SSH gateway).

An example of an SSHID is: `demo.device-1@cloud.shellhub.io`

In this example, `demo` is the namespace identifier, `device-1` is the hostname identifier,
and `cloud.shellhub.io` is the server address identifier.
To connect to the device using the SSHID, you would use an SSH client and specify the SSHID as the hostname.
For example: ssh `user@demo.device-1@cloud.shellhub.io`.
