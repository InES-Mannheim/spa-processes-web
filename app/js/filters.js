'use strict';

var spaWebFilters = angular.module('spaWebFilters', []);

spaWebFilters.filter('getProjectID', function() {
  return function(value) {
        if(angular.isString(value)) {
            return value.substring(39);
        }
    };
});

spaWebFilters.filter('getProcessID', function() {
  return function(value) {
        if(angular.isString(value)) {
            return value.substring(42);
        }
    };
});