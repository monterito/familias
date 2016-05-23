'use strict';

/**
 * @ngdoc overview
 * @name siceApp
 * @description
 * # siceApp
 *
 * Main module of the application.
 */
angular
  .module('siceApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/partials/signup.html',
        controller: 'loginCtrl'
      })
      .when('/login', {
        templateUrl: 'views/partials/login.html',
        controller: 'loginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/partials/dashboard.html',
        controller: 'loginCtrl'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })
      .when('/adminDesaparecidos', {
        templateUrl: 'views/admin/admindesaparecidos.html',
        controller: 'AdminAdmindesaparecidosCtrl'
      })
      .when('/altaDesaparecido', {
        templateUrl: 'views/admin/altadesaparecido.html',
        controller: 'AdminAltadesaparecidoCtrl'
      })
      .when('/localizados', {
        templateUrl: 'views/localizados.html',
        controller: 'LocalizadosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope, $location, Data) {
        $rootScope.$on('$routeChangeStart', function (event, next) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl === '/signup' || nextUrl === '/login' || nextUrl ==='/contacto'
                      || nextUrl ==='/inicio' || nextUrl ==='/about') {

                    } else {
                        $location.path('/login');
                    }
                }
            });
        });
    }).config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
});;
