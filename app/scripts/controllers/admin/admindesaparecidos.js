'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:AdminAdmindesaparecidosCtrl
 * @description
 * # AdminAdmindesaparecidosCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('AdminAdmindesaparecidosCtrl',['$scope','$http', function($scope,$http){

    $scope.init=function(){

      var serviceBase = '/SICE/api/v1/index.php/';

      $http.get(serviceBase + "desaparecidos").success(function(data,message){
        $scope.data = data.data;

        alert("Success" + message);
      }).error(function(data, status, header, config){
        alert("No se pudo registrar correctamente" +
          +"\n" + data
          +"\n" + status
          +"\n" + header
          +"\n" + config);
      });

    };

    $scope.init();

  }]);
