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
Make sure to backup all database data files before proceeding with upgrade.
:::

## Database Migration (MongoDB to PostgreSQL)

Starting with **v0.23.0**, ShellHub introduced a migration pipeline that automatically
copies all data from MongoDB to PostgreSQL. In **v0.24.0**, PostgreSQL became the default
and only supported database backend. MongoDB is no longer required.

### How the migration works

The migration runs automatically on startup when `SHELLHUB_DATABASE` is set to `migrate`.
It reads all data from MongoDB, writes it to PostgreSQL, and performs a full validation
to ensure data integrity. The migration status is visible at `GET /api/migration/status`
and in the web UI.

Once the migration completes successfully, you can switch to PostgreSQL permanently.

### Upgrading from v0.22.x or earlier

If you are upgrading from v0.22.x or earlier, follow these steps:

1. **Backup your MongoDB data** before doing anything.

2. **Upgrade to v0.23.0 first**. The default `SHELLHUB_DATABASE` is already set to
   `migrate` in the `.env` file, so no additional configuration is needed.

3. Start ShellHub and wait for the migration to complete. You can check the status at
   `GET /api/migration/status` — it will return `{"status":"completed"}` when done.

4. Verify the migration completed without errors by checking the API logs.

5. **Upgrade to v0.24.0**. The default `SHELLHUB_DATABASE` is now `postgres` in the
   `.env` file, so no additional configuration is needed.

6. Start ShellHub. It will now use PostgreSQL directly. MongoDB is no longer needed.

:::tip
If you are upgrading directly from v0.22.x or earlier to v0.24.0, you can skip v0.23.0
entirely. Set `SHELLHUB_DATABASE=migrate` in your `.env.override`, let the migration
complete, then remove it and restart so it falls back to the default `postgres`.
:::

:::caution
Do not remove your MongoDB data or container until you have verified that the migration
completed successfully and PostgreSQL is working correctly.
:::

### Upgrading from v0.23.x

If you already ran v0.23.0 with `SHELLHUB_DATABASE=migrate` and the migration completed
successfully, simply update to v0.24.0. The default database is already set to `postgres`.

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
