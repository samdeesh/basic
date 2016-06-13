'use strict';

/**
 * @ngdoc service
 * @name machineAppApp.Auth
 * @description
 * # Auth
 * Service in the machineAppApp.
 */
angular.module('machineAppApp')
    .service('Auth', function ($http) {
        var self = this;
        // AngularJS will instantiate a singleton by calling "new" on this function
        self.setUser = function (aUser) {
            self.user = aUser;
            sessionStorage.setItem("myUser",JSON.stringify(aUser));
        };
        self.authenticate = function (newVal) {
            if (newVal.userName == "some@one.com" && newVal.pass == "someone") {
                self.setUser({
                    userName: newVal.userName
                });
                return true;
            }
        };
        self.isLoggedIn = function () {
            var user = JSON.parse(sessionStorage.getItem("myUser"));
            if(user && user.userName){
                 self.user = user;
            }
            return (self.user) ? self.user : false;
        };
    });