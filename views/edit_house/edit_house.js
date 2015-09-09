(function() {
'use strict';

angular
    .module('edit_house', ['ngRoute'])
    .controller('EditHouseCtrl', EditHouseCtrl);

    EditHouseCtrl.$inject = ['authService'];

    function EditHouseCtrl() {

    }
})();
