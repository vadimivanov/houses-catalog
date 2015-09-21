angular
    .module('app')
    .service('messages', function () {
        var messages = {
            setData: function (data) {
                console.log('setData',data);
                messages.data = data;
            },
            getData: function () {
                return messages.data;
            }
        };
        messages.data = null;
        return messages;
    });