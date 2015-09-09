(function() {
'use strict';

angular
    .module('review', ['ngRoute'])
    .controller('ReviewCtrl', ReviewCtrl);

    ReviewCtrl.$inject =['authService'];

    function ReviewCtrl() {

    }
})();
