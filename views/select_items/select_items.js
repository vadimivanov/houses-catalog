angular
    .module('app')
    .directive('selectItems', select_items);

select_items.$inject = ['$state', 'network', '$breadcrumb'];

function select_items($state, network, $breadcrumb) {
    function linker($scope) {
        $scope.wallComponents = [];
        $scope.parts = network.getItems();
        $scope.part = network.getData();
        $scope.links = $breadcrumb.getStatesChain();
        PubSub.publish('button-back', $scope.links[$scope.links.length-2]);

        $scope.chooseItem = function (item) {
            $scope.parts[$scope.part] = item;
            network.setItems($scope.parts);
            $state.go('main.edit_floor');
        };
        $scope.getWallComponents = function () {
            network.getWallComponents({
                type: "GET",
                service: "/Items"
            }).then(function (response) {
                $scope.wallComponents = response.data.results;
            });
        };
        $scope.getWallComponents();
    }
    return {
        templateUrl: 'views/select_items/select_items.tpl.html',
        restrict: 'E',
        scope: {},
        link: linker
    };
}