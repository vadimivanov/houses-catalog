angular
    .module('app')
    .directive('createHouse', create_house);

create_house.$inject = ['$state', 'network', '$breadcrumb'];

function create_house($state, network, $breadcrumb) {
    function linker($scope) {
        $scope.list = [];
        $scope.links = $breadcrumb.getStatesChain();
        $scope.links.sort();
        PubSub.publish('button-back', $scope.links[$scope.links.length-2]);

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