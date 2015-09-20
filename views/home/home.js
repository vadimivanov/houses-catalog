//(function() {

angular
    .module('app')
    .directive('home', home);

    home.$inject = ['$state'];

    function home($state, network, dataService, $stateParams) {
        console.log('dir-home');
        function linker($scope) {
            $scope.reviewHouse = function (id) {
                $state.go('main.review_house');
            };
            $scope.createHouse = function (id) {
                $state.go('main.create_house');
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
//    function HomeCtrl(authService, $location) {
//        var homeScope = this;
//        var path = $location.path();
//        homeScope.visibilityNavBar = (path == '/home');
//        console.log('searchObject-home',path,path == '/home',homeScope.visibilityNavBar);
//        homeScope.list = [];
//        homeScope.houseName = '';
//        homeScope.logoutData = {
//            type: "POST",
//            service: "/logout"
//        };
//        homeScope.logout = logout;
//        homeScope.loadHousesList = loadHousesList();
//        homeScope.reviewHouse = reviewHouse;
//        homeScope.createHouse = createHouse;
//        homeScope.removeHouse = removeHouse;
//
//        function logout() {
//            authService.logout(homeScope.logoutData)
//                .then(function (response) {
//                    $location.url('/login');
//                    $location.replace();
//                });
//        }
//
//        function loadHousesList() {
//            authService.getHousesList({type: "GET", service: "/Houses"})
//                .then(function (response) {
//                    homeScope.list = response.data.results;
//                }, function (error) {
//                });
//        }
//
//        function reviewHouse(id) {
//            $location.url('/review');
//            authService.setHouseId(id);
//        }
//        function createHouse(id) {
//            $location.url('/create_house');
//            authService.saveHouse({
//                name: homeScope.houseName,
//                type: "POST",
//                service: "/Houses"
//            }).then(function (response) {
//                authService.setHouseId(response.data.objectId);
//            }, function (error) {
//            });
//        }
//
//        function removeHouse(id) {
//            var arrDel = [];
//            authService.removeHouse({
//                type: "DELETE",
//                service: "/Houses/"+id,
//                houseId: id
//            }).then(function (response) {
////                authService.getHouse(editHouseScope.reviewData)
////                    .then(function (response) {
////                        arrDel.push(response.data.results);
////                    },function (err) {
////                    });
//                loadHousesList();
//            },function (err) {});
//        }
//    }
//})();
