

myApp.controller('lightboxController', ['$scope',
    function ($scope, Lightbox) {
    $scope.images = [
        {
            'url': 'http://i.imgur.com/dMLwZjP.png',
            'thumbUrl': 'http://i.imgur.com/cLgmv0y.png?1',
            'caption': 'ConsciousShopperApp.com'
        },
        {
            'url': 'http://i.imgur.com/5Q9t0sX.png',
            'thumbUrl': 'http://i.imgur.com/KKmvkZq.png?1',
            'caption': 'Pinder.herokuapp.com'

        },
        {
            'url': 'http://i.imgur.com/o04MsZW.png',
            'thumbUrl': 'http://i.imgur.com/NIknVv4.png?1',
            'caption': 'layoutnumber1.herokuapp.com'
        },
        {
            'url': 'http://i.imgur.com/ZvBA8yu.png',
            'thumbUrl': 'http://i.imgur.com/WA9VfV5.png?1',
            'caption': 'reclaimedartcraftsman.com'

        }

    ];

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
}]);

//
//myApp.config(function (LightboxProvider) {
//    LightboxProvider.getImageUrl = function (image) {
//        return  image.getName();
//    };
//
//    LightboxProvider.getImageCaption = function (image) {
//        return image.label;
//    };
//});
//
//
//myApp.config(function (LightboxProvider) {
//    LightboxProvider.fullScreenMode = true;
//});