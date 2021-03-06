'use strict';

/* Services */

var spaWebServices = angular.module('spaWebServices', ['ngResource', 'ngFileUpload']);

spaWebServices.factory('ProjectService', ['$resource', 'SERVER_ADDRESS',
    function($resource, SERVER_ADDRESS){
        return $resource(SERVER_ADDRESS+'/projects/:projectID', {}, {
            query: {method: 'GET', isArray:true},
            createProject: {method: 'POST',
                            params: {projectLabel: '@projectLabel'}},
            deleteProject: {method: 'DELETE',
                            params: {projectID: '@projectID'}}
        });
    }
]);

spaWebServices.factory('ProjectProcessesService', ['$resource', 'SERVER_ADDRESS',
    function($resource, SERVER_ADDRESS){
        return $resource(SERVER_ADDRESS+'/projects/:projectID/processes/:processID', {}, {
            query: {method:'GET'},
            deleteProcess: {method: 'DELETE',
                            params: {projectID: '@projectID', processID: '@processID'}},
            downloadProcess: {method: 'GET',
                              responseType: 'arraybuffer',
                              params: {projectID: '@projectID', processID: '@processID'},
                              transformResponse: (data, headersGetter) => {
                                  var processFile = null;
                                  if (data) {
                                      processFile = new Blob([data], {type: 'application/octet-stream'});
                                  }
                                  var fileName = getFileNameFromHeader(headersGetter('content-disposition'));
                                  var result = {
                                      blob: processFile,
                                      fileName: fileName
                                  };
                                  return {
                                      response: result
                                  };
                              }}
        });
    }
]);

function getFileNameFromHeader(header){
      if (!header) return null;
      var result = header.split(";")[1].trim().split("=")[1];
      return result.replace(/"/g, '-');
}
