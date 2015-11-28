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

## Working with the code
### Install Node.js
If you want to run the preconfigured local web-server and the test tools then you will also need Node.js v0.12.7.

You can download a Node.js installer for your operating system from http://nodejs.org/download/

We recommend to install [Node Version Manager (nvm)](https://github.com/creationix/nvm), so you can install and run different version of Node.

### Install Tools
Once you installed Node in your computer, you are able to install the tools to start a local web-server and the test tools. To do you need to run the following command from the **folder of the project**.

    # npm install

The configuration file that Node will take is ```
project.json
```. The tools will be installed into the folder ```node_modules```.

### Run development web-server
Once you installed the tools, you can run the local web-server. To do so you need to run the following command:

    # npm start

This command will run a local web-server with port 80.

    http://localhost/app/

### Run Unit Tests
In order to run the unit tests, you need to run the following command:

    # npm test

All the unit tests are under the folder ```test/unit``` and the configuration file is ```test/karma.conf.js```.

### Run end-to-end tests
In order to run the end-to-end tests, you need to run the following command:

    # npm run protractor

The end-to-end tests are under the folder ```test/e2e``` and the configuration file is ```test/protractor-conf.js```.
