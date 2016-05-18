'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
