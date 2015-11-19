'use strict';

/* jasmine specs for controllers go here */
describe('SPA-WEB controllers', function() {

  describe('ProjectListCtrl', function(){

    beforeEach(module('spaWebApp'));

    it('should create "projects" model with 5 projects', inject(function($controller) {
      var scope = {},
          ctrl = $controller('ProjectListCtrl', {$scope:scope});

      expect(scope.projects.length).toBe(5);
    }));

  });
});
