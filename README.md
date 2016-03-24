# SPA-WEB
## Technologies
SPA-WEB has been developed using the following technology stack:

- HTML5
- [AngularJS](https://angularjs.org/)
- [Twitter bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)

## Docker
To build and run the Docker container with SPA-WEB, just run the shell script `run-docker-container.sh`. This script will copy the `app` folder into `docker` folder. Then it will build the image using the Doockerfile. Finally it will run the container exposing the port 80.

```Bash
./run-docker-container.sh
```

## Docker Compose
To build and run spa-web and spa-rest using docker compose, first it is necessary to [build](https://gitlab.dws.informatik.uni-mannheim.de/smartster/spa-rest/blob/develop/README.md) the spa-rest docker image. Once the image is created, you just need to execute the shell script `run-docker-compose.sh`.

```Bash
./run-docker-compose.sh
```

## REST Server Configuration
The configuration of the server end-point such as host and port, it is into the file `app/js/configuration.js`

```javascript
var spaWebConfiguration = angular.module('spaWebConfiguration', [])
                                 .constant('SERVER_ADDRESS','<SERVER_ADDRESS>');
```
