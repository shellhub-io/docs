# Using HTTP tunnels

:::info
This feature is only available in [ShellHub Cloud](https://shellhub.io) and
[ShellHub Enterprise](https://www.shellhub.io/products/enterprise).
:::

ShellHub HTTP tunnels enable secure, direct access to HTTP services on devices
with the ShellHub Agent, eliminating the need for SSH local port forwarding. This
simplifies connectivity, allowing users to access web-based interfaces seamlessly
from their browser.

## Use cases

- **Web Application Access**: Expose a local web application (e.g., a dashboard
or admin panel) running on a remote device to access it from anywhere.

- **Remote API Access**: Expose an API running on a remote IoT device to test or
interact with it from the cloud.

- **Webhook Testing**: Enable external services (e.g., Stripe, GitHub, Twilio) to
send webhooks to a development environment on a remote device.

- **Remote Device Configuration**: Access the configuration interface of a remote
network device without VPN or port forwarding.

- **Viewing Logs & Monitoring**: Expose real-time logs or monitoring dashboards
from a remote device.

## Create Tunnel

On the device listing, click on *actions*, and access the device's details.
![Device's list with actions opened](/img/device-list-actions.png)

Once there, access the menu, click on *create tunnel*.
![Device's details with menu opened](/img/device-details-menu.png)

To create the tunnel, you need to specify the **host** address and the **port** where
the service is running. It means you could point it to a service running on either
your own machine or another machine on the device's network.

You can also define a lifetime for a tunnel. A tunnel can live indefinitely,
with an **Unlimited Timeout** or for a defined time. The time is reset every
time the URL is accessed. After expiration, the tunnel will be inaccessible,
unless recreated. If a new tunnel is created with the same **host** and **port**,
the expired address will be kept.

![Create tunnel model](/img/create-tunnel.png)

## Using Tunnel

The address for defined will be shown on the tunnel list with other information.

![List of tunnels](/img/list-tunnels.png)

After that, when accessing the link, you should see the application listing of the
**host** and **port** defined.

:::info
It's worth noticing that [ShellHub Cloud](https://shellhub.io) and
[ShellHub Enterprise](https://www.shellhub.io/products/enterprise) encrypts connections
to the device, even if the service on it doesn't provide encryption.
:::

![Simple HTTP server sample](/img/tunnel-sample-server.png)
