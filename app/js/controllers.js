'use strict';

/* Controllers */

var spaWebControllers = angular.module('spaWebControllers', []);

var SERVER_HOST = 'http://localhost';
var SERVER_PORT = '8080';

spaWebControllers.controller('ProjectListCtrl', ['$scope', '$rootScope', 'ProjectService',
    function($scope, $rootScope, ProjectService) {
        var createProjectButton = Ladda.create(document.querySelector('#create-project-button'));
        
        $scope.projects = ProjectService.query();
        $rootScope.title = 'Project List';
        
        $scope.createProject = function(){
            createProjectButton.start();
            var projectCreatedID;
            ProjectService.save()
                          .$promise.then(function(project) { // On success
                                                projectCreatedID = project.id;
                                                $.bootstrapGrowl("The project "+projectCreatedID+" was created succesfully!", {
                                                    type: "success", //danger, info, success
                                                    align: "right",
                                                    width: "auto",
                                                    offset: {from: 'top', amount: 13}});
                                        },function(){ // on error
                                                $.bootstrapGrowl("There was a problem creating the project.", {
                                                    type: "danger", //danger, info, success
                                                    align: "right",
                                                    width: "auto",
                                                    offset: {from: 'top', amount: 13}});
                                        }
                          );
            $scope.projects = ProjectService.query();
            createProjectButton.stop();
        };
    }
]);

spaWebControllers.controller('ProjectProcessListCtrl', ['$scope', '$routeParams', 'ProjectService', '$rootScope', 'Upload',
    function($scope, $routeParams, ProjectService, $rootScope, Upload) {
        $scope.processes = ProjectService.query({projectID: $routeParams.projectID});
        
        $rootScope.title = $routeParams.projectID + ' Process List';
        
        $scope.uploadProcessFile = function(file){
            file.upload = Upload.upload({
                url: SERVER_HOST+':'+SERVER_PORT+'/projects/'+$routeParams.projectID,
                method: 'POST',
                data: {
                    processID: $scope.processID,
                    processLabel: $scope.processLabel,
                    processFile: file
                }
            }).then(function(resp) {
                    // file is uploaded successfully
                    console.log('file ' + resp.config.data.processFile.name + ' uploaded. Response: ' + resp.data);
                    $scope.processes = ProjectService.query({projectID: $routeParams.projectID});
                    $('#uploadProcessFileModal').modal('hide');
                    $.bootstrapGrowl('The process '+resp.data.id+' was created successfully.', {
                        type: 'success', //danger, info, success
                        align: 'right',
                        width: 'auto',
                        offset: {from: 'top', amount: 13}});
                }, function(resp) {
                    // handle error
                    console.error('There was an error while creating a process.');
                    $.bootstrapGrowl('There was a problem while creating a process.', {
                        type: 'danger', //danger, info, success
                        align: 'right',
                        width: 'auto',
                        offset: {from: 'top', amount: 13}});
                }, function(evt) {
                    // progress notify
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '%');
                });
        };
    }
]);
