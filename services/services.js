angular.module('networkService', ['ngResource'])

    .service("authService", function ($http) {
        var REST_API_KEY = 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
            APP_ID = 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
            SESSION_TOKEN = '',
            HEADER = {
                'X-Parse-Application-Id': APP_ID,
                'X-Parse-REST-API-Key':  REST_API_KEY,
                contentType: "application/json"
            },
            URL = "https://api.parse.com/1",
            api = {
                getToken: getToken,
                signIn: signIn,
                signUp: signUp,
                logout: logout,
                getHousesList: getHousesList,
                saveFloor: saveFloor
            };
            return api;

            function signIn(data) {
                var options = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + data.service,
                    dataType: 'json',
                    params: data.params
                };
                var request = $http(options);
                return request;
            }

            function getToken(token) {
                SESSION_TOKEN = token;
            }

            function signUp(data) {
                var options = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + data.service,
                    dataType: 'json',
                    data: data.params
                };
                var request = $http(options);
                return request;
            }

            function logout(data) {
                var options = {
                    method: data.type,
                    headers: {
                        'X-Parse-Application-Id': APP_ID,
                        'X-Parse-REST-API-Key': REST_API_KEY,
                        'X-Parse-Session-Token': SESSION_TOKEN,
                        contentType: "application/json"
                    },
                    url: URL + data.service,
                    dataType: 'json'
                };
                var request = $http(options);
                return request;
            }

            function saveHouse(data) {

            }

            function saveFloor(data) {
                var parseObj = JSON.stringify({
                    "wall": {part1: "window", part2: "door"},
                    "depend": {
                        __type: "Pointer",
                        className: "Houses",
                        objectId: "gpe8zJK8fb"
                    }
                });
                var options = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + '/classes' + data.service,
                    dataType: 'json',
                    data: parseObj
                };
                console.log('options',options);
                var request = $http(options);
                return request;
            }

            function getHousesList(data) {
                var options = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + '/classes' + data.service,
                    dataType: 'json',
                    data: data.params
                };
                var request = $http(options);
                return request;
            }
            function getHouse(data) {
                var options = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + '/classes' + data.service,
                    dataType: 'json',
                    data:'where={"user":{"__type":"Pointer","className":"Houses","objectId":"'+ data +'"}}'
                };
                var request = $http(options);
                return request;
            }

    });