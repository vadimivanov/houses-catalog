//(function() {
//'use strict';
//
//angular
//    .module('create_house', ['ngRoute'])
//    .controller('CreateCtrl', CreateCtrl);
//
//    CreateCtrl.$inject = ['authService', '$location'];
//
//    function CreateCtrl(authService, $location) {
//        var createScope = this;
//        createScope.list = [];
//        createScope.goToEditFloor = goToEditFloor;
//
//        function goToEditFloor() {
//            authService.setItems({part1: "partWall", part2: "partWall"});
//            $location.url('/edit_floor');
//        }
//    }
//
//})();
angular
    .module('app')
    .directive('create', create);

create.$inject = ['$state'];

function create($state, network, dataService, $stateParams) {
    console.log('dir-create');
    function linker($scope) {
        $scope.goToEditFloor = function() {
            console.log('click');
            $state.go('main.edit-floor');
        }
    }
    return {
        templateUrl: 'views/create_house/create_house.tpl.html',
        restrict: 'E',
        replace: true,
        scope: {},
        link: linker
    };
}