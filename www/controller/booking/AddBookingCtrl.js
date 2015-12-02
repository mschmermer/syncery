(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, $ionicPopup) {

        $scope.accommodations = ['Unterkunft1', 'Unterkunft2', 'Unterkunft3', 'Unterkunft4'];

        $scope.selectDate = function(date){
            console.log(date);
        }

    }
})();