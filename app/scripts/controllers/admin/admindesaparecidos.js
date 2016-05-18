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
      var serviceBase = '../api/v1/index.php/';
      $http.get(serviceBase + "desaparecidos").success(function(data,message){
        $scope.data = data.data;
      }).error(function(data, status, header, config){
        alert("No se pudo registrar correctamente" +"\n" + data +"\n" + status +"\n" + header +"\n" + config);
      });

    };
    $scope.init();

      $scope.editarDesaparecido = function(desaparecido){
          $scope.desaparecido = desaparecido;
          $('#modalEditDesaparecido').modal('show');
      };

      $scope.actualizarALocalizado = function(){
          $scope.desaparecido;
          alert("Se ha actualizado el desaparecido ha localizado " + $scope.desaparecido.nombre);
          $('#modalEditDesaparecido').modal('hide');
      }

  }]);
