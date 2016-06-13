'use strict';

/**
 * @ngdoc service
 * @name machineAppApp.User
 * @description
 * # User
 * Service in the machineAppApp.
 */
angular.module('machineAppApp')
    .service('User', function () {
        var self = this;
        self.new = function (uname, upass) {
            self.user = {
                userName: uname,
                pass: upass
            };
            return self.user;
        }
    });