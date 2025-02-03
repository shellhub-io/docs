---
sidebar_position: 1
---

# Development Environment Setup

First of all, you'll need to generate required keys for the services:

```
$ make keygen
```

Set the environment for development:

```
$ echo "SHELLHUB_ENV=development" >> .env.override
```

Start the whole environment:

```
$ make start
```

> Avoid using `docker-compose` directly (unless you know what you're doing); instead use `./bin/docker-compose` wrapper.

:::info
Wait for all services to be ready, then proceed:
:::

Then create an initial user by running

```
$ ./bin/cli user create <username> <password> <email>
```

Create a namespace for grouping devices and set a user as owner:

```
$ ./bin/cli namespace create <namespace> <user> 00000000-0000-4000-0000-000000000000
```

> For development, the `TENANT_ID` specified, `00000000-0000-4000-0000-000000000000`, is required to turn the local
> environment into a ShellHub Agent running device, as it's a hardcoded value.

When you open ShellHub UI for the first time, be sure to accept pending device.
