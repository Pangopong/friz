'use strict';

describe('Controller: OurCtrl', function () {

  // load the controller's module
  beforeEach(module('itsApp'));

  var OurCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OurCtrl = $controller('OurCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OurCtrl.awesomeThings.length).toBe(3);
  });
});
