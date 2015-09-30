angular
    .module('app')
    .directive('editHouse', edit_house);

edit_house.$inject = ['$state', 'network', '$breadcrumb'];

function edit_house($state, network, $breadcrumb) {
    console.log('dir-edithouse');
    function linker($scope) {

        $scope.floorsList = [];
        $scope.reverse = true;
        $scope.removeFloor = removeFloor;
        $scope.houseId = network.getHouseId();
        $scope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: $scope.houseId
        };
        $scope.getHouse = getHouse();
        $scope.goToEditFloor = goToEditFloor;
        $scope.getCurrentFloor = getCurrentFloor;
        $scope.links = $breadcrumb.getStatesChain();
        PubSub.publish('button-back', $scope.links[$scope.links.length-2]);

        function getHouse() {
            network.getHouse($scope.reviewData)
                .then(function (response) {
                    $scope.floorsList = response.data.results;
                },function (err) {
                });
        }

        function goToEditFloor(id) {
            if (id) {
                network.setFloorId(id);
                getCurrentFloor(id);
            } else {
                network.setItems({part1: "partWall", part2: "partWall"});
                $state.go('main.edit_floor');
            }

        }
        function getCurrentFloor(id) {
            network.getFloor(id)
                .then(function (response) {
                    $scope.parts = response.data.wall;
                    network.setItems($scope.parts);
                    $state.go('main.edit_floor');
                }, function (error) {
                });
        }

        function removeFloor(id) {
            network.removeFloor({
                type: "DELETE",
                service: "/Floors/"+id
            }).then(function (response) {
                getHouse();
            },function (err) {
            });
        }
    }
    return {
        templateUrl: 'views/edit_house/edit_house.tpl.html',
        restrict: 'E',
        replace: true,
        scope: {},
        link: linker
    };
}