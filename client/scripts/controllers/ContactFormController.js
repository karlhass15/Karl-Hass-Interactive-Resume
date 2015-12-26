//var myApp = angular.module("myApp", ['ngRoute', 'ngAnimate', 'ngMaterial']);


angular.module('myApp').controller('ContactFormController', ['$scope', '$http', '$mdToast', '$document', '$animate',
    function($scope, $http, $mdToast, $document, $animate) {


        this.sendMail = function () {

            var data = ({
                contactName : this.contactName,
                contactEmail : this.contactEmail,
                contactMsg : this.contactMsg
            });



            $scope.toastPosition = {
                bottom: true,
                top: false,
                left: true,
                right: false
            };
            $scope.getToastPosition = function () {
                return Object.keys($scope.toastPosition)
                    .filter(function (pos) {
                        return $scope.toastPosition[pos];
                    })
                    .join(' ');

            };
            $http.post('/contact-form', data).
                success(function(data, status, headers, config) {

                    $mdToast.show(
                        $mdToast.simple()
                            .parent( $document[0].querySelector('#toastBounds'))

                            .position($scope.getToastPosition())
                            .content('Hi ' + data.contactName + ' Thank you for your message! ' +
                            ' I look forward to speaking with you more - Karl')
                            .hideDelay(5000)
                    );
                }).
                error(function(data, status, headers, config) {
                });

        };
    }
]);


