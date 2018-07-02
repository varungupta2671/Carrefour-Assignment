'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginCtrl'
    });
}])

.controller('loginCtrl', ['$scope', 'services', function($scope, services) {

    $scope.user = [];
    $scope.searchStatus = false;
    // console.log("loginCtrl Calling ..");
    $scope.productList = [
        { "src": "./../img/logo@2X2.png", "price": "AED 1000", "description": "iPhone 6 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 2000", "description": "iPhone 7 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 3000", "description": "iPhone 8 Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 4000", "description": "iPhone x Black" },
        { "src": "./../img/logo@2X2.png", "price": "AED 5000", "description": "iPhone 8+ Black" }
    ];

    $scope.submitForm = function() {
        console.log("submitForm called..");

        var data = $scope.user;
        services.callLogin(function(data, response) {
            console.log(response);
        });
    };

    $scope.clickSearchEv = function() {
        $scope.searchStatus = true;
    };
}])

.service('services', function($http) {

    this.callLogin = function(loginData, done) {

        console.log("service called..");
        $http.post("test.html", { "username": loginData.email, "password": loginData.password })
            .then(function(response) {
                done(response.data);
            });
    };
});