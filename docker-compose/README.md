# SPA-Processes-WEB Docker Compose

This project contains the Dockerfile which run nginx and the spa-processes-web application.

## Run docker compose using images from Docker hub

The docker compose file `docker-compose.yml` will run the spa-processes-web and spa-rest containers using the images from docker hub.

```Bash
docker-compose -f docker-compose.yml up -d
```

## Run docker compose using local file
To build and run the services (spa-web and spa-rest) using docker compose please use the shell script `run-docker-compose.sh`. Otherwise use the following command.

**NOTE**: In case of you do **not** use the shell script, it is necessary to copy the `app` folder of SPA-Processes-WEB application into this folder before running the command.

```Bash
docker-compose -f docker-compose-local.yml up -d
```
