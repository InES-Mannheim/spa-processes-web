'use strict';

/* REST API Server Configuration */
var spaWebConfiguration = angular.module('spaWebConfiguration', [])
                                 .constant('SERVER_HOST','http://192.168.99.100')
                                 .constant('SERVER_PORT','8080');
