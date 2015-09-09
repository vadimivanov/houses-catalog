(function() {
'use strict';
angular
    .module('select_items', ['ngRoute'])
    .controller('SelectCtrl', SelectCtrl);

    SelectCtrl.$inject = ['authService'];

    function SelectCtrl() {

    }

})();