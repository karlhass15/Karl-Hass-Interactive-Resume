var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngMaterial']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/header', {
            templateUrl: "/assets/views/templates/header.html"
        }).
        when('/experience', {
            templateUrl: "/assets/views/templates/experience.html"
        }).
        when('/footer', {
            templateUrl: "/assets/views/templates/footer.html",
            controller: "ContactFormController"
        })
}]);