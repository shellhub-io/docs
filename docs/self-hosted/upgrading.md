---
sidebar_position: 4
---

import {config} from '@site/src/config';

# Upgrading

ShellHub cuts regular releases for Community Edition to keep it
as close to ShellHub Cloud as possible.

We actively develop ShellHub to add new features and remove bugs, and encourage you to ensure your ShellHub self-hosted instance is using the most up-to-date version.

## Upgrading to a newer version

### Steps

1. Change to ShellHub project dir

2. Stop the instance: `make stop`

3. Fetch remote changes: `git remote update origin`
<li>Checkout the latest stable release: <code>git checkout { config.version }</code></li>
6. Bring up the instance: `make start`

:::caution
Make sure to backup all MongoDB data files before proceeding with upgrade.
:::

## Upgrade to Enterprise Edition

This section describes how to upgrade from the ShellHub Community Edition to the ShellHub Enterprise.

## Prerequisites

To complete this guide you will need:

* An [ShellHub](https://ossystems.com.br) Private Docker Registry account
to pull ShellHub Enterprise containers.
* A valid ShellHub Enterprise license file.

:::tip
[Contact us](mailto:contact@shellhub.io) to get a quote for the Enterprise version.
:::

## Configuring Enterprise

Once the Open Source containers of the ShellHub are up and running, let's configure your environment
to bring up the ShellHub Enterprise containers.

### Pull ShellHub Enterprise containers

First log in to the ShellHub Private Docker Registry with your credentials:

```
docker login https://registry.infra.ossystems.io/
```

### Update environment config

Open the `.env.override` file inside ShellHub project dir and set the following variables:
 
* `SHELLHUB_ENTERPRISE=true`
* `SHELLHUB_ENTERPRISE_ADMIN_USERNAME=<USER>`
* `SHELLHUB_ENTERPRISE_ADMIN_PASSWORD=<PASSWORD>`

## Restart containers

If ShellHub is up and running you need to restart containers by running:

```
make restart
```
