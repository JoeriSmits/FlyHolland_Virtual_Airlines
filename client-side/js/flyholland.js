/**
 * Created by Joeri Smits on 06/11/2014.
 */

var theApp = angular.module("flyHollandApp", ['ngRoute']).
    config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when("/home", {
                    templateUrl: "templates/home.html",

                }).
                otherwise({
                    redirectTo: '/home'
                });
        }]);