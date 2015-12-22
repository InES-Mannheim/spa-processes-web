'use strict';

/* Services */

var spaWebServices = angular.module('spaWebServices', ['ngResource', 'ngFileUpload']);

var SERVER_HOST = 'http://localhost';
var SERVER_PORT = '8080';

spaWebServices.factory('ProjectService', ['$resource',
    function($resource){
        return $resource(SERVER_HOST+':'+SERVER_PORT+'/projects/:projectID', {}, {
            query: {method: 'GET', isArray:true},
            createProject: {method: 'POST', params: {projectId: '@projectId', projectLabel: '@projectLabel'}},
            deleteProject: {method: 'DELETE', params: {projectID: '@projectID'}}
        });
    }
]);

spaWebServices.factory('ProjectProcessesService', ['$resource',
    function($resource){
        return $resource(SERVER_HOST+':'+SERVER_PORT+'/projects/:projectID/processes', {}, {
            query: {method:'GET', isArray:true}
        });
    }
]);