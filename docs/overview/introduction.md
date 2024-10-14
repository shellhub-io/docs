---
slug: /
sidebar_position: 1
---

import DocCardList from '@theme/DocCardList';
import DocCard from '@theme/DocCard';

# Introduction

## What is ShellHub?

ShellHub is a platform to centralize and secure remote shell access to devices, servers and containers.

![](/img/newdiagram.png)

## How it Works

ShellHub operates by installing a lightweight agent on each of your devices, servers or containers. This agent establishes a secure connection with the ShellHub server, allowing you to remotely access and manage these systems through the ShellHub UI or via standard SSH tools.

## Why ShellHub?

Managing secure remote shell access to devices, servers, and containers is often complex, and it becomes even more challenging as the infrastructure scales. ShellHub provides the most efficient way to centralize and secure remote shell access.

1. **Remote Access Simplification**:
   ShellHub simplifies remote access to devices across diverse networks. It eliminates the need for complex VPN setups or direct public access, ensuring secure and manageable connections from anywhere.

2. **Enhancing Security**: Centralized authentication with public key cryptography eliminates the need for password-based authentication, which can be vulnerable to brute-force attacks and password leaks.

3. **Simplifying Access Management**: Managing access to multiple devices becomes more straightforward with public key authentication. Administrators can easily add or remove access permissions by managing keys centrally on ShellHub.

4. **Controlling Network Access**: Administrators can create detailed firewall rules to control remote shell access to devices, servers and containers. This includes specifying allowed and blocked IP addresses and users, ensuring that only trusted connections can reach these systems.

## Next Steps

<DocCardList items={[
{
type: 'link',
label: 'Quick Start with ShellHub Cloud',
description: 'The simplest way to get started with ShellHub',
docId: 'overview/getting-started/cloud',
href: '/overview/getting-started/cloud',
className: 'nada'
},
{
type: 'link',
label: 'Self-Hosted ShellHub',
description: 'Run ShellHub server on your own infrastructure',
docId: 'self-hosted/deploying',
href: '/self-hosted'
},
]}/>
