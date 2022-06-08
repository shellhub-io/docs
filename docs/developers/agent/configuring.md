# Configuration

All configuration is done via environment variables.

## Environment Variables

### :arrow_right: `SHELLHUB_SERVER_ADDRESS`

Set the ShellHub Cloud server address the agent will use to connect.

### :arrow_right: `SHELLHUB_PRIVATE_KEY`

Specify the path to the device private key

### :arrow_right: `SHELLHUB_TENANT_ID`

Sets the tenant id used during communication to associate the device to a specific namespace.

### :arrow_right: `SHELLHUB_KEEPALIVE_INTERVAL`

Determine the interval to send the keep alive message to the server.

### :arrow_right: `SHELLHUB_PREFERRED_HOSTNAME`

This provides a hint to the server to use this as hostname if it is available.
