(function() {
'use strict';

angular
    .module('edit_floor', ['ngRoute'])
    .controller('EditFloorCtrl', EditFloorCtrl);

    EditFloorCtrl.$inject = ['authService'];

    function EditFloorCtrl() {

    }
})();
