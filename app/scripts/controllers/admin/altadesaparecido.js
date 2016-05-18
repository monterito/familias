'use strict';

/**
 * @ngdoc function
 * @name siceApp.controller:AdminAltadesaparecidoCtrl
 * @description
 * # AdminAltadesaparecidoCtrl
 * Controller of the siceApp
 */
angular.module('siceApp')
  .controller('AdminAltadesaparecidoCtrl',['$scope', 'fileUpload', function($scope, fileUpload){


    $scope.uploadFile = function(){
      var file = $scope.myFile;
      console.log('file is ' );
      console.dir(file);
      console.log($scope.desaparecido);

      var uploadUrl = "../api/v1/save_form.php";
      $scope.filename='undefined.jpg';
      fileUpload.uploadFileToUrl(file, uploadUrl, $scope.desaparecido,$scope);
    };

  }]).directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function(){
          scope.$apply(function(){
            modelSetter(scope, element[0].files[0]);
            scope.fileNameRoot =  element[0].files[0].name;
          });
        });
      }
    };
  }]).service('fileUpload', ['$http','$location', function ($http,$location) {
    this.uploadFileToUrl = function(file, uploadUrl, data , $scope){
      var fd = new FormData();
      fd.append('file', file);
      fd.append('nombre', data.nombre);
      fd.append('primerApellido', data.primerApellido);
      fd.append('segundoApellido', data.segundoApellido);

      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined,'Process-Data': false}
      })
        .success(function(){
          $scope.filename = file.name;
          console.log("Success");
          $location.path("/adminDesaparecidos");

          bootbox.alert("Se ha guardado correctamente", function() {
          });

        })
        .error(function(){
          console.log("Success");
          alert("Ocurrio un error al guardar la información")
        });
    }
  }]);
