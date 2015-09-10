(function() {
'use strict';
angular
    .module('login', ['ngRoute','networkService','btford.modal'])
    .factory('myModal', function (btfModal) {
        return btfModal({
            controller: 'MyModalCtrl',
            controllerAs: 'modal',
            templateUrl: 'components/modal-template.html'
        });
    })
    .service('messages', function () {
        var messages = {
            setData: function (data) {
                messages.data = data;
            },
            getData: function () {
               return messages.data;
            }
        };
        messages.data = null;
        return messages;
    })
    .controller('MyModalCtrl',MyModalCtrl)
    .controller('LoginCtrl',LoginCtrl);

    LoginCtrl.$inject =['authService', '$location', 'myModal', 'messages'];
    MyModalCtrl.$inject =['myModal', 'messages'];

function LoginCtrl(authService, $location,myModal,messages) {
    var loginScope = this;
        loginScope.signInData = {
            params: {
                username: "",
                password: ""
            },
            type: "GET",
            service: "/login"
            };
        loginScope.signUpData = {
            params: {
                username: "",
                password: ""
            },
            type: "POST",
            service: "/users"
        };
        loginScope.showModal = myModal.activate;
        loginScope.token = '';
        loginScope.visibility = false;

        loginScope.getSignUpForm = getSignUpForm;
        loginScope.login = login;
        loginScope.signUp = signUp;

        function getSignUpForm() {
            loginScope.visibility = true;
        }

        function setUserId() {
            loginScope.visibility = true;
        }

        function login() {
            authService.signIn(loginScope.signInData)
            .then(function (response) {

                authService.getToken(response.data.sessionToken);
                authService.setUserId(response.data.objectId);
                loginScope.token = response.data.sessionToken;
                $location.url('/home');
            }, function (err) {

                messages.setData(err);
                loginScope.showModal();
            });
        }
        function signUp() {
            authService.signUp(loginScope.signUpData)
            .then(function (response) {

                authService.getToken(response.data.sessionToken);
                authService.setUserId(response.data.objectId);
                loginScope.token = response.data.sessionToken;
                $location.url('/home');
            }, function (err) {

                messages.setData(err);
                loginScope.showModal();
            });
        }
}

function MyModalCtrl(myModal,messages) {
    var ctrl = this;
    ctrl.msgOpt = messages.getData();
    ctrl.msgText = ctrl.msgOpt.status+": "+ctrl.msgOpt.statusText;
    ctrl.closeMe = closeMe;

    function closeMe() {
        myModal.deactivate();
    }

}
})();
