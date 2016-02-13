# SPA-WEB
## Technologies
SPA-WEB has been developed using the following technology stack:

- HTML5
- [AngularJS](https://angularjs.org/)
- [Twitter bootstrap](http://getbootstrap.com/)
- [jQuery](https://jquery.com/)
- [Jasmin](https://github.com/karma-runner/karma-jasmine) (unit test framework)
- [Karma](http://karma-runner.github.io/) (test runner)
- [Protractor](https://angular.github.io/protractor/#/) (end-to-end tests)

## Docker
To build and run the Docker container with SPA-WEB, just run the shell script `run-docker-container.sh`. This script will copy the `app` folder into `docker` folder. Then it will build the image using the Doockerfile. Finally it will run the container exposing the port 80.

```Bash
./run-docker-container.sh
```
## REST Server Configuration
The configuration of the server end-point such as host and port, it is into the file `app/js/configuration.js`
