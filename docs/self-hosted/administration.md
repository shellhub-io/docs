---
sidebar_position: 4
---

# Administration

ShellHub provides useful scripts for administering a self-hosted ShellHub instance. These scripts are located under the `./bin/cli` executable, which can be found at the root of the ShellHub project directory.

> **_TIP:_** If you are managing a self-hosted instance of ShellHub Enterprise, all administrative tasks can be performed through the Admin Console.

## User management scripts

### Create a user

Add user account to a local running instance of ShellHub.

**Usage**: `./bin/cli user create <username> <password> <email>`

> **_NOTE:_** The password can contain any characters, but the string length should be between 5 and 32 characters 

### Delete a user

Delete user account from a local running instance of ShellHub.

**Usage**: `./bin/cli user delete <username>`

### Reset a user's password

Reset user account password from a local running instance of ShellHub.

**Usage**: `./bin/cli user password <username> <password>`

## Namespace management scripts

### Create a namespace

Add namespace to a local running instance of ShellHub.

**Usage**: `bin/namespace create <namespace> <owner> [tenant]`

> **_NOTE_:** The namespace must adhere to a valid [RFC1123](https://www.rfc-editor.org/rfc/rfc1123) hostname format, but it should not contain dots.

> **_NOTE_:** The **[tenant]** is an optional UUID value, automatically generated when not provided.

### Delete a namespace

Delete namespace to a local running instance of ShellHub.

**Usage**: `./bin/cli namespace delete <namespace>`

### Add a member to the namespace

Add a user to a specific namespace in a locally running instance of ShellHub.

**Usage**: `./bin/cli namespace member add <username> <namespace> <role>`

> **_NOTE_:** The role must define the privileges the user has on this namespace and can be `owner`, `operator`, or `observer`.

### Remove namespace member

Delete user from a specific namespace to a local running instance of ShellHub.

**Usage**: `./bin/cli namespace member remove <username> <namespace>`
