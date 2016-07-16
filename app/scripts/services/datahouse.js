'use strict';

/**
 * @ngdoc service
 * @name machineAppApp.DataHouse
 * @description
 * # DataHouse
 * Service in the machineAppApp.
 */
angular.module('machineAppApp')
  .service('DataHouse', function ($http) {
    var self= this;
    self.getData = function(){
        return $http.get("/assets/cart.json")
    } 
    return self;
  });
