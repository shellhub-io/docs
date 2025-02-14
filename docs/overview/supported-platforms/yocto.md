# Yocto Project

This guide walks you through integrating ShellHub Agent into Yocto Project-based Linux systems, allowing for seamless remote device management. By combining the Yocto Project's flexibility for custom Linux image builds with ShellHub’s powerful remote management capabilities, you can efficiently manage embedded devices.

## Prerequisites

- **Yocto Project Setup:** Familiarity with Yocto Project environment and build processes.
- **ShellHub Access:** Valid tenant ID for your ShellHub instance.
- **Git Installed:** Required for cloning repositories.
- **Project for Integration:** A Yocto Project setup ready to integrate with ShellHub.

## Step 1: Adding the ShellHub Layer

Start by adding the ShellHub layer to your Yocto Project environment:

```bash
bitbake-layers layerindex-fetch meta-shellhub -b scarthgap
```

This command fetches the `meta-shellhub` layer from the [OpenEmbedded Layer Index](https://layers.openembedded.org/layerindex/branch/master/layer/meta-shellhub/) and adds it to the **bblayers.conf** file.

:::info
If you want to consult meta-shellhub compability with others Yocto Project releases, you can consult the [meta-shellhub repository](https://github.com/shellhub-io/meta-shellhub) and look the branches available.
:::

For more on managing layers, see [Managing Layers in Yocto](https://docs.yoctoproject.org/next/dev-manual/layers.html#managing-layers).

## Step 2: Adding the ShellHub Agent Package to the Image

To include the ShellHub Agent in your build, add `shellhub-agent` to your image. Set `SHELLHUB_TENANT_ID` to link the device to your ShellHub instance.

:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

Edit the `conf/local.conf` file to add these variables:

```bash
CORE_IMAGE_EXTRA_INSTALL += "packagegroup-shellhub-runtime"
SHELLHUB_TENANT_ID = "<your tenant id here>"
```

### Optional: Configuring the ShellHub Server Address

If using a self-hosted ShellHub server, add this line to `conf/local.conf`:

```bash
SHELLHUB_SERVER_ADDRESS = "<your server address here>"
```

:::note
You can also change others ShellHub Agent settings. See the complete variable list [here](#shellhub-environment-variables).
:::

## Step 3: Building the Image

Once configured, build the image with:

```bash
bitbake <image-name>
```

Replace `<image-name>` with your target image (e.g., `core-image-base`).

## Deploying and Testing

1. Flash the image onto your target device.
2. Connect the device to the internet.
3. Boot the device and verify its connection to your ShellHub instance under the specified tenant ID.

![](/img/pending-device-notification.png)

## Troubleshooting Tips

- **Network Connectivity:** Ensure the device can reach the ShellHub server.
- **Tenant ID & Server Address:** Double-check these values in `conf/local.conf`.
- **Dependencies:** Verify all necessary dependencies for the ShellHub Agent are met.
- **Yocto Variables:** Ensure all Yocto configuration variables are correctly spelled.

## ShellHub Environment Variables for Yocto Project

- **SHELLHUB_SERVER_ADDRESS:** Sets the address for the ShellHub server (default is ShellHub Cloud: https://cloud.shellhub.io).
- **SHELLHUB_PRIVATE_KEY:** Path to the device’s private key.
- **SHELLHUB_TENANT_ID:** Links the device to a specific tenant or namespace.
- **SHELLHUB_KEEPALIVE_INTERVAL:** Interval for keep-alive messages to the server.
- **SHELLHUB_PREFERRED_HOSTNAME:** Suggested hostname for the device, if available.

## Conclusion

Your Yocto Project image now has ShellHub integrated for efficient remote management of your embedded devices. For more on the Yocto Project, see the [Yocto Project Documentation](https://docs.yoctoproject.org/).
