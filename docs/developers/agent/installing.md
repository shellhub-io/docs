---
sidebar_position: 1
---

import {config} from '@site/src/config';

# Installation

:::info

This is an advanced reference guide of alternate install methods for
developers and integrators. If you are end-user
see [Adding a device](/user-guides/devices/adding).

:::

We offer different ways to install the ShellHub Agent.
The easiest way is with our [automatic one-line installation script](#automatic-one-line-installation-script),
which works with all major Linux distributions but it requires that you have Docker installed and properly set up.

If you want to install ShellHub Agent without Docker, currently we have two other options:

1. [Installing from source code](#installing-from-source-code)
2. [Integrate into an existing Yocto Project image](#integrate-into-an-existing-yocto-project-image)

## Automatic one-line installation script

:::note Prerequisites

Docker installed and properly set up on device is required.
Follow the [Docker Install Instructions](http://docs.docker.com/installation/) for your distro/platform.
You should always use the latest docker version. The minimum supported Docker version is `18.06`.

:::

To install ShellHub Agent run the following command:

```
sh <(curl -Ss http://<SERVER-ADDRESS>/install.sh?tenant_id=<TENANT-ID>)
```

Where:

* `<SERVER-ADDRESS>`: is the ShellHub instance server address
* `<TENANT-ID>`: is the Tenant ID of your account

### Optional URL parameters

* `keepalive_interval`: Specifies in seconds the keep alive message interval
* `preferred_hostname`: The preferred hostname to use rather than generated value from ethernet MAC address

## Installing from source code

:::note Prerequisites

ShellHub Agent requires Go 1.18 to compile, please refer to the [official documentation](https://golang.org/doc/install) for how to install Go in your system.

:::

<p>First checkout the latest stable version (<strong>{config.version}</strong>) of ShellHub as follows:</p>

<pre>
git clone -b {config.version} https://github.com/shellhub-io/shellhub.git shellhub
</pre>

Next, we need to execute the following command to build ShellHub Agent:

<pre>
cd shellhub/agent
</pre>
<pre>
go build -ldflags "-X main.AgentVersion={ config.version }"
</pre>

Use `file ./agent` to check if executable was built.

## Integrate into an existing Yocto Project image

To use ShellHub in a Yocto Project image is necessary to add [meta-shellhub](https://github.com/shellhub-io/meta-shellhub)
layer in your project.

```
git clone git@github.com:shellhub-io/meta-shellhub.git
```

Add the settings below in your local.conf file:

```
CORE_IMAGE_EXTRA_INSTALL += "packagegroup-shellhub-runtime"
SHELLHUB_TENANT_ID = "<your tenant id here>"
```

Where:

* `CORE_IMAGE_EXTRA_INSTALL`: this variable will install the ShellHub agent in your image.
* `SHELLHUB_TENANT_ID`: needs to be filled with your tenant id.

Remember to add the other configurations according to your needs. After this, just generate the desired image.

### Optional variables

* `SHELLHUB_SERVER_ADDRESS`: ShellHub instance server addresss (default: https://cloud.shellhub.io)

### Supported Yocto releases

* [Dunfell](https://github.com/shellhub-io/meta-shellhub/tree/master)
* [Zeus](https://github.com/shellhub-io/meta-shellhub/tree/zeus)
* [Sumo](https://github.com/shellhub-io/meta-shellhub/tree/sumo)
* [Rocko](https://github.com/shellhub-io/meta-shellhub/tree/rocko)
