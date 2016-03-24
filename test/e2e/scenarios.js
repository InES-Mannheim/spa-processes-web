'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('SPA-WEB App', function() {

  describe('Project list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the project list as a user types into the search box', function() {

      var phoneList = element.all(by.repeater('project in projects'));
      var query = element(by.model('query'));

      expect(phoneList.count()).toBe(5);

      query.sendKeys('Project A');
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('Project Z');
      expect(phoneList.count()).toBe(0);
    });
  });
});
