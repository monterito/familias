'use strict';

describe('Controller: PartialsLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('siceApp'));

  var PartialsLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PartialsLoginCtrl = $controller('PartialsLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
