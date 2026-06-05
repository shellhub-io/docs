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
copies all data from MongoDB to PostgreSQL. In **v0.24.0**, PostgreSQL became the only
supported database backend: MongoDB, the `SHELLHUB_DATABASE=migrate` mode, and the
migration pipeline were all removed.

:::caution
The migration only runs on **v0.23.x**. If you still keep data in MongoDB, upgrade to
v0.23.x and complete the migration **before** moving to v0.24.0 or later. There is no
in-place MongoDB-to-PostgreSQL migration on v0.24.0+ — jumping straight from MongoDB to
v0.24.0 leaves that data behind.
:::

### How the migration works (v0.23.x)

On v0.23.x, the migration runs automatically on startup when `SHELLHUB_DATABASE` is set
to `migrate`. It reads all data from MongoDB, writes it to PostgreSQL, and performs a
full validation to ensure data integrity. Check the progress at
`GET /api/migration/status` (available on v0.23.x), in the web UI, or in the API logs.

Once the migration completes successfully, you can switch to PostgreSQL permanently.

### Upgrading from v0.22.x or earlier

If you are upgrading from v0.22.x or earlier, follow these steps:

1. **Backup your MongoDB data** before doing anything.

2. **Upgrade to v0.23.x first**. The default `SHELLHUB_DATABASE` is already set to
   `migrate` in the `.env` file, so no additional configuration is needed. Do not skip
   this release — it is the only one that can migrate your MongoDB data.

3. Start ShellHub and wait for the migration to complete. On v0.23.x you can check the
   status at `GET /api/migration/status` — it returns `{"status":"completed"}` when done —
   or follow the web UI and the API logs.

4. Verify the migration completed without errors by checking the API logs.

5. **Upgrade to v0.24.0**. The default `SHELLHUB_DATABASE` is now `postgres` in the
   `.env` file, so no additional configuration is needed.

6. Start ShellHub. It will now use PostgreSQL directly. MongoDB is no longer needed.

:::caution
Do not remove your MongoDB data or container until you have verified that the migration
completed successfully and PostgreSQL is working correctly.
:::

### Upgrading from v0.23.x

If you already ran v0.23.x with `SHELLHUB_DATABASE=migrate` and the migration completed
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
