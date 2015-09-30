
angular
    .module('app')
    .directive('home', home);

    home.$inject = ['$state', 'network'];

    function home($state, network) {
        function linker($scope) {
            $scope.data = {
                list: [],
                houseName: '',
                logoutData: {
                    type: "POST",
                    service: "/logout"
                }
            };

            $scope.loadHousesList = function () {
                network.getHousesList({type: "GET", service: "/Houses"})
                    .then(function (response) {
                        $scope.data.list = response.data.results;
                        console.log('list',$scope.data.list,response);
                    }, function (error) {
                    });
            };
            $scope.loadHousesList();

            $scope.reviewHouse = function (id) {
                $state.go('main.review_house');
                network.setHouseId(id);
            };
            $scope.createHouse = function (id) {
                $state.go('main.create_house');
                network.saveHouse({
                    name: $scope.data.houseName,
                    type: "POST",
                    service: "/Houses"
                }).then(function (response) {
                    network.setHouseId(response.data.objectId);
                });
            };

            $scope.removeHouse = function (id) {
                var removingFloors = [];
                network.removeHouse({
                    type: "DELETE",
                    service: "/Houses/"+id,
                    houseId: id
                }).then(function (response) {
                    network.getHouse({
                        type: "GET",
                        service: "/Floors",
                        objId: id
                    })
                    .then(function (response) {
                        removingFloors = response.data.results;
                        for (var i = 0; i < removingFloors.length; i++) {
                            network.removeHouseFloors({
                                type: "DELETE",
                                houseId: removingFloors[i].objectId
                            })
                        }
                    });
                    $scope.loadHousesList();
                },function (err) {});
            }
        }
        return {
            templateUrl: 'views/home/home.tpl.html',
            restrict: 'E',
            replace: true,
            scope: {},
            link: linker
        };
    }
