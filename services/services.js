angular
    .module('app')
    .constant('CONFIG', {
        REST_API_KEY: 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
        APP_ID: 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
        URL: "https://api.parse.com/1",
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
//angular.module('app')
    .service('network', network);

network.$inject = ['$http', 'CONFIG'];

function network($http, CONFIG) {

//angular.module('networkService', ['ngResource'])
//    .constant('CONFIG', {
//        REST_API_KEY: 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
//        APP_ID: 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
//        URL: "https://api.parse.com/1",
//        HEADER: {
//            'X-Parse-Application-Id': 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
//            'X-Parse-REST-API-Key':  'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
//            contentType: "application/json"
//        },
//        SESSION_TOKEN: '',
//        msg: null,
//        itemsObj: {part1: "partWall", part2: "partWall"},
//        HOUSE_ID: null,
//        FLOOR_ID: null,
//        USER_ID: null
//    })
//    .service("authService", function ($http, CONFIG) {
//        var REST_API_KEY = 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
//            APP_ID = 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
//            SESSION_TOKEN = '',
//            HEADER = {
//                'X-Parse-Application-Id': APP_ID,
//                'X-Parse-REST-API-Key':  REST_API_KEY,
//                contentType: "application/json"
//            },
//            URL = "https://api.parse.com/1",
//            msg = null,
//            itemsObj = {part1: "partWall", part2: "partWall"},
//            HOUSE_ID = null,
//            FLOOR_ID = null,
//            USER_ID = null,
          var  api = {
//                getToken: getToken,
//                getWallComponents: getWallComponents,
                signIn: signIn
//                signUp: signUp,
//                logout: logout,
//                setUserId: setUserId,
//                getHousesList: getHousesList,
//                saveFloor: saveFloor,
//                getHouse: getHouse,
//                saveHouse: saveHouse,
//                removeHouse: removeHouse,
//                setData: setData,
//                getData: getData,
//                setHouseId: setHouseId,
//                getHouseId: getHouseId,
//                getFloor: getFloor,
//                setItems: setItems,
//                getItems: getItems,
//                removeFloor: removeFloor,
//                changeFloor: changeFloor,
//                getFloorId: getFloorId,
//                setFloorId: setFloorId
            };
            return api;

//          ***messages service***
//            function setData(data) {
//                CONFIG.msg = data;
//            }
//            function getData() {
//                return CONFIG.msg;
//            }
//
////          ***auth service***
            function signIn(data) {
                var options = {
                    method: data.type,
                    headers: CONFIG.HEADER,
                    url: CONFIG.URL + data.service,
                    dataType: 'json',
                    params: data.params
                };
                return $http(options);
            }
//
//            function getToken(token) {
//                CONFIG.SESSION_TOKEN = token;
//            }
//
//            function signUp(data) {
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + data.service,
//                    dataType: 'json',
//                    data: data.params
//                };
//                var request = $http(options);
//                return request;
//            }
//
//            function logout(data) {
//                var options = {
//                    method: data.type,
//                    headers: {
//                        'X-Parse-Application-Id': APP_ID,
//                        'X-Parse-REST-API-Key': REST_API_KEY,
//                        'X-Parse-Session-Token': SESSION_TOKEN,
//                        contentType: "application/json"
//                    },
//                    url: URL + data.service,
//                    dataType: 'json'
//                };
//                var request = $http(options);
//                return request;
//            }
//            function setUserId(data) {
//                CONFIG.USER_ID = data;
//            }
//
////          ***property service***
//            function getWallComponents(data) {
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + '/classes' + data.service,
//                    dataType: 'json'
//                };
//                var request = $http(options);
//                return request;
//            }
//            function setHouseId(data) {
//                CONFIG.HOUSE_ID = data;
//            }
//            function getHouseId() {
//                return CONFIG.HOUSE_ID;
//            }
//            function saveHouse(data) {
//                var parseObj = JSON.stringify({
//                    name: data.name,
//                    user: {
//                        __type: "Pointer",
//                        className: "_User",
//                        objectId: CONFIG.USER_ID
//                    }
//                });
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + '/classes' + data.service,
//                    dataType: 'json',
//                    data: parseObj
//                };
//                console.log('options',options);
//                var request = $http(options);
//                return request;
//            }
//            function removeHouse(data) {
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + '/classes' + data.service,
//                    dataType: 'json'
//                };
//                var request = $http(options);
//                return request;
//            }
//            function removeHouseFloors(data) {
//                var query = 'where={"depend":{"__type":"Pointer","className":"Houses","objectId":"'+ data.houseId +'"}}',
//                    options = {
//                        method: data.type,
//                        headers: CONFIG.HEADER,
//                        url: CONFIG.URL + '/classes/Floors' + '?' + query,
//                        dataType: 'json'
//                    };
//                var request = $http(options);
//                return request;
//            }
//
//            function saveFloor(data) {
//                var parseObj = JSON.stringify({
//                    "wall": data.params,
//                    "depend": {
//                        __type: "Pointer",
//                        className: "Houses",
//                        objectId: data.houseId
//                    }
//                });
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + '/classes' + data.service,
//                    dataType: 'json',
//                    data: parseObj
//                };
//                console.log('options',options);
//                var request = $http(options);
//                return request;
//            }
//            function changeFloor(data) {
//                var parseObj = JSON.stringify({
//                    "wall": data.params
//                });
//                var options = {
//                    method: data.type,
//                    headers: CONFIG.HEADER,
//                    url: CONFIG.URL + '/classes' + data.service,
//                    dataType: 'json',
//                    data: parseObj
//                };
//                var request = $http(options);
//                return request;
//            }
//
//            function getHousesList(data) {
//                var query = 'where={"user":{"__type":"Pointer","className":"_User","objectId":"'+ USER_ID +'"}}',
//                    options = {
//                        method: data.type,
//                        headers: CONFIG.HEADER,
//                        url: CONFIG.URL + '/classes' + data.service + '?' + query,
//                        dataType: 'json',
//                        data: data.params
//                    };
//                var request = $http(options);
//                return request;
//            }
//            function getHouse(data) {
//                var query = 'where={"depend":{"__type":"Pointer","className":"Houses","objectId":"'+ data.objId +'"}}',
//                    options = {
//                        method: data.type,
//                        headers: CONFIG.HEADER,
//                        url: CONFIG.URL + '/classes' + data.service + '?' + query,
//                        dataType: 'json'
//                };
//                var request = $http(options);
//                return request;
//            }
//            function getFloor(data) {
//                console.log('getFloor',data);
//                var options = {
//                        method: 'GET',
//                        headers: CONFIG.HEADER,
//                        url: CONFIG.URL + '/classes/Floors/'+data,
//                        dataType: 'json'
//                    };
//                var request = $http(options);
//                return request;
//            }
//            function removeFloor(data) {
//                var options = {
//                        method: data.type,
//                        headers: CONFIG.HEADER,
//                        url: CONFIG.URL + '/classes' + data.service,
//                        dataType: 'json'
//                    };
//                var request = $http(options);
//                return request;
//            }
//            function setFloorId(data) {
//                CONFIG.FLOOR_ID = data;
//            }
//            function getFloorId() {
//                return CONFIG.FLOOR_ID;
//            }
//
////            ***property service***
//            function setItems(data) {
//                CONFIG.itemsObj = data;
//            }
//            function getItems() {
//                return CONFIG.itemsObj;
//            }

    }