(function() {
'use strict';

angular
    .module('edit_floor', ['ngRoute'])
    .controller('EditFloorCtrl', EditFloorCtrl);

    EditFloorCtrl.$inject = ['authService', '$location'];

    function EditFloorCtrl(authService, $location) {
        var editFloorScope = this;
            editFloorScope.addFloor = addFloor;
            editFloorScope.selectItems = selectItems;
            editFloorScope.floorId = authService.getData();
            editFloorScope.getCurrentFloor = getCurrentFloor(editFloorScope.floorId);

        console.log('editFloorScope.parts',editFloorScope.floorId);
            editFloorScope.floorOptions = {
                params: editFloorScope.parts,
                type: "POST",
                service: "/Floors",
                houseId: authService.getHouseId()
            };

        function addFloor() {
            $location.url('/home');
            authService.saveFloor(editFloorScope.floorOptions)
                .then(function (response) {
                    editFloorScope.parts = authService.setItems({part1: "partWall", part2: "partWall"});
                }, function (error) {
                });
        }

        function selectItems(item) {
            authService.setData('part'+item);
            $location.url('/select_items');
        }
        function getCurrentFloor(item) {
            console.log('item',item);
            if (item !== 'undefined') {
                authService.getFloor(editFloorScope.floorId)
                .then(function (response) {
                    editFloorScope.parts = response.data.wall;
            console.log('getCurrentFloor',item,editFloorScope.parts);
                }, function (error) {
                });
            } else {
                editFloorScope.parts = authService.getItems();
            }
        }
    }
})();
