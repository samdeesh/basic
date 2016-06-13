'use strict';

/**
 * @ngdoc overview
 * @name machineAppApp
 * @description
 * # machineAppApp
 *
 * Main module of the application.
 */
angular
    .module('machineAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }).run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
        $rootScope.$on('$routeChangeStart', function (event) {
            if (!Auth.isLoggedIn()) {
                $location.path('/login');
                return;
            }
        });
    }]);