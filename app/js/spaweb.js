'use strict';

/* App Module */

var spaWebApp = angular.module('spaWebApp', [
    'ngRoute',
    'spaWebConfiguration',
    'spaWebControllers',
    'spaWebServices',
    'spaWebFilters',
    'ngFileUpload',
    'ngFileSaver'
]);

spaWebApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/projects', {
                templateUrl: 'partials/project-list.html',
                controller: 'ProjectListCtrl'
            }).
            when('/project/:projectID/processes', {
                templateUrl: 'partials/process-list.html',
                controller: 'ProjectProcessListCtrl'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }
]);
