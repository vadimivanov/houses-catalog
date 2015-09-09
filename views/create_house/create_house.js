(function() {
'use strict';

angular
    .module('create_house', ['ngRoute'])
    .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['authService'];

    function CreateCtrl(authService) {
        var createScope = this;
        createScope.list = [];
        createScope.addFloor = addFloor;

        function addFloor() {
            authService.saveFloor({type: "POST", service: "/Floors"})
                .then(function (response) {
                    console.log('response-load',response);
                }, function (error) {
                    console.log('error-load',error);
                });
        }

    }

})();
