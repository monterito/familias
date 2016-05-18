'use strict';

describe('Controller: AdminAdmindesaparecidosCtrl', function () {

  // load the controller's module
  beforeEach(module('siceApp'));

  var AdminAdmindesaparecidosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminAdmindesaparecidosCtrl = $controller('AdminAdmindesaparecidosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
