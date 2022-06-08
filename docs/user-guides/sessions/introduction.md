# Audit Logging

Every time a SSH connection is made to ShellHub a session is created and stored on the server
for audit purposes[^1].

Following information is stored on the server:

| Data          | Description                             |
| ------------- | --------------------------------------- |
| Device        | Incoming connection's target device     |
| Username      | Incoming connection's target username   |
| IP Address    | Incoming connection's remote IP address |
| Auth Status   | Whether the connection was authorized   |
| Last Activity | Session's last activity timestamp       |

[^1]:
	In [ShellHub Cloud](https://cloud.shellhub.io) and Enterprise Edition,
	interactive SSH sessions are recorded, which includes all of the user
	activity that occurs during the session so that it can later be
	played back.
