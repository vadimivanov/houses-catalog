angular.module('networkService', ['ngResource'])

    .service("authService", function( $http, $q ) {
        var REST_API_KEY = 'hxzGz9aRbi9czdiHQ0qYw1dHDaZwzO7Ctc1WdUR4',
            APP_ID = 'FgxhEjiIvdA85ZAeqraJw6HlgKdBFsGBv0tlmUAa',
            SESSION_TOKEN = '',
            HEADER = {
                'X-Parse-Application-Id': APP_ID,
                'X-Parse-REST-API-Key':  REST_API_KEY,
                contentType: "application/json"
            },
            URL = "https://api.parse.com/1";

        return({
            getToken: getToken,
            signIn: signIn,
            signUp: signUp,
            logout: logout
        });
        function getToken(token) {
            SESSION_TOKEN = token;
        }
        function signIn(data) {
            var req = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + data.service,
                    dataType: 'json',
                    params: data.params
                };
            var request = $http(req);
            return request;
        }
        function signUp(data) {
            console.log('signUp',data);
                var req = {
                    method: data.type,
                    headers: HEADER,
                    url: URL + data.service,
                    dataType: 'json',
                    data: data.params
                };
            var request = $http(req);
            return request;
        }
        function logout(data) {
            var req = {
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
            var request = $http(req);
            return request;
        }
        function saveHouse() {

        }
        function saveFloor() {

        }
        function getHousesList() {

        }
    });