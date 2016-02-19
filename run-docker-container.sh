#!/bin/bash
mkdir docker/app

cp -R app/* docker/app/

docker build -t spa-web docker/

docker run --name=spa-web -p 80:80 -d spa-web
