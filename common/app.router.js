angular
    .module('app')
    .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];

function config($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider
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
            templateUrl: 'views/main.tpl.html'
        })
        .state('main.home',{
            url: '/home',
            template: '<home></home>',
            ncyBreadcrumb: {
                label: 'Home'
            }
        })
        .state('main.review_house',{
            url: '/review_house',
            template: '<review_house></review_house>',
            ncyBreadcrumb: {
                label: 'Review',
                parent: 'main.home'
            }
        })
        .state('main.edit_house',{
            url: '/edit_house',
            template: '<edit_house></edit_house>',
            ncyBreadcrumb: {
                label: 'Edit House',
                parent: 'main.review_house'
            }
        })
        .state('main.create_house',{
            url: '/create_house',
            template: '<create_house></create_house>',
            ncyBreadcrumb: {
                label: 'Create House',
                parent: 'main.home'
            }
        })
        .state('main.edit_floor',{
            url: '/edit_floor',
            template: '<edit_floor></edit_floor>',
            ncyBreadcrumb: {
                label: 'Edit floor',
                parent: 'main.edit_house'
            }
        })
        .state('main.select_items',{
            url: '/select_items',
            template: '<select_items></select_items>',
            ncyBreadcrumb: {
                label: 'Select items',
                parent: 'main.edit_floor'
            }
        })
}