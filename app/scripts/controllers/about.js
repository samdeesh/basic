'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('AboutCtrl', function (DataHouse) {
        var self = this;

        function successHandle(response) {
            console.log(response);
            self.response = response;
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.putData({
            "id": 1,
            "userId": 123,
            "title": "Some Title",
            "body": "Some Body text"
        }).then(successHandle, errorHandle);
    });