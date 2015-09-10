'use strict';

angular
    .module('myApp', [
        'ngRoute',
        'login',
        'home',
        'select_items',
        'review',
        'edit_house',
        'edit_floor',
        'create_house'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl',
                controllerAs: 'loginScope'
            })
            .when('/login',{
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl',
                controllerAs: 'loginScope'
            })
            .when('/home',{
                templateUrl:'views/home/home.html',
                controller:'HomeCtrl',
                controllerAs: 'homeScope'
            })
            .when('/select_items',{
                templateUrl:'views/select_items/select_items.html',
                controller:'SelectCtrl',
                controllerAs: 'selectItemsScope'
            })
            .when('/review',{
                templateUrl:'views/review_house/review_house.html',
                controller:'ReviewCtrl',
                controllerAs: 'reviewScope'
            })
            .when('/edit_house',{
                templateUrl:'views/edit_house/edit_house.html',
                controller:'EditHouseCtrl',
                controllerAs: 'editHouseScope'
            })
            .when('/edit_floor',{
                templateUrl:'views/edit_floor/edit_floor.html',
                controller:'EditFloorCtrl',
                controllerAs: 'editFloorScope'
            })
            .when('/create_house',{
                templateUrl:'views/create_house/create_house.html',
                controller:'CreateCtrl',
                controllerAs: 'createScope'
            })
            .otherwise({redirectTo: '/login'});
    }]);