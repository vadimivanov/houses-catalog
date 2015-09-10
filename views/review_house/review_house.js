(function() {
'use strict';

angular
    .module('review', ['ngRoute'])
    .controller('ReviewCtrl', ReviewCtrl);

    ReviewCtrl.$inject =['authService', '$location'];

    function ReviewCtrl(authService, $location) {
        var reviewScope = this;
        reviewScope.floorsList = [];
        reviewScope.houseId = authService.getHouseId();
        reviewScope.reviewData = {
            type: "GET",
            service: "/Floors",
            objId: reviewScope.houseId
        };
        reviewScope.getHouse = getHouse();
        reviewScope.setHouseId = setHouseId;
        console.log('reviewScope.houseId',reviewScope.houseId);
        function getHouse() {
            authService.getHouse(reviewScope.reviewData)
                .then(function (response) {
                    reviewScope.floorsList = response.data.results;
                    console.log('reviewScope',response,reviewScope.floorsList);
                },function (err) {
                    console.log('reviewScope-err',err,reviewScope.reviewData);
                });
        }

        function setHouseId() {
            $location.url('/edit_house');
        }
    }
})();
