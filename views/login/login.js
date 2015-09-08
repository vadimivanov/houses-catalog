'use strict';

angular.module('login', ['ngRoute','networkService','btford.modal'])

    .factory('myModal', function (btfModal) {
        return btfModal({
            controller: 'MyModalCtrl',
            controllerAs: 'modal',
            templateUrl: 'components/modal-template.html'
        });
    })
    .factory('messages', function(){
        var messages = {};
        messages.data = {};
        messages.send = function (msg) {
            messages.data = msg;
        };
        return messages;
    })
    .controller('MyModalCtrl', function ($scope, $timeout, myModal,messages) {

        var ctrl = this;
        ctrl.tickCount = 5;
        ctrl.msgText = '';
        ctrl.msgText = messages.data.status+": "+messages.data.statusText;

        ctrl.closeMe = function () {
            myModal.deactivate();
        };

    })

    .controller('LoginCtrl', function($scope, $http, authService, $location,myModal,messages) {
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

        loginScope.getSignUpForm = function () {
            loginScope.visibility = true;
        };

        loginScope.login = function () {
            authService.signIn(loginScope.signInData)
                .then(function(response) {
                    authService.getToken(response.data.sessionToken);
                    loginScope.token = response.data.sessionToken;
                    $location.url('/home');
                }, function(err) {
                    messages.send(err);
                    loginScope.showModal();
                });
        };
        loginScope.signUp = function () {
            authService.signUp(loginScope.signUpData)
                .then(function(response) {
                    authService.getToken(response.data.sessionToken);
                    loginScope.token = response.data.sessionToken;
                    $location.url('/home');
                }, function(err) {
                    messages.send(err);
                    loginScope.showModal();
                });
        };
    });
