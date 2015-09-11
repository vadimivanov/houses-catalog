(function() {
'use strict';
angular
    .module('select_items', ['ngRoute'])
    .controller('SelectCtrl', SelectCtrl);

    SelectCtrl.$inject = ['authService', '$location'];

    function SelectCtrl(authService, $location) {
        var selectItemsScope = this;
            selectItemsScope.chooseItem = chooseItem;
            selectItemsScope.parts = authService.getItems();
            selectItemsScope.part = authService.getData();

        function chooseItem(item) {

            selectItemsScope.parts[selectItemsScope.part] = item;
            $location.url('/edit_floor');
        }
    }

})();