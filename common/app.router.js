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
//            templateUrl: 'views/login/login.tpl.html'
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
            templateUrl: 'views/home/home.tpl.html',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
}