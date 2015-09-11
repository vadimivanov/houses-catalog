(function() {
'use strict';

angular
    .module('review', ['ngRoute'])
    .controller('ReviewCtrl', ReviewCtrl);

    ReviewCtrl.$inject =['authService', '$location'];

    function ReviewCtrl(authService, $location) {
        var reviewScope = this;
        reviewScope.floorsList = [];
        reviewScope.reverse = true;
        reviewScope.houseId = authService.getHouseId();
        reviewScope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: reviewScope.houseId
        };
        reviewScope.getHouse = getHouse();
        reviewScope.setHouseId = setHouseId;
        function getHouse() {
            authService.getHouse(reviewScope.reviewData)
                .then(function (response) {
                    reviewScope.floorsList = response.data.results;
                },function (err) {
                });
        }

        function setHouseId() {
            $location.url('/edit_house');
        }
    }
})();
