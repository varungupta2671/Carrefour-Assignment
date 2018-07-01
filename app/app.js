'use strict';

// Declare app level module which depends on views, and components
angular.module('carrefourApp', [
    'ngRoute',
    'myApp.login'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/login' });
}]);