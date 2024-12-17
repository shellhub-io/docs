# Buildroot

This guide provides instructions for integrating the ShellHub Agent into a Buildroot-based system, enabling ShellHub’s remote management capabilities.

## Prerequisites

- **Buildroot Environment**: Ensure you have Buildroot installed on your system.
- **ShellHub Access**: A valid tenant ID for your ShellHub Cloud or self-hosted instance.
- **QEMU**: Installed and configured for emulated environments (optional).

## Step 1: Cloning Repositories

Clone the Buildroot repository:

```bash
git clone git://git.buildroot.net/buildroot
```

Clone the ShellHub external Buildroot tree:

```bash
git clone https://github.com/shellhub-io/buildroot.git shellhub
```

## Step 2: Configuring ShellHub Integration

### Setting Default Configuration

Navigate to the Buildroot directory and set the default configuration for ShellHub:

```bash
cd buildroot
make BR2_EXTERNAL=../shellhub qemu_x86_64_defconfig
```

### Modifying Configuration via Menuconfig

Start the Buildroot `menuconfig` to customize options. Ensure the **ShellHub** option is selected under **External options**:

```bash
make BR2_EXTERNAL=../shellhub menuconfig
```

## Step 3: Adding Custom ShellHub Configuration

To customize the ShellHub Agent’s configuration, create a configuration overlay:

```bash
nano ../shellhub/rootfs_overlay/etc/default/shellhub-agent
```

Put the following content:
```bash
SERVER_ADDRESS="https://cloud.shellhub.io"
TENANT_ID="<your-tenant-id-here>"
PRIVATE_KEY="/etc/shellhub-agent.key"
```
Replace the placeholder values. For more information see [ShellHub Environment Variables for BuildRoot.](#shellhub-environment-variables-for-buildroot).

## Step 4: Building the System

Build the root filesystem and kernel:

```bash
make BR2_EXTERNAL=../shellhub rootfs-ext2
```

This command generates the system images required for your device.

## Step 5: Running With QEMU (Optional)

To test your Buildroot system with ShellHub in an emulated environment, run:

```bash
qemu-system-x86_64 \
  -kernel output/images/bzImage \
  -drive file=output/images/rootfs.ext2,format=raw \
  -append "root=/dev/sda console=ttyS0" \
  -m 512M \
  -nographic \
  -netdev user,id=n0,hostfwd=tcp::2222-:22 \
  -device virtio-net-pci,netdev=n0
```

![](/img/pending-device-notification.png)

## Troubleshooting

- **Configuration File Not Applied**: Check the log file `/var/log/shellhub-agent.log` for error messages. If the agent fails to load configuration or reports `failed to parse the configuration`, ensure the `shellhub-agent` configuration file is correctly placed in `/etc/default/`. Double-check variable names and values, especially for `SERVER_ADDRESS`, `PRIVATE_KEY`, and `TENANT_ID`.

- **Network Connectivity Issues**: If the agent cannot connect to the server, confirm that the network interface is properly configured and active. Verify connectivity by testing with a tool like `ping` or `curl` from within the target system.

- **Build Errors**: If Buildroot fails during compilation, ensure all dependencies are satisfied and that external trees (e.g., ShellHub) are correctly referenced with `BR2_EXTERNAL`. Verify any added `Config.in` modifications do not conflict with existing configurations.

## ShellHub Environment Variables for BuildRoot

- **SERVER_ADDRESS**: Your ShellHub server address. Keep `https://cloud.shellhub.io` if you're using ShellHub Cloud.
- **PRIVATE_KEY**: Path to your private key file.
- **TENANT_ID**: Links the device to a specific tenant or namespace. For help retrieving this, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id).

## Conclusion

By integrating ShellHub into your Buildroot system, you enable seamless remote management of your device. For more information on Buildroot, refer to the [Buildroot Manual](https://buildroot.org/docs.html).