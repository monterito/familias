'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:LocalizadosCtrl
 * @description
 * # LocalizadosCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('LocalizadosCtrl',['$scope','$http', function($scope,$http){

    $scope.init=function(){
      var serviceBase = '../api/v1/index.php/';
      $http.get(serviceBase + "desaparecidos/2").success(function(data,message){
        $scope.data = data.data;
      }).error(function(data, status, header, config){

        console.log("No se pudo registrar correctamente" +" " + data +" " + status +" " + header +"" + config);
      });

    };
    $scope.init();

    $scope.editarDesaparecido = function(desaparecido){
      $scope.desaparecido = desaparecido;
      $('#modalEditDesaparecido').modal('show');
    };

    $scope.actualizarALocalizado = function(){

      $http.post("http://localhost:85/SICE/api/v1/index.php/" + "actualizarDesaparecido" ,$scope.desaparecido).success(function(data){
        alert("Se ha actualizado el desaparecido ha localizado " + data.nombre);
        $('#modalEditDesaparecido').modal('hide');
        $scope.init();

      }).error(function(data, status, header, config){
        alert("No se pudo registrar correctamente" +" " + data +" " + status +" " + header +"" + config);
      });



    };
  }]);
