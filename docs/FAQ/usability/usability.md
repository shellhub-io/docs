# Usability

**Is it possible to access devices managed by ShellHub via Windows?**
Yes, you can use any SSH client. On Windows specifically, you can use Putty.


**What is required to provision the ShellHub “community” environment?**
Just a Linux distribution and having Docker installed.

**What is the problem with current SSH causing ShellHub development?**
There are no problems with ssh, the point is that ShellHub acts as an evolution to the standard protocol. It was developed thinking about current technologies such as IOT and Cloud. Adding new features and agility when managing multiple devices, this makes it the ssh of the 21st century.


**Does ShellHub integrate with TrueNAS or FreeBSD based systems?**
ShellHub currently only supports Linux-based operating systems. We have no plans to implement this support in the short term. However, we are open to community input to include this variant as a download option.


**Does ShellHub allow remote access with a graphical interface (like VNC)?**
No, ShellHub focuses on connections to devices that do not have a graphical interface such as embedded devices, servers, etc.


**Is it possible to use shellhub to access machines in cloud providers?**
Yes, any machine with linux distribution and ssh access is allowed to be managed and accessed via ShellHub
