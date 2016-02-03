'use strict';

/* Controllers */

var spaWebControllers = angular.module('spaWebControllers', ['ngFileSaver']);

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

spaWebControllers.controller('ProjectProcessListCtrl', ['$scope', '$routeParams', 'ProjectProcessesService', '$rootScope', 'Upload', '$filter', 'FileSaver', 'Blob',
    function($scope, $routeParams, ProjectProcessesService, $rootScope, Upload, $filter, FileSaver, Blob) {
        $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
        $scope.projectID = $routeParams.projectID;
        
        $rootScope.title = $scope.projectID + ' Process List';

        $scope.uploadProcessFile = function(isValidForm, file){
            $scope.submitted = true;
            if(isValidForm){
                file.upload = Upload.upload({
                    url: SERVER_HOST+':'+SERVER_PORT+'/projects/'+$scope.projectID+'/processes',
                    method: 'POST',
                    data: {
                        processLabel: $scope.processLabel,
                        format: "BPMN2",
                        processFile: file
                    }
                }).then(function(resp) {
                    // file is uploaded successfully
                    console.log('file ' + resp.config.data.processFile.name + ' uploaded. Response: ' + resp.data);
                    $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
                    $('#uploadProcessFileModal').modal('hide');
                    $.showSuccessMessage('The process '+resp.data.id+' was created successfully.');
                    $scope.cleanCreateProcessForm();
                }, function(resp) {
                    // handle error
                    console.error('There was an error while creating a process.');
                    $.showErrorMessage('There was a problem while creating a process.');
                }, function(evt) {
                    // progress notify
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '%');
                });
            }            
        };
        
        $scope.cleanCreateProcessForm = function(){
            $scope.createProcessForm.$setPristine();
            $scope.createProcessForm.$setUntouched();
            $scope.processLabel = '';
            $scope.processFile = '';
            $scope.submitted = false;
        };
        
        $scope.deleteProcess = function(projectID, processID){
            var filteredProcessID = $filter('getProcessID')(processID);
            ProjectProcessesService.deleteProcess({projectID: projectID, processID: filteredProcessID})
                                   .$promise
                                   .then(function(){
                                            $.showSuccessMessage("The process "+processID+" was removed succesfully!");
                                            $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
                                         },
                                         function(){
                                            $.showErrorMessage("There was a problem removing the project.");
                                            $scope.processes = ProjectProcessesService.query({projectID: $routeParams.projectID});
                                         });
        };
        
        $scope.downloadProcess = function(projectID, processID){
            var filteredProcessID = $filter('getProcessID')(processID);
            var a = document.createElement("a");
            document.body.appendChild(a);
            ProjectProcessesService.downloadProcess({projectID: projectID, processID: filteredProcessID})
                                   .$promise
                                   .then(function(data){
                                            FileSaver.saveAs(data.response.blob, data.response.fileName);
                                            console.log('Download successful.');
                                         }, 
                                         function(error){
                                            console.log('There was a problem when attempt to download process file');
                                            console.error(error);
                                         });
        };
    }
]);
