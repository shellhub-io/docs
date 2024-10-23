---
sidebar_position: 1
---

# Development Environment Setup

First of all, you'll need to generate required keys for the services:

```
$ make keygen
```

Set the environment to development:

```
$ echo "SHELLHUB_ENV=development" >> .env.override
```

Start the whole environment:

```
$ make start
```

> Avoid to use `docker-compose` directly (unless you know what you're doing); instead use `bin/docker-compose` wrapper.

Wait for all services to be ready then create initial user by running:

```
$ ./bin/add-user <username> <password> <email>
```

Create a namespace for grouping devices and set user as owner:

```
$ TENANT_ID=00000000-0000-4000-0000-000000000000 ./bin/add-namespace <namespace> <owner>
```

> Don't change the value of `TENANT_ID`, this value is hardcoded during agent initialization in development mode.

When you open ShellHub UI for the first time, be sure to accept pending device.
