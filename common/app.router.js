angular
    .module('app')
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider
//        .when('/login', '/login')
        .otherwise('/login');
    $stateProvider
        .state('auth',{
            templateUrl: 'views/auth.tpl.html'
        })
        .state('auth.login',{
            url: '/login',
            template: '<login></login>'
        })
        .state('main',{
            url: '/main',
            templateUrl: 'views/main.tpl.html',
            ncyBreadcrumb: {
                label: 'Main'
            }
        })
        .state('main.home',{
            url: '/home',
//            templateUrl: 'views/home/home.tpl.html',
            template: '<home/>',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('main.review_house',{
            url: '/review_house',
//            templateUrl: 'views/review_house/review_house.tpl.html',
            template: '<review/>',
            ncyBreadcrumb: {
                label: 'Review'
            }
        })
        .state('main.edit-house',{
            url: '/edit-house',
//            templateUrl: 'views/edit_house/edit_house.tpl.html',
            template: '<edit_house/>',
            ncyBreadcrumb: {
                label: 'Edit House'
            }
        })
        .state('main.create_house',{
            url: '/create_house',
//            templateUrl: 'views/create_house/create_house.tpl.html',
            template: '<create_house/>',
            ncyBreadcrumb: {
                label: 'Create House'
            }
        })
        .state('main.edit-floor',{
            url: '/edit-floor',
            templateUrl: 'views/edit_floor/edit_floor.tpl.html',
//            template: '<review></review>',
            ncyBreadcrumb: {
                label: 'Edit floor'
            }
        })
        .state('main.select-items',{
            url: '/select-items',
            templateUrl: 'views/select_items/select_items.tpl.html',
//            template: '<review></review>',
            ncyBreadcrumb: {
                label: 'Select items'
            }
        })
}