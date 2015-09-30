angular
    .module('app')
    .directive('editFloor', edit_floor);

edit_floor.$inject = ['$state', 'network', '$breadcrumb'];

function edit_floor($state, network, $breadcrumb) {
    function linker($scope) {
        $scope.parts = network.getItems();
        $scope.addFloor = addFloor;
        $scope.selectItems = selectItems;
        $scope.changeFloor = changeFloor;
        $scope.cancel = cancel;
        $scope.floorId = network.getFloorId();
        $scope.links = $breadcrumb.getStatesChain();
        PubSub.publish('button-back', $scope.links[$scope.links.length-2]);

        $scope.floorOptions = {
                params: $scope.parts,
                type: "POST",
                service: "/Floors",
                houseId: network.getHouseId()
            };

        function addFloor() {
            $state.go('main.edit_house');
            network.saveFloor($scope.floorOptions);
        }
        function changeFloor() {
            $state.go('main.edit_house');
            network.changeFloor({
                params: $scope.parts,
                type: "PUT",
                service: "/Floors/"+ $scope.floorId
            });
        }

        function selectItems(item) {
            network.setData('part'+item);
            $state.go('main.select_items');
        }

        function cancel() {
            $state.go('main.edit_house');
        }
    }
    return {
        templateUrl: 'views/edit_floor/edit_floor.tpl.html',
        restrict: 'E',
        scope: {},
        link: linker
    };
}