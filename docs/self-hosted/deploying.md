---
sidebar_position: 1
---

import Link from '@docusaurus/Link';
import {config} from '@site/src/config';

# Deploying

Learn how to deploy a self-hosted ShellHub instance on your own server.

:::tip

If you prefer to use the cloud hosted service of ShellHub instead of
self-hosting your own instance, you can skip this guide by creating
an account in [ShellHub Cloud](https://shellhub.io).

:::

ShellHub is designed using the microservices design pattern, so that multiple small 
and isolated Docker containers make up the server.

In order to eliminate environmental issues of missing, outdated, or mismatching dependencies,
specific operating system issues, or problems during manual installations,
we have created a Docker Compose environment that brings all of these Docker containers up
and connects them together as one server.

## System Requirements

Before continuing, make sure:

* Docker Engine and Docker Compose are installed properly.
* Following ports are open: *TCP 80* and *TCP 22*.

## Downloading the latest stable version {#downloading}

<p>Checkout the latest stable version (<strong>{config.version}</strong>) of ShellHub as follows:</p>

<pre>
git clone -b {config.version} https://github.com/shellhub-io/shellhub.git
</pre>

## Running {#running}

Change to directory where ShellHub is located
(the one that you just cloned with git) and run:

```
make keygen
make start
```

Be patient, it can take up to 10 minutes for the first time.

:::info
Once ShellHub starts, it will always start automatically during the boot process
unless you explicitly stop it.
:::

After starting the containers, run the setup script to complete the installation
and create an initial user:

```
./bin/setup
```

This will generate a signed URL. Access this URL to finalize the setup.

Now you can access ShellHub on [http://localhost](http://localhost).

## Production Deployment

For production deployment, there are a few things to modified to make sure
your deployment is ready for production usage.

:::note
Before going to production, you should first familiarize yourself with the
ShellHub platform and how it works.
:::

### Enable HTTPS

ShellHub provides automatic HTTPS support using *Let's Encrypt* but if
you want to mananually configure HTTPS, this is commonly achieved by
running NGINX with your certificates on your Docker host, service or
load balancers in-front of the running container.

#### Automatic HTTPS with Let's Encrypt

ShellHub provides automatic HTTPS support using *Let's Encrypt*  with reasonable SSL settings, HTTP/2 and WebSockets support out-of-the-box.

Please see [`SHELLHUB_AUTO_SSL`](/self-hosted/configuring/#shellhub_auto_ssl) config option.

#### NGINX SSL terminator

In case you are using NGINX as SSL terminator instead,
make sure to set the `SHELLHUB_HTTP_PORT` to only bind to localhost by
adding the following line to the `docker-compose.override.yml`:

```yaml
version: '3.7'
services:
  gateway:
      ports:
       - "${SHELLHUB_BIND_ADDRESS}:${SHELLHUB_HTTP_PORT}:80"
```

When using NGINX do not forget to allow websocket traffic to be handled properly.
This can be done by adding the following blocks to your NGINX configuration:

```
 location / {
     proxy_pass http://<SHELLHUB_BIND_ADDRESS>:<SHELLHUB_HTTP_PORT>;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection "upgrade";
     proxy_read_timeout 86400;
     proxy_set_header Host $host;
}

location /ws/ {
     proxy_pass http://<SHELLHUB_BIND_ADDRESS>:<SHELLHUB_HTTP_PORT>;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection "upgrade";
     proxy_read_timeout 86400;
}

location /ssh/ {
     proxy_pass http://<SHELLHUB_BIND_ADDRESS>:<SHELLHUB_HTTP_PORT>;
     proxy_http_version 1.1;
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection "upgrade";
     proxy_read_timeout 86400;
 }
```

#### Layer 4 load balancer

When putting a Layer 4 load balancer in-front of ShellHub you need to enable <Link to="https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt">PROXY protocol</Link>
support on it and configure ShellHub to deal with PROXY protocol header by setting `SHELLHUB_PROXY=true` config option in the `docker-compose.override.yml`.

### Setup MongoDB persistent volume

By default, MongoDB persistent files are stored by writting files to disk
on the host system using the Docker's internal volume management.

In a production environment, it is recommended to create a data directory
on the host system filesystem and mount this into the MongoDB container.
This places the persistent files in a known location on the host system
filesystem, and makes it easy for tools and applications on the host system
to access the files.

To achieve this, put the following in the `docker-compose.override.yml`
file inside ShellHub project dir:

```yaml
version: '3.7'
services:
  mongo:
	volumes:
      - /usr/local/mongo/data:/data/db
```

:::info
Make sure `/usr/local/mongo/data` directory exists on the host file system.
:::
