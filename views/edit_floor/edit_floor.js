angular
    .module('app')
    .directive('editFloor', edit_floor);

edit_floor.$inject = ['$state', 'network'];

function edit_floor($state, network, dataService, $stateParams) {
    function linker($scope) {
        $scope.parts = network.getItems();
        $scope.addFloor = addFloor;
        $scope.selectItems = selectItems;
        $scope.changeFloor = changeFloor;
        $scope.cancel = cancel;
        $scope.floorId = network.getFloorId();

        $scope.floorOptions = {
                params: $scope.parts,
                type: "POST",
                service: "/Floors",
                houseId: network.getHouseId()
            };

        function addFloor() {
            $state.go('main.edit_house');
            network.saveFloor($scope.floorOptions)
                .then(function (response) {
//                    editFloorScope.parts = authService.setItems({part1: "partWall", part2: "partWall"});
                }, function (error) {
                });
        }
        function changeFloor() {
            $state.go('main.edit_house');
            network.changeFloor({
                params: $scope.parts,
                type: "PUT",
                service: "/Floors/"+ $scope.floorId
            })
                .then(function (response) {
//                    editFloorScope.parts = authService.setItems({part1: "partWall", part2: "partWall"});
                }, function (error) {
                });
        }

        function selectItems(item) {
            network.setData('part'+item);
            console.log(item);
            $state.go('main.select_items');
        }

        function cancel() {
            $state.go('main.edit_house');
        }
    }
    return {
        templateUrl: 'views/edit_floor/edit_floor.tpl.html',
        restrict: 'E',
//        replace: true,
        scope: {},
        link: linker
    };
}