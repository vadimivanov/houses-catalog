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
        homeScope.createHouse = createHouse;

        function logout() {
            authService.logout(homeScope.logoutData)
                .then(function (response) {
                    $location.url('/login');
                    $location.replace();
                });
        }

        function loadHousesList() {
            authService.getHousesList({type: "GET", service: "/Houses"})
                .then(function (response) {
                    homeScope.list = response.data.results;
                }, function (error) {
                });
        }

        function reviewHouse(id) {
            $location.url('/review');
            authService.setHouseId(id);
        }
        function createHouse(id) {
            $location.url('/create_house');
            authService.saveHouse({
                name:"test house",
                type: "POST",
                service: "/Houses"
            }).then(function (response) {
                authService.setHouseId(response.data.objectId);
            }, function (error) {
            });
        }
    }
})();
