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
        return $http.get("http://jsonplaceholder.typicode.com/posts")
    } 
    self.putData = function(data){
        return $http.post("http://jsonplaceholder.typicode.com/posts", data);
    }
    return self;
  });
