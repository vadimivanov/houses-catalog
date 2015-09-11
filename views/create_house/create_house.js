(function() {
'use strict';

angular
    .module('create_house', ['ngRoute'])
    .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['authService', '$location'];

    function CreateCtrl(authService, $location) {
        var createScope = this;
        createScope.list = [];
        createScope.goToEditFloor = goToEditFloor;

        function goToEditFloor() {
            $location.url('/edit_floor');
        }
    }

})();
