(function() {
'use strict';

angular
    .module('edit_house', ['ngRoute'])
    .controller('EditHouseCtrl', EditHouseCtrl);

    EditHouseCtrl.$inject = ['authService', '$location'];

    function EditHouseCtrl(authService, $location) {
        var editHouseScope = this;
        editHouseScope.floorsList = [];
        editHouseScope.reverse = true;
        editHouseScope.removeFloor = removeFloor;
        editHouseScope.houseId = authService.getHouseId();
        editHouseScope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: editHouseScope.houseId
        };
        editHouseScope.getHouse = getHouse();
        editHouseScope.goToEditFloor = goToEditFloor;
        editHouseScope.getCurrentFloor = getCurrentFloor;

        function getHouse() {
            authService.getHouse(editHouseScope.reviewData)
                .then(function (response) {
                    editHouseScope.floorsList = response.data.results;
                },function (err) {
                });
        }

        function goToEditFloor(id) {
            if (id) {
                authService.setFloorId(id);
                getCurrentFloor(id);
            } else {
                authService.setItems({part1: "partWall", part2: "partWall"});
                $location.url('/edit_floor');
            }

        }
        function getCurrentFloor(id) {
            authService.getFloor(id)
                .then(function (response) {
                    editHouseScope.parts = response.data.wall;
                    authService.setItems(editHouseScope.parts);
                    $location.url('/edit_floor');
                }, function (error) {
                });
        }

        function removeFloor(id) {
            authService.removeFloor({
                type: "DELETE",
                service: "/Floors/"+id
            }).then(function (response) {
                getHouse();
            },function (err) {
            });
        }
    }
})();
