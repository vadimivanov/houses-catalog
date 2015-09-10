(function() {
'use strict';

angular
    .module('edit_floor', ['ngRoute'])
    .controller('EditFloorCtrl', EditFloorCtrl);

    EditFloorCtrl.$inject = ['authService', '$location'];

    function EditFloorCtrl(authService, $location) {
        var editFloorScope = this;
            editFloorScope.addFloor = addFloor;
            editFloorScope.floorOptions = {
                params:{
                    part1: "window",
                    part2: "door"
                },
                type: "POST",
                service: "/Floors",
                houseId: authService.getHouseId()
            };

        function addFloor() {
            $location.url('/edit_floor');
            authService.saveFloor(editFloorScope.floorOptions)
                .then(function (response) {
                    console.log('response-load',response);
                }, function (error) {
                    console.log('error-load',error);
                });
        }
    }
})();
