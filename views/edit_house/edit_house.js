(function() {
'use strict';

angular
    .module('edit_house', ['ngRoute'])
    .controller('EditHouseCtrl', EditHouseCtrl);

    EditHouseCtrl.$inject = ['authService', '$location'];

    function EditHouseCtrl(authService, $location) {
        var editHouseScope = this;
        editHouseScope.floorsList = [];
        editHouseScope.houseId = authService.getHouseId();
        editHouseScope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: editHouseScope.houseId
        };
        editHouseScope.getHouse = getHouse();
        editHouseScope.goToEditFloor = goToEditFloor;

        function getHouse() {
            authService.getHouse(editHouseScope.reviewData)
                .then(function (response) {
                    editHouseScope.floorsList = response.data.results;
                    console.log('editHouseScope',response,editHouseScope.floorsList);
                },function (err) {
                    console.log('editHouseScope-err',err,editHouseScope.reviewData);
                });
        }

        function goToEditFloor() {
            $location.url('/edit_floor');
        }
    }
})();
