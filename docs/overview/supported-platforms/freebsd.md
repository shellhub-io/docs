# FreeBSD

This guide provides instructions for building, installing, and configuring the ShellHub Agent on FreeBSD, allowing you to remotely manage your device through ShellHub.

## Prerequisites

- **FreeBSD System**: A FreeBSD system with root access.
- **ShellHub Access**: A valid tenant ID for your ShellHub Cloud or self-hosted instance.
- **Git Installed**: Required to clone the FreeBSD Ports Collection repository.

## Step 1: Cloning the FreeBSD Ports Collection

Begin by cloning the ShellHub Agent port from the FreeBSD Ports Collection repository to your system:

```bash
git clone https://github.com/shellhub-io/ports.git
```

Once cloned, navigate to the directory containing the ShellHub Port:

```bash
cd ports
```

## Step 2: Building and Installing ShellHub Agent

To build and install the ShellHub Agent, run:

```bash
make install clean
```

This command compiles and installs the ShellHub Agent on your system.

## Step 3: Configuring ShellHub Agent

After installation, configure the ShellHub Agent by adding the necessary settings to `/etc/rc.conf`:

```bash
# Enable ShellHub Agent
shellhub_enable="YES"

# Set the ShellHub Server Address
shellhub_server_address="https://cloud.shellhub.io"

# Set the Tenant ID
shellhub_tenant_id="00000000-0000-0000-0000-000000000000"
```

:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

## Starting ShellHub Agent and Testing

To start the ShellHub Agent, use:

```bash
service shellhub start
```

The ShellHub Agent will now connect in the background using the specified server address and tenant ID.

![](/img/pending-device-notification.png)

## Troubleshooting Tips

- **Network Connectivity:** Ensure the device can reach the ShellHub server.
- **Tenant ID & Server Address:** Double-check the variable content reading `/etc/rc.conf`. Also verify if all variables are correctly spelled.
- **Logs and Debugging:**
Check the ShellHub Agent logs for detailed error messages by running `cat /var/log/shellhub.log`. Look for messages indicating connection issues, authentication errors, or misconfigurations.
- **Service Status:**
Ensure the ShellHub service is running by checking its status `service shellhub status`. If the service is not running, try starting it: `service shellhub start`.
- **System Updates:**
Ensure your FreeBSD system and ports tree are up-to-date to avoid compatibility issues:

```bash
freebsd-update fetch install
portsnap fetch update
```

## ShellHub Environment Variables for FreeBSD

- **shellhub_enable:** Enable or disable ShellHub Agent. By default, it is set to `NO`. Set it to `YES` to enable shellhub.
- **shellhub_server_address:** Sets the address for the ShellHub server (default is ShellHub Cloud: https://cloud.shellhub.io).
- **shellhub_private_key:** Path to the device’s private key.y default, it is stored in `/etc/shellhub.key`
- **shellhub_tenant_id:** Links the device to a specific tenant or namespace.

## Conclusion

With ShellHub Agent installed on FreeBSD, your device is now set up for remote management. For more information on FreeBSD Ports, see the [FreeBSD Handbook on Ports and Packages](https://www.freebsd.org/doc/handbook/ports.html).