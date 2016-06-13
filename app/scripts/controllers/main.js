'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('MainCtrl', function (DataHouse) {
        var self = this;
        
        function successHandle(response) {
            console.log(response);
            self.response= response;
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);

    });