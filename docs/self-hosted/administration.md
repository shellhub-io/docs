---
sidebar_position: 4
---

# Administration

ShellHub comes with a useful scripts for administering a self-hosted ShellHub instance.

Each script must be run from the root of ShellHub project dir.

:::tip

If you are managing a ShellHub Enterprise self-hosted instance,
all administrative tasks can be performed via the Admin Console.

:::

## User management scripts

### `add-user`

Add user account to a local running instance of ShellHub.

- **Usage**: `./bin/add-user <username> <password> <email>`

:::info
The password can contain any characters, but the string length should be between 5 and 30 characters
:::

### `del-user`

Delete user account from a local running instance of ShellHub.

- **Usage**: `./bin/del-user <username>`

### `reset-user-password`

Reset user account password from a local running instance of ShellHub.

- **Usage**: `./bin/reset-user-password <username> <password>`

## Namespace management scripts

### `add-namespace`

Add namespace to a local running instance of ShellHub.

- **Usage**: `./bin/add-namespace <namespace> <owner>`

:::caution
Make sure to replace **owner** with your account username and **namespace** with a valid [RFC1123](https://www.rfc-editor.org/rfc/rfc1123) hostname format.
:::

### `del-namespace`

Delete namespace to a local running instance of ShellHub.

- **Usage**: `./bin/del-namespace <namespace>`

### `add-user-namespace`

Add user to specific namespace to a local running instance of ShellHub.

- **Usage**: `./bin/add-user-namespace <username> <namespace>`

### `del-user-namespace`

Delete user from a specific namespace to a local running instance of ShellHub.

- **Usage**: `./bin/del-user-namespace <username> <namespace>`
