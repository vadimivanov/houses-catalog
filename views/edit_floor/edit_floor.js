//(function() {
//'use strict';
//
//angular
//    .module('edit_floor', ['ngRoute'])
//    .controller('EditFloorCtrl', EditFloorCtrl);
//
//    EditFloorCtrl.$inject = ['authService', '$location'];
//
//    function EditFloorCtrl(authService, $location) {
//        var editFloorScope = this;
//            editFloorScope.parts = authService.getItems();
//            editFloorScope.addFloor = addFloor;
//            editFloorScope.selectItems = selectItems;
//            editFloorScope.changeFloor = changeFloor;
//            editFloorScope.cancel = cancel;
//            editFloorScope.floorId = authService.getFloorId();
//
//            editFloorScope.floorOptions = {
//                params: editFloorScope.parts,
//                type: "POST",
//                service: "/Floors",
//                houseId: authService.getHouseId()
//            };
//
//        function addFloor() {
//            $location.url('/edit_house');
//            authService.saveFloor(editFloorScope.floorOptions)
//                .then(function (response) {
////                    editFloorScope.parts = authService.setItems({part1: "partWall", part2: "partWall"});
//                }, function (error) {
//                });
//        }
//        function changeFloor() {
//            $location.url('/edit_house');
//            authService.changeFloor({
//                params: editFloorScope.parts,
//                type: "PUT",
//                service: "/Floors/"+ editFloorScope.floorId
//            })
//                .then(function (response) {
////                    editFloorScope.parts = authService.setItems({part1: "partWall", part2: "partWall"});
//                }, function (error) {
//                });
//        }
//
//        function selectItems(item) {
//            authService.setData('part'+item);
//            $location.url('/select_items');
//        }
//
//        function cancel() {
//            $location.url('/edit_house');
//        }
//
//    }
//})();
angular
    .module('app')
    .directive('edit_floor', editFloor);

editFloor.$inject = ['$state'];

function editFloor($state, network, dataService, $stateParams) {
    function linker($scope) {
        $scope.selectItems = function () {
            $state.go('main.select-items');
        }
    }
    return {
//            templateUrl: 'views/review_house/review_house.tpl.html',
        restrict: 'E',
        replace: true,
        scope: {},
        link: linker
    };
}