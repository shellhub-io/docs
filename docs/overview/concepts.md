---
sidebar_position: 2
---

# How it Works

ShellHub is a platform to centralize and secure remote shell access to devices, servers and containers.

ShellHub operates by installing a lightweight agent on each of your devices, servers or containers.
This agent establishes a secure connection with the ShellHub server,
allowing you to remotely access and manage these systems through the ShellHub UI or via standard SSH tools.

## Components

ShellHub relies on two components: **Agent** and **Server**.
These components work together to make up ShellHub, facilitating secure and centralized remote access to devices, servers and containers.

### Server

The ShellHub Server is the central component responsible for managing all remote access connections. It acts as the central SSH gateway, handling requests from the ShellHub Agent and providing secure remote shell access to devices, servers, and containers. The ShellHub Server coordinates the communication between clients and devices, ensuring that all connections are authenticated and encrypted, and facilitates device management through the ShellHub UI.

### Agent

The ShellHub Agent is a lightweight software component that runs on each device, server, or container you want to manage. It establishes a persistent connection using a secure WebSocket to the ShellHub server, allowing for centralized remote access and management. The agent facilitates secure communication by creating a reverse tunnel, eliminating the need for exposing devices to the internet or configuring complex firewalls and VPNs.

## Concepts

The following core concepts define how ShellHub functions and are essential to understanding its operation.

### Namespace

A Namespace is a logical grouping of devices within ShellHub, allowing you to organize devices based on teams, projects, or any other criteria.
Each namespace provides isolated environments where users can manage only the devices within that specific namespace.

### SSHID

The SSHID (Secure Shell Identifier) is a unique identifier assigned to each device connected to the ShellHub Server.
It allows the identification of devices within the network and facilitates establishing secure SSH connections through the SSH gateway.

The SSHID is composed of three parts:

* **Namespace**: A way to organize devices into logical units.
* **Hostname**: The device hostname identifier, which is used to distinguish between different devices within the same namespace.
* **Server**: The address of the ShellHub Server instance (SSH gateway).

For example, an SSHID might be: `demo.device-1@cloud.shellhub.io`.
In this example, `demo` is the namespace identifier, `device-1` is the hostname identifier,
and `cloud.shellhub.io` is the server address identifier.

To connect using this SSHID, you would use an SSH client like this:

```
ssh user@demo.device-1@cloud.shellhub.io
```
