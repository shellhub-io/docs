---
sidebar_position: 3
---

# Configuration

ShellHub is easy to configure, all configuration is done via environment
variables inside the `.env.override` file located at the root of ShellHub project dir.

:::tip
By default, the `.env.override` file does not exists, so you need need to create it.
:::

## Environment Variables

:::note
All default values are inherited from `.env` file.
:::

### `SHELLHUB_HTTP_PORT`

- Default: 80

The HTTP listen port for the ShellHub web-based GUI, API and Reverse SSH tunnel.

### `SHELLHUB_HTTPS_PORT`

- Default: 443

The HTTPS listen port for the ShellHub web-based GUI, API and Reverse SSH tunnel.


### `SHELLHUB_SSH_PORT`

- Default: 22

The SSH listen port for incoming SSH connections to devices.

### `SHELLHUB_PROXY`

- Default: false

Set this variable to `true` if you are running a Layer 4 load balancer with proxy protocol in front of ShellHub.

### `SHELLHUB_AUTO_SSL`

- Default: false

Automatic HTTPS with Let's Encrypt

:::tip
When enabling this option, you must set `SHELLHUB_DOMAIN` with
domain of the server.
:::

### `SHELLHUB_REDIRECT_TO_HTTPS`

- Default: false

Redirect requests from HTTP port to HTTPS port

### `SHELLHUB_DOMAIN`

- Default: localhost

Domain of the server
