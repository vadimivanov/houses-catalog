'use strict';

angular.module('home', ['ngRoute'])

    .controller('HomeCtrl', function($http, authService, $location) {
        var homeScope = this;
        homeScope.logoutData = {
            type: "POST",
            service: "/logout"
        };

        homeScope.logout = function () {
            authService.logout(homeScope.logoutData)
                .then(function(response) {
                    console.log('response',response,homeScope.logoutData);
                    $location.url('/login');
                    $location.replace();
                });
        };
    });