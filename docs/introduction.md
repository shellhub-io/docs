---
slug: /
sidebar_position: 1
---

# Introduction

ShellHub is a centralized SSH gateway that allows users to remotely access and
manage their servers and devices from anywhere, using a web browser or mobile app.
It offers a secure and convenient way to connect and control your servers and devices.

One of the main benefits of ShellHub is that it acts as a central gateway for all your
Linux servers and devices, allowing you to access them from anywhere with an internet connection.
This means you don't have to worry about getting its public IP address, configuring the router,
changing VPN/firewall settings or using a jump host to access your servers and devices.
This can be inconvenient and time-consuming.

ShellHub also allows you to access and manage multiple servers and devices from a single interface,
saving time and making it easier to keep track of all your servers and devices.
The platform also includes enhanced security features such as public key authentication,
SSH firewall rules to prevent unauthorized access, audit logging, and session recording
to provide a record of activity for compliance purposes.

Another benefit of ShellHub is its ability to work with a variety of devices,
including embedded Linux devices. This makes it a versatile tool for a wide range of applications,
from managing servers in a data center to controlling industrial equipment or Internet of Things (IoT) devices.

Overall, ShellHub is a powerful tool for managing and securing your servers and devices,
whether you are a small business, a large enterprise, or an individual user.

This documentation incorporates a description of the features and capabilities, modes of operation, and step-by-step getting started guide for running a self-hosted ShellHub server and use.

## Overview

There are few basic concepts that are important to understand the ShellHub.
Those basic concepts are detailed below:

**SSH Gateway**

The SSH gateway is a SSH server which forward connections to the devices running ShellHub's agent.

**Device**

An internet-connected device, such as a computer or something more specific like a single-board computer, running ShellHub's agent.

**Agent**

ShellHub's agent which must be installed on the device.

**SSHID**

SSHID is a unique address to identify a device in the SSH gateway, which must be specified in the following format:

`<NAMESPACE>`.`<HOSTNAME>`@`<SERVER_ADDRESS>`

Where:

* `<NAMESPACE>`: Is the account namespace identifier
* `<HOSTNAME>`: Is the device hostname identifier
* `<SERVER_ADDRESS>`: Is the ShellHub server instance address identifier

Example of SSHID: `demo.device-1@cloud.shellhub.io`
