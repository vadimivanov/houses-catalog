angular
    .module('app')
    .directive('createHouse', create_house);

create_house.$inject = ['$state', 'network'];

function create_house($state, network, dataService, $stateParams) {
    function linker($scope) {
        $scope.list = [];

        $scope.goToEditFloor = function() {
            network.setItems({part1: "partWall", part2: "partWall"});
            $state.go('main.edit_floor');
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