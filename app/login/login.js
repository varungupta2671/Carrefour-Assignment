'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
    });
}])

.controller('loginCtrl', ['$scope', function($scope) {
    console.log("loginCtrl Calling ..");
    $scope.productList = ["Product1", "Product2", "Product3", "Product4", "Product5"];
}]);