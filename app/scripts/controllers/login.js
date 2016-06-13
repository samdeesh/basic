'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('LoginCtrl', function ($scope, Auth, User, $location) {
        $scope.loginUser = function () {
            var user = User.new($scope.uname, $scope.upass);
            if(Auth.authenticate(user)){
                $location.path("/home");
            }; 
        };
    });