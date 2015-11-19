'use strict';

/* Controllers */

var phonecatApp = angular.module('spaWebApp', []);

phonecatApp.controller('ProjectListCtrl', function($scope) {
  $scope.projects = [
    {
        'id': 'Project A',
        'creationDate': '01/01/2015',
        'processesNumber':'3',
        'lastModificationDate':'02/01/2015'
    },
    {
        'id': 'Project B',
        'creationDate': '01/01/2015',
        'processesNumber':'2',
        'lastModificationDate':'02/01/2015'
    },
    {
        'id': 'Project C',
        'creationDate': '01/06/2015',
        'processesNumber':'1',
        'lastModificationDate':'02/07/2015'
    },
    {
        'id': 'Project D',
        'creationDate': '01/01/2015',
        'processesNumber':'9',
        'lastModificationDate':'08/01/2015'
    },
    {
        'id': 'Project E',
        'creationDate': '01/01/2015',
        'processesNumber':'1',
        'lastModificationDate':'02/01/2015'
    }
  ];
});
