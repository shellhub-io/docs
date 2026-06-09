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

Here is a list of solutions to some frequently encountered issues.
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

### SSH session disconnects immediately in a Proxmox unprivileged LXC

:::danger ERROR MESSAGE

```text
ssh-1 | ... "error":"failed to read the message from socket ... use of closed network connection" ...
```

On the agent side you may also see:

```text
inappropriate ioctl for device
nsenter: reassociate to namespace 'ns/time' failed: Operation not permitted
```

:::

If the SSH connection drops the moment authentication completes — and the agent
runs inside an **unprivileged LXC container on Proxmox VE** — the agent can't
allocate a pseudo-terminal (PTY) for the interactive shell. Unprivileged LXC maps
the container's root to an unprivileged host user, which restricts both PTY
allocation (`/dev/ptmx`, `devpts`) and joining the host's namespaces. There are two
cases, depending on how you run the agent.

:::tip

Not sure which agent you're running? If you installed with the one-line
`install.sh` script you're on the **standalone** agent — start with the standalone
steps below. The Docker agent is the one you deploy as a container with
`--pid=host`.

:::

#### Standalone (native) agent

The native agent only needs a working PTY inside its own container. Most of the
time the blocker is a leftover `devpts` or `/dev/shm` entry in the container's
`/etc/fstab` (common in older container templates), which breaks `/dev/pts` on
modern LXC.

1. Inside the container, remove any stale `devpts` / `tmpfs /dev/shm` lines from
   `/etc/fstab`.
2. Confirm `/dev/ptmx` is openable — `ls -l /dev/ptmx` should not show `000`
   permissions, and `/dev/pts` should be mounted with `gid=5,mode=620`.
3. Restart the container and reconnect.

If sessions still report `PTY allocation request failed`, raise the PTY limit in the
container config at `/etc/pve/lxc/<id>.conf` on the Proxmox host:

```ini
lxc.pty.max: 1024
lxc.tty.max: 4
```

:::note

The time namespace only affects `CLOCK_MONOTONIC`/uptime — not wall-clock time — so
the `nsenter: ... ns/time ... Operation not permitted` line on its own does not
break a standalone shell. It only matters for the Docker agent below.

:::

#### Docker agent

The Docker agent enters the host's namespaces (via `nsenter` against PID 1) so the
shell lands on the host rather than inside the agent container. An unprivileged LXC
can't grant the capabilities this needs — joining the host's **time** namespace
fails with `Operation not permitted`, and Docker-in-LXC also requires extra
features to run at all.

On the Proxmox host, edit `/etc/pve/lxc/<id>.conf`:

```ini
features: nesting=1,keyctl=1
```

`nesting=1` exposes the procfs/sysfs that Docker needs; `keyctl=1` allows the
`keyctl()` syscall used by containerd. These are required for **any** Docker
workload in an unprivileged container.

That gets Docker running, but entering the host's namespaces from an unprivileged
container hits a hard capability ceiling that no `features` flag lifts. If you need
the Docker agent, run it in a **privileged** LXC container or a **VM** instead:

```shell
# Make the container privileged (Proxmox host)
pct set <id> --unprivileged 0
```

:::caution

A privileged LXC container is not a security boundary — Proxmox treats it as
roughly equivalent to host access. For untrusted workloads, prefer a VM, where the
agent (standalone or Docker) works without any of these tweaks.

:::
