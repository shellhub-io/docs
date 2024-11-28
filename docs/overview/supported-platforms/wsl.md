# WSL

ShellHub supports installation on WSL (Windows Subsystem for Linux),
making it easy to manage your devices directly from a Linux environment running on Windows.
With ShellHub on WSL, you can seamlessly integrate device management into your cross-platform workflows.

## Prerequisites

* **WSL Installed**: Ensure WSL is installed and configured on your Windows system. Refer to [Microsoft's WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/) for guidance.
* **Active Linux Distribution**: A Linux distribution (e.g., Ubuntu, Debian) must be active in your WSL environment.
* **Systemd Enabled**: The systemd service must be enabled in your WSL setup. For instructions, visit [Enable Systemd on WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#systemd-support).
* **Networking Mode Set to Mirrored**: WSL networking must be configured to use mirrored mode. Refer to [Mirrored Mode Networking on WSL](https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking) for details.
* **Access to ShellHub Platform**: Log in to the ShellHub platform to generate the installation command.

## Installation

The installation for WSL is streamlined using our one-line install script.
This script is generated directly within the ShellHub platform.

### How to Install

1) Access the ShellHub Platform:

* Log in to your ShellHub dashboard.
* Navigate to the _Devices_ section.
* Click _Add Device_ to generate the installation command.

2) Copy the Generated Command:

The command will look similar to this:

```
curl -sSf https://cloud.shellhub.io/install.sh | TENANT_ID=00000000-0000-4000-0000-000000000000 SERVER_ADDRESS=https://cloud.shellhub.io sh
```

3) Run the Command in WSL:

* Open your WSL terminal.
* Paste and run the generated command.
