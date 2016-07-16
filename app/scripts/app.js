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
            .when('/cart', {
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
                templateUrl: 'views/cart.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .otherwise({
                redirectTo: '/cart'
            });
    });
    