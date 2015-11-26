'use strict';

/* App Module */

var spaWebApp = angular.module('spaWebApp', [
    'ngRoute',
    'spaWebControllers',
    'spaWebServices',
    'ngFileUpload'
]);

spaWebApp.value('SERVER_HOST', 'http://localhost');
spaWebApp.value('SERVER_PORT', '8080');

spaWebApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/projects', {
                templateUrl: 'partials/project-list.html',
                controller: 'ProjectListCtrl'
            }).
            when('/project/:projectID', {
                templateUrl: 'partials/process-list.html',
                controller: 'ProjectProcessListCtrl'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }
]);