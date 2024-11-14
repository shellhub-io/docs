# Snap

This guide walks you through installing and configuring the ShellHub Agent as a Snap Package. Using Snap provides a straightforward way to install and manage the ShellHub Agent on devices, connecting them for remote management via ShellHub.

## Prerequisites

- **Snap Package Manager Installed**: Ensure Snap is installed and available on your device.
- **ShellHub Access**: A valid tenant ID for your ShellHub Cloud or self-hosted instance.

## Step 1: Installing the ShellHub Agent

The ShellHub Agent is available on the Snap Store. To install, run:

```bash
sudo snap install --classic shellhub
```

:::info
By default, the ShellHub Agent is configured to use **ShellHub Cloud** (`https://cloud.shellhub.io`), allowing for quick setup without needing a self-hosted instance. You only need to set the `tenant-id` to connect the device to your ShellHub Cloud namespace.
:::

## Step 2: Viewing ShellHub Agent Configuration

To view the current configuration of the ShellHub Agent, use:

```bash
snap get shellhub
```

This command displays the current settings, showing key configuration details such as the **private key path**, **server address**, and **tenant ID**.

By default, should display these keys and values:

| Key            | Value                       |
|----------------|-----------------------------|
| private-key    | /etc/shellhub.key           |
| server-address | https://cloud.shellhub.io   |
| tenant-id      |                             |

## Step 3: Setting Configuration Options

You can configure the ShellHub Agent using the `snap set` command. Update settings by replacing `<key>` and `<value>` with your desired configurations:

```bash
sudo snap set shellhub <key>=<value>
```

### Key Configuration Options:

- **private-key**: Path to the private key for ShellHub Agent.
- **server-address**: Address of the ShellHub server (default: `https://cloud.shellhub.io`).
- **tenant-id**: Tenant ID associated with your ShellHub namespace.

### Example Configuration

To set the **tenant ID** and a custom **server address**, use:

```bash
sudo snap set shellhub tenant-id=<your-tenant-id>
sudo snap set shellhub server-address=<your-server-address>
```
:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

The ShellHub Agent will automatically connect to the server in background.

![](/img/pending-device-notification.png)

## Conclusion

With ShellHub installed as a Snap Package, you can quickly configure and connect your device for remote management. For further details about Snap, see the [Snapcraft Documentation](https://snapcraft.io/docs).