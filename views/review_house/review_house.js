//(function() {
//'use strict';
//
//angular
//    .module('review', ['ngRoute'])
//    .controller('ReviewCtrl', ReviewCtrl);
//
//    ReviewCtrl.$inject =['authService', '$location'];
//
//    function ReviewCtrl(authService, $location) {
//        var reviewScope = this;
//        reviewScope.floorsList = [];
//        reviewScope.reverse = true;
//        reviewScope.houseId = authService.getHouseId();
//        reviewScope.reviewData = {
//            type: "GET",
//            service: "/Floors",
//            objId: reviewScope.houseId
//        };
//        reviewScope.getHouse = getHouse();
//        reviewScope.setHouseId = setHouseId;
//        function getHouse() {
//            authService.getHouse(reviewScope.reviewData)
//                .then(function (response) {
//                    reviewScope.floorsList = response.data.results;
//                },function (err) {
//                });
//        }
//
//        function setHouseId() {
//            $location.url('/edit_house');
//        }
//    }
//})();
angular
    .module('app')
    .directive('review', review);

review.$inject = ['$state'];

    function review($state, network, dataService, $stateParams) {
        console.log('dir-review');
        function linker($scope) {
            $scope.setHouseId = function () {
                console.log('click');
                $state.go('main.edit-house');
            }
        }
        return {
            templateUrl: 'views/review_house/review_house.tpl.html',
//            restrict: 'E',
//            replace: true,
//            scope: {},
            link: linker
        };
    }