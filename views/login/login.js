angular
    .module('app')
    .directive('login', login);
//    .factory('myModal', function (btfModal) {
//        return btfModal({
//            controller: 'MyModalCtrl',
//            controllerAs: 'modal',
//            templateUrl: 'components/modal.tpl.html'
//        });
//    })

//    .controller('MyModalCtrl',MyModalCtrl);
//
//    MyModalCtrl.$inject =['myModal', 'messages'];
//    function MyModalCtrl(myModal,messages) {
//        var ctrl = this;
//        ctrl.msgOpt = messages.getData();
//        ctrl.msgText = ctrl.msgOpt.status+": "+ctrl.msgOpt.statusText;
//        ctrl.closeMe = closeMe;
//
//        function closeMe() {
//            myModal.deactivate();
//        }
//
//    }

    login.$inject = ['$state', 'network', 'messages'];

    function login($state, network, messages) {

        function linker($scope) {
            $scope.signInData = {
                params: {
                    username: "",
                    password: ""
                },
                type: "GET",
                service: "/login"
            };
            $scope.signUpData = {
                params: {
                    username: "",
                    password: ""
                },
                type: "POST",
                service: "/users"
            };
            $scope.signIn = function (id) {
                network.signIn($scope.signInData)
                    .then(function (response) {
                        console.log(response);
                        network.getToken(response.data.sessionToken);
                        network.setUserId(response.data.objectId);
                        $scope.token = response.data.sessionToken;
                        $state.go('main.home');
                    }, function (error) {
                        PubSub.publish('messages', error);
//                        messages.setData(error);
                    });
            };

            $scope.token = '';
            $scope.visibility = false;

            $scope.getSignUpForm = function () {
                $scope.visibility = true;
            };
            $scope.setUserId = function () {
                $scope.visibility = true;
            };

            $scope.signUp = function () {
                network.signUp($scope.signUpData)
                    .then(function (response) {

                        network.getToken(response.data.sessionToken);
                        network.setUserId(response.data.objectId);
                        $scope.token = response.data.sessionToken;
                        $state.go('main.home');
                    }, function (error) {
                        PubSub.publish('messages', error);
                    });
            }
            }

//        }
        return {
            templateUrl: 'views/login/login.tpl.html',
            restrict: 'E',
            scope: {},
            replace: true,
            link: linker
        };
    }
