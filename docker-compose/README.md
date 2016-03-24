# SPA-WEB Docker Compose

This project contains the Dockerfile which run nginx and the spa-processes-web application.

## Run with docker compose

To build and run the services (spa-web and spa-rest) using docker compose please use the shell script `run-docker-compose.sh`. Otherwise use the following command.

**NOTE**: If you will not use the shell script, it is necessary to copy the `app` folder of SPA-WEB application into this folder.

```Bash
docker-compose up -d
```
