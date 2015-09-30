/*global angular, PubSub*/
angular
    .module('app')
    .directive('header', header);
header.$inject = ['network', '$state'];

function header(network, $state) {
    'use strict';
    function linker($scope) {
        $scope.data = {
            goBackTitle: '',
            goBackLink: '',
            logoutData: {
                type: "POST",
                service: "/logout"
            }
        };
        $scope.logout = function () {
            network.logout($scope.data.logoutData)
                .then(function (response) {
                    $state.go('auth.login');
                });
        };
        PubSub.subscribe('button-back', function(channel, data) {
            if (data) {
                $scope.data.goBackTitle = data.ncyBreadcrumb.label;
                $scope.data.goBackLink = data.ncyBreadcrumbLink;
            }
        });
    }

    return {
        templateUrl: 'views/header/header.tpl.html',
        restrict: 'E',
        scope: {},
        link: linker
    };
}