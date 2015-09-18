angular
    .module('app')
    .directive('login', login);

    login.$inject = ['$state', 'network'];

    function login($state, network) {
        console.log('dir');
        function linker($scope) {
            $scope.signInData = {
                params: {
                    username: "",
                    password: ""
                },
                type: "GET",
                service: "/login"
            };
            $scope.signIn = function (id) {
                network.signIn($scope.signInData)
                    .then(function (response) {
                        console.log(response);
                        $state.go('main.home');
                    }, function (err) {

                    });

            }
        }
        return {
            templateUrl: 'views/login/login.tpl.html',
            restrict: 'E',
            scope: {},
            replace: true,
            link: linker
        };

    }
