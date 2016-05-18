'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:PartialsDashboardCtrl
 * @description
 * # PartialsDashboardCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('dashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
