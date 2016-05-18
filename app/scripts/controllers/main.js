'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
