'use strict';

/**
 * @ngdoc function
 * @name machineAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the machineAppApp
 */
angular.module('machineAppApp')
    .controller('MainCtrl', function (DataHouse, $uibModal, $scope) {
        var self = this;
        self.setTotal = function () {
            if (self.coupon == "JF25" && self.discount == 25) {
                self.discAmt = self.subTotal * 0.25;
                self.total = self.subTotal - self.discAmt;
            } else if (self.coupon == "JF10" && self.discount == 10) {
                self.discAmt = self.subTotal * 0.10;
                self.total = self.subTotal - self.discAmt;
            } else if (self.coupon == "JF05" && self.discount == 5) {
                self.discAmt = self.subTotal * 0.05;
                self.total = self.subTotal - self.discAmt;
            } else {
                self.discAmt = 0;
                self.total = self.subTotal;
            }
        }
        self.setSubTotal = function () {
            self.subTotal = 0;
            var itemCount = 0;
            self.response.data.productsInCart.forEach(function (elm) {
                self.subTotal += elm.p_quantity * elm.p_price;
                itemCount += elm.p_quantity;
            });
            if (itemCount >= 10) {
                self.discount = 25;
            } else if (itemCount > 3 && itemCount<= 6) {
                self.discount = 10;
            } else if (itemCount == 3) {
                self.discount = 5;
            } else {
                self.discount = 0;
            }
            self.setTotal();
        }

        self.editItem = function (items, index) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: function($scope, items, index, $uibModalInstance){
                    $scope.items = items;
                    $scope.selected = $scope.items[index];
                    $scope.ok = function () {
                        $scope.items[index] = $scope.selected;
                        self.response.data.productsInCart = $scope.items;
                        $uibModalInstance.close($scope.selected);
                    };

                    $scope.cancel = function () {
                        $scope.items = items;
                        self.response.data.productsInCart = $scope.items;
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                size: "md",
                resolve: {
                    items: function () {
                        return items;
                    },
                    index: function () {
                        return index;
                    }
                }
            });
        }

        function successHandle(response) {
            console.log(response);
            self.response = response;
            self.setSubTotal();
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);

    });