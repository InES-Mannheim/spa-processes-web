describe('filter', function() {
 
  beforeEach(module('spaWebFilters'));


  describe('getProjectID', function() {

    it('should return the project ID of the URL', inject(function(getProjectIDFilter) {
        expect(getProjectIDFilter('http://www.uni-mannheim.de/spa/Project/1DrqAm4')).toBe('1DrqAm4');
    }));
  });
});