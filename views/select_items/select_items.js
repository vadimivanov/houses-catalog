(function() {
'use strict';
angular
    .module('select_items', ['ngRoute'])
    .controller('SelectCtrl', SelectCtrl);

    SelectCtrl.$inject = ['authService', '$location'];

    function SelectCtrl(authService, $location) {
        var selectItemsScope = this;
            selectItemsScope.chooseItem = chooseItem;
            selectItemsScope.wallComponents = [];
            selectItemsScope.getWallComponents = getWallComponents();
            selectItemsScope.parts = authService.getItems();
            selectItemsScope.part = authService.getData();

        function chooseItem(item) {
            selectItemsScope.parts[selectItemsScope.part] = item;
            authService.setItems(selectItemsScope.parts);
            $location.url('/edit_floor');
        }

        function getWallComponents() {
            authService.getWallComponents({
                type: "GET",
                service: "/Items"
            }).then(function (response) {
                console.log('Items response',response);
                selectItemsScope.getWallComponents = response.data.results;
            },function (err) {
            });
        }
    }

})();