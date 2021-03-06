'use strict';

/**
 * @ngdoc service
 * @name siceApp.data
 * @description
 * # data
 * Factory in the siceApp.
 */
angular.module('siceApp')
  .factory('Data',['$http',
    function ($http) { // This service connects to our REST API

        var serviceBase = 'api/v1/index.php/';
        //var serviceBase = 'api/v1/index.php/';

        var obj = {};
        obj.toast = function (data) {
           // toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
        }
        obj.get = function (q) {
            return $http.get(serviceBase + q).then(function (results) {
                return results.data;
            });
        };
        obj.post = function (q, object) {
            return $http.post(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.put = function (q, object) {
            return $http.put(serviceBase + q, object).then(function (results) {
                return results.data;
            });
        };
        obj.delete = function (q) {
            return $http.delete(serviceBase + q).then(function (results) {
                return results.data;
            });
        };

        return obj;
}]);
