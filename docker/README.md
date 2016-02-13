# SPA-WEB Docker

This project contains the Dockerfile which run nginx and the spa-web application deployed.

** NOTE: Before compiling the Dockerfile it is necessary to copy the `app` folder of SPA-WEB application into this folder.**

## Build image

Run the following command to build the docker image:

```Bash
docker build -t spa-web-docker .
```

## Run container
Once the image is created, the following command is for run it.

```Bash
docker run -p 8080:80 -d spa-web-docker
```
