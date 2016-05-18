'use strict';

describe('Controller: PartialsSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('siceApp'));

  var PartialsSignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartialsSignupCtrl = $controller('PartialsSignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
