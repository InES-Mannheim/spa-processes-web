#!/bin/bash

rm -rf docker-compose/app

mkdir -p docker-compose/app

cp -R app/* docker-compose/app/

docker-compose -f docker-compose/docker-compose.yml up -d
