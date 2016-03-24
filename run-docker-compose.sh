#!/bin/bash

rm -rf docker-compose/app

mkdir -p docker-compose/app

# Copy the /app folder which contains the web application into docker-compose folder
cp -R app/* docker-compose/app/

# Running docker compose using the docker-compose-local.yml configuration file, which will
# use the local files instead of the images from docker hub. In the case you want to use the 
# docker hub images of spa-processes-web and spa-processes-rest, please use the the configuration
# file docker-compose.yml which is in docker-compose folder or use the following line instead:
#
#docker-compose -f docker-compose/docker-compose.yml up -d
docker-compose -f docker-compose/docker-compose-local.yml up -d
