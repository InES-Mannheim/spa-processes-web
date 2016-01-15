'use strict';

/* Controllers */

var spaWebControllers = angular.module('spaWebControllers', []);

var SERVER_HOST = 'http://localhost';
var SERVER_PORT = '8080';

spaWebControllers.controller('ProjectListCtrl', ['$scope', '$rootScope', 'ProjectService',
    function($scope, $rootScope, ProjectService, MessageHandler) {
        var createProjectButton = Ladda.create(document.querySelector('#create-project-button'));
        
        $scope.projects = ProjectService.query();
        $rootScope.title = 'Project List';
        
        $scope.createProject = function(){
            createProjectButton.start();
            var projectCreatedID;
            ProjectService.createProject({projectLabel: $scope.newProjectLabel})
                          .$promise.then(function(project) { // On success
                                                projectCreatedID = project.id;
                                                $.showSuccessMessage("The project "+projectCreatedID+" was created succesfully!");
                                                $scope.projects = ProjectService.query();
                                        },function(){ // on error
                                                $.showErrorMessage("There was a problem creating the project.");
                                                $scope.projects = ProjectService.query();
                                        }
                          );
            $('#createProjectModal').modal('hide');
            $scope.projects = ProjectService.query();
            createProjectButton.stop();
        };
        
        $scope.deleteProject = function(projectID){
            ProjectService.deleteProject({projectID: projectID})
                          .$promise.then(function(project) { // On success
                                            $.showSuccessMessage("The project "+projectID+" was removed succesfully!");
                                            $scope.projects = ProjectService.query();
                                    },function(){ // on error
                                            $.showErrorMessage("There was a problem removing the project.");
                                            $scope.projects = ProjectService.query();
                                    }
                      );            
        }
    }
]);

spaWebControllers.controller('ProjectProcessListCtrl', ['$scope', '$routeParams', 'ProjectProcessesService', '$rootScope', 'Upload',
    function($scope, $routeParams, ProjectProcessesService, $rootScope, Upload) {
        $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
        
        $rootScope.title = $routeParams.projectID + ' Process List';
        
        $scope.uploadProcessFile = function(file){
            file.upload = Upload.upload({
                url: SERVER_HOST+':'+SERVER_PORT+'/projects/'+$routeParams.projectID+'/processes',
                method: 'POST',
                data: {
                    processID: $scope.processID,
                    processLabel: $scope.processLabel,
                    processFile: file
                }
            }).then(function(resp) {
                    // file is uploaded successfully
                    console.log('file ' + resp.config.data.processFile.name + ' uploaded. Response: ' + resp.data);
                    $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
                    $('#uploadProcessFileModal').modal('hide');
                    $.showSuccessMessage('The process '+resp.data.id+' was created successfully.');
                }, function(resp) {
                    // handle error
                    console.error('There was an error while creating a process.');
                    $.showErrorMessage('There was a problem while creating a process.');
                }, function(evt) {
                    // progress notify
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '%');
                });
        };
    }
]);
