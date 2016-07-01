angular
    .module('app')
    .constant('CONFIG', {
        REST_API_KEY: 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
        APP_ID: 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
        URL: "https://parseapi.back4app.com",
        HEADER: {
            'X-Parse-Application-Id': 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
            'X-Parse-REST-API-Key':  'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
            contentType: "application/json"
        },
        SESSION_TOKEN: '',
        msg: null,
        itemsObj: {part1: "partWall", part2: "partWall"},
        HOUSE_ID: null,
        FLOOR_ID: null,
        USER_ID: null
    })
    .service('network', network);

network.$inject = ['$http', 'CONFIG'];

function network($http, CONFIG) {

//          ***messages service***
            this.setData = function (data) {
                CONFIG.msg = data;
            };
            this.getData = function () {
                return CONFIG.msg;
            };
//
//          ***auth service***
            this.signIn = function (data) {
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + data.service,
                    dataType: 'json',
                    params: data.params
                };
                return $http(options);
            };

            this.getToken = function (token) {
                CONFIG.SESSION_TOKEN = token;
            };

            this.signUp = function (data) {
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + data.service,
                    dataType: 'json',
                    data: data.params
                };
                return $http(options);
            };

            this.logout = function (data) {
                var options = {
                    method: data.type,
                    headers: {
                        'X-Parse-Application-Id': CONFIG.APP_ID,
                        'X-Parse-REST-API-Key': CONFIG.REST_API_KEY,
                        'X-Parse-Session-Token': CONFIG.SESSION_TOKEN,
                        contentType: "application/json"
                    },
                    url: CONFIG.URL + data.service,
                    dataType: 'json'
                };
                return $http(options);
            };
            this.setUserId = function (data) {
                CONFIG.USER_ID = data;
            };

//          ***property service***
            this.getWallComponents = function (data) {
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + '/classes' + data.service,
                    dataType: 'json'
                };
                return $http(options);
            };
            this.setHouseId = function (data) {
                CONFIG.HOUSE_ID = data;
            };
            this.getHouseId = function () {
                return CONFIG.HOUSE_ID;
            };
            this.saveHouse = function (data) {
                var parseObj = JSON.stringify({
                    name: data.name,
                    user: {
                        __type: "Pointer",
                        className: "_User",
                        objectId: CONFIG.USER_ID
                    }
                });
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + '/classes' + data.service,
                    dataType: 'json',
                    data: parseObj
                };
                console.log('options',options);
                return $http(options);
            };
            this.removeHouse = function (data) {
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + '/classes' + data.service,
                    dataType: 'json'
                };
                return $http(options);
            };
            this.removeHouseFloors = function (data) {
                var options = {
                        method: data.type,
                        headers: CONFIG.HEADER,
                        url: CONFIG.URL + '/classes/Floors/' + data.houseId,
                        dataType: 'json'
                    };
                return $http(options);
            };

            this.saveFloor = function (data) {
                var parseObj = JSON.stringify({
                    "wall": data.params,
                    "depend": {
                        __type: "Pointer",
                        className: "Houses",
                        objectId: data.houseId
                    }
                });
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + '/classes' + data.service,
                    dataType: 'json',
                    data: parseObj
                };
                return $http(options);
            };
            this.changeFloor = function (data) {
                var parseObj = JSON.stringify({
                    "wall": data.params
                });
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + '/classes' + data.service,
                    dataType: 'json',
                    data: parseObj
                };
                return $http(options);
            };

            this.getHousesList = function (data) {
                var query = 'where={"user":{"__type":"Pointer","className":"_User","objectId":"'+ CONFIG.USER_ID +'"}}',
                    options = {
                        method: data.type,
                        headers: CONFIG.HEADER,
                        url: CONFIG.URL + '/classes' + data.service + '?' + query,
                        dataType: 'json',
                        data: data.params
                    };
                return $http(options);
            };
            this.getHouse = function (data) {
                var query = 'where={"depend":{"__type":"Pointer","className":"Houses","objectId":"'+ data.objId +'"}}',
                    options = {
                        method: data.type,
                        headers: CONFIG.HEADER,
                        url: CONFIG.URL + '/classes' + data.service + '?' + query,
                        dataType: 'json'
                };
                return $http(options);
            };
            this.getFloor = function (data) {
                console.log('getFloor',data);
                var options = {
                        method: 'GET',
                        headers: CONFIG.HEADER,
                        url: CONFIG.URL + '/classes/Floors/'+data,
                        dataType: 'json'
                    };
                return $http(options);
            };
            this.removeFloor = function (data) {
                var options = {
                        method: data.type,
                        headers: CONFIG.HEADER,
                        url: CONFIG.URL + '/classes' + data.service,
                        dataType: 'json'
                    };
                return $http(options);
            };
            this.setFloorId = function (data) {
                CONFIG.FLOOR_ID = data;
            };
            this.getFloorId = function () {
                return CONFIG.FLOOR_ID;
            };

//            ***property service***
            this.setItems = function (data) {
                CONFIG.itemsObj = data;
            };
            this.getItems = function () {
                return CONFIG.itemsObj;
            }

    }