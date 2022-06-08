# Connecting to a device

You can establish an SSH connection to a device from the Devices page.

:::tip
For more information about other connection methods, see [Alternate connection method](#alternate-connection-method) section below.
:::

From Devices page, choose the device you wish to connect to and click on **Connect** button.

![](/img/device-connect.png)

A dialog will pop up prompting you for the username and password of an existing user on the device's operating system.
After providing credentials, click on Connect button.

## Alternate connection method

ShellHub is compatible with any SSH client that supports a minimum of SSH version 2.0.

Regardless of the connection method you choose, you need to know its SSHID address.
From Devices page, choose the device you want to connect to and copy the device's SSHID address.
In the next step, make sure to replace `<USER>` with the existing user on the
device's operating system and `<SSHID>` with the SSHID copied before.

### Command line SSH Client

Run the following command on your terminal:

```
ssh <USER>@<SSHID>
```

### Desktop and mobile GUI SSH Client

#### PuTTY instructions

Open Putty and fill in with the following information:

| Field                     | Value              |
| ------------------------- | ------------------ |
| Host Name (or IP address) | `<USER>@<SSHID>`   |
| Port                      | 22                 |
| Connection type           | SSH                |

#### JuiceSSH instructions

Open JuiceSSH, click on Quick Connect button and enter following address:

```
<USER>@<SSHID>
```
