'use strict';

/* REST API Server Configuration
*
* Replace <SERVER_ADDRESS> with the URL where the SPA-REST Api is. Some examples:
* - http://www.uni-mannheim.de/spa-rest
* - http://192.168.123.123:8080/spa-rest
*/
var spaWebConfiguration = angular.module('spaWebConfiguration', [])
                                 .constant('SERVER_ADDRESS','/api');
