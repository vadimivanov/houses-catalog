(function() {
'use strict';

angular
    .module('create_house', ['ngRoute'])
    .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['authService', '$location'];

    function CreateCtrl(authService, $location) {
        var createScope = this;
        createScope.list = [];
        createScope.addFloor = goToEditFloor;
        createScope.houseId = authService.getHouseId();
        createScope.floorsList = [];
        createScope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: createScope.houseId
        };
        createScope.getHouse = getHouse();

        function getHouse() {
            authService.getHouse(createScope.reviewData)
                .then(function (response) {
                    createScope.floorsList = response.data.results;
                    console.log('createScope',response,createScope.floorsList);
                },function (err) {
                    console.log('createScope-err',err,createScope.reviewData);
                });
        }

        function goToEditFloor() {
            $location.url('/edit_floor');
        }
    }

})();
