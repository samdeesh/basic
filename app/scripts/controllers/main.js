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
        self.getTotal = function () {
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
        }

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
            self.setSubTotal();
            self.getTotal();
        }

        function errorHandle(response) {
            console.error(response);
        }
        DataHouse.getData().then(successHandle, errorHandle);

    });