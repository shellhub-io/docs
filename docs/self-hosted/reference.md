# Reference

## Docker Compose wrapper

In order to extend some functionality of Docker Compose,
we provide `bin/docker-compose` wrapper script that should
be used in favour of the `docker-compose` binary from your `$PATH`. 

## Override files

The override files must be used in order to avoid conflict with
upstream code when updating to a newer version.

* `.env.override`: Use this file to configure your instance.

* `docker-compose.override.yml`: Use this file to override different
aspects of your Docker Compose deployment.

## Makefile commands

* `make start`: Start instance
* `make stop`: Stop a running instance
* `make restart`: Restart instance
* `make keygen`: Generate required private keys
