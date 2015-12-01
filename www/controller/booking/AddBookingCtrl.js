(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, $ionicSlideBoxDelegate,
                            $ionicPopover, language, $ionicScrollDelegate, $timeout, $location) {

        $scope.accommodations = ['Unterkunft1','Unterkunft2','Unterkunft3','Unterkunft4']
    }

})
();