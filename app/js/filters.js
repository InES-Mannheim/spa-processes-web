'use strict';

angular.module('spaWebFilters', []).filter('getProjectID', function() {
  return function(value) {
        if(angular.isString(value)) {
            return value.substring(39);
        }
    };
});