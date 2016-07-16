'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('MainCtrl', function (DataHouse, $uibModal) {
        var self = this;

        self.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return self.selectedItem;
                    }
                }
            });
        }

        function successHandle(response) {
            console.log(response);
            self.response = response;
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);

    });