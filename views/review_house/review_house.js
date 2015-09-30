angular
    .module('app')
    .directive('reviewHouse', review_house);

review_house.$inject = ['$state', 'network', '$breadcrumb'];

    function review_house($state, network, $breadcrumb) {
        function linker($scope) {

            $scope.floorsList = [];
            $scope.links = $breadcrumb.getStatesChain();
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
            PubSub.publish('button-back', $scope.links[$scope.links.length-2]);
        }
        return {
            templateUrl: 'views/review_house/review_house.tpl.html',
            restrict: 'E',
            scope: {},
            link: linker
        };
    }