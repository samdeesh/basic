'use strict';

/**
 * @ngdoc directive
 * @name machineAppApp.directive:loading
 * @description
 * # loading
 */
angular.module('machineAppApp')
    .directive('loading', function () {
        return {
            template: '<div class="media">' 
            +'<div class="media-body">'
            +'<h4 class="media-heading">Connecting Api</h4>'
            +'<p>Fetching data from "http://jsonplaceholder.typicode.com/posts"</p>'
            +'</div>'
            +'</div>',
            restrict: 'E'
        };
    });