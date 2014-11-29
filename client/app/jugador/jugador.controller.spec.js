'use strict';

describe('Controller: JugadorCtrl', function () {

  // load the controller's module
  beforeEach(module('nodebotsApp'));

  var JugadorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JugadorCtrl = $controller('JugadorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
