---
sidebar_position: 5
---

import Link from '@docusaurus/Link';

# Troubleshooting

In case you're experiencing problems with using ShellHub Self-Hosted,
you can troubleshoot and trace possible errors by using the methods given below.

:::tip

ShellHub is made of several docker containers,
each one being a potential cause for failure.
Having an even basic overview of ShellHub's technical architecture
can help you understand what is going on.
You can refer to the technical architecture for that.
:::

## View Docker containers log

Viewing the Docker containers log is the very first approach when troubleshooting issues.
The critical information in the log can quickly help you find the root causes of most issues.

To view all logs from all ShellHub containers, run the following command:

```
./bin/docker-compose logs
```

You can also see the logs of each service by running:

```
docker-compose logs <SERVICE>
```

Refer to the official `docker-compose logs` command <Link to="https://docs.docker.com/engine/reference/commandline/compose_logs/">documentation</Link>.


## Frequently Encountered Issues

IHere is a list of solutions to some frequently encountered issues.
If this page doesn't help you solve your problem,
try doing a search on [GitHub Issues](https://github.com/shellhub-io/shellhub/issues).

### Cannot start service ssh

:::danger ERROR MESSAGE

Cannot start service ssh: driver failed programming external connectivity on endpoint shellhub_ssh_1: Error starting userland proxy: listen tcp 0.0.0.0:22: bind: address already in use

:::

If you have getting the error message above when starting up the server using `docker-compose` you have two options to solve this issue:

* Change the OpenSSH daemon port from 22 to whatever on your host machine;
* Change the default SSH gateway port of ShellHub by setting `SHELLHUB_SSH_PORT` variable inside the configuration file.

### Cannot start gateway

:::danger ERROR MESSAGE

Cannot start service gateway: driver failed programming external connectivity on endpoint shellhub_gateway_1: Error starting userland proxy: listen tcp 0.0.0.0:80: listen: address already in use

:::

If you get the error message above, then check you have no other running process using the port 80 with the following command:

```
sudo lsof -i -P -n | grep :80
```

If so, kill the service, for example, if `apache2` is running:

```
sudo systemctl stop apache2
```

And disable it from autostart:

```
sudo update-rc.d apache2 disable
```
