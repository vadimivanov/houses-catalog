(function() {
'use strict';

angular
    .module('home', ['ngRoute'])
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['authService', '$location'];

    function HomeCtrl(authService, $location) {
        var homeScope = this;
        homeScope.list = [];
        homeScope.logoutData = {
            type: "POST",
            service: "/logout"
        };
        homeScope.logout = logout;
        homeScope.loadHousesList = loadHousesList();
        homeScope.reviewHouse = reviewHouse;

        function logout() {
            authService.logout(homeScope.logoutData)
                .then(function (response) {
                    console.log('response',response,homeScope.logoutData);
                    $location.url('/login');
                    $location.replace();
                });
        }

        function loadHousesList() {
            console.log('ping');
            authService.getHousesList({type: "GET", service: "/Houses"})
                .then(function (response) {
                    homeScope.list = response.data.results;

                    console.log('response-load',response,homeScope.list);
                }, function (error) {
                    console.log('error-load',error);
                });
        }

        function reviewHouse() {
            $location.url('/review');
        }
    }
})();
