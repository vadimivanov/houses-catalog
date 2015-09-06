'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'login',
    'home',
    'select_items','review','edit_house','edit_floor','create_house'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl'
            })
            .when('/login',{
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl'
            })
            .when('/home',{
                templateUrl:'views/home/home.html',
                controller:'HomeCtrl'
            })
            .when('/select_items',{
                templateUrl:'views/select_items/select_items.html',
                controller:'SelectCtrl'
            })
            .when('/review',{
                templateUrl:'views/review_house/review_house.html',
                controller:'ReviewCtrl'
            })
            .when('/edit_house',{
                templateUrl:'views/edit_house/edit_house.html',
                controller:'EditHouseCtrl'
            })
            .when('/edit_floor',{
                templateUrl:'views/edit_floor/edit_floor.html',
                controller:'EditFloorCtrl'
            })
            .when('/create_house',{
                templateUrl:'views/create_house/create_house.html',
                controller:'CreateCtrl'
            })
            .otherwise({redirectTo: '/login'});
    }]);