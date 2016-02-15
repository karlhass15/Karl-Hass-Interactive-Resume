var myApp = angular.module("myApp", ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'ngMaterial', 'ngAria']);

//'ngAria'

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/header', {
            templateUrl: "/assets/views/templates/header.html"
        }).
        when('/experience', {
            templateUrl: "/assets/views/templates/experience.html",
            controller: "lightboxController"

        }).
        when('/footer', {
            templateUrl: "/assets/views/templates/footer.html",
            controller: "ContactFormController"
        })
}]);



