angular
    .module('app')
    .directive('reviewHouse', review_house);

review_house.$inject = ['$state', 'network'];

    function review_house($state, network, dataService, $stateParams) {
        function linker($scope) {

            $scope.floorsList = [];
            $scope.reverse = true;
            $scope.houseId = network.getHouseId();
            $scope.reviewData = {
                type: "GET",
                service: "/Floors",
                objId: $scope.houseId
            };

            $scope.getHouse = function () {
                network.getHouse($scope.reviewData)
                    .then(function (response) {
                        console.log(response.data.results);
                        $scope.floorsList = response.data.results;
                    });
            };

            $scope.setHouseId = function () {
                $state.go('main.edit_house');
            };
            $scope.getHouse();
        }
        return {
            templateUrl: 'views/review_house/review_house.tpl.html',
            restrict: 'E',
//            replace: true,
            scope: {},
            link: linker
        };
    }