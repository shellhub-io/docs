# Installing



**Do I need a ShellHub server or can I use ShellHub Cloud at shellhub.io to manage my devices?**

If you decide to use the cloud, you will need to install the agent. The self-hosted installation is for the server only. The ShellHub agent can also be installed manually as shown [here](https://docs.shellhub.io/developers/agent/installing)


**I don’t use the Yocto Project and I work with low-power devices such as Raspberry Pi, Thinker, and others. Is it possible to install the ShellHub agent on them?**  

Yes, in this case, use the [manually-install](https://github.com/shellhub-io/shellhub).

**Do I need a ShellHub server or can I use the ShellHub Cloud in shellhub.io to manage my devices?**

The Open Source version needs to have its own server, but if you want to migrate to the Cloud version, you will have to wait a little longer, as the tool is receiving the necessary features to provide all the comfort and safety for your devices.


### Getting started on Cloud
To get started with the cloud version is very simple: you just need to subscribe. After accessing the dashboard, you’ll find a script to add your devices and it’s done. 
In this case you may use Docker, but don’t worry, ShellHub itself will install it. 

### Getting started on Community

Community is for those who like to do yourself projects.
To start the community version, you need to clone the github repository to a local directory. Then, verify that Docker is installed and inside the cloned directory, run the sequence of commands that can be found in the [documentation](https://github.com/shellhub-io/shellhub). ShellHub containers will go up in development environment.

**How to add the ShellHub on the device?**

There are two forms to include the device in the ShellHub server (Open Source or Cloud): the ShellHub agent is pre-installed on the device or installed with Docker, on the Yocto Project image, or manually.

**In case the ShellHub is pre-installed on the device what else do I need to do?**

Using the ShellHub pre-installed on the device allows it to register with the remote server without manual user intervention. This only needs an internet connection, even behind NAT.




