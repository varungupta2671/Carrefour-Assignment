'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
    });
}])

.controller('loginCtrl', ['$scope', function($scope) {

    // console.log("loginCtrl Calling ..");
    $scope.productList = [
        { "src": "./../img/logo@2X2.png", "price": "AED 1000", "description": "iPhone 6 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 2000", "description": "iPhone 7 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 3000", "description": "iPhone 8 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 4000", "description": "iPhone x Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 5000", "description": "iPhone 8+ Black" }
    ];
}]);