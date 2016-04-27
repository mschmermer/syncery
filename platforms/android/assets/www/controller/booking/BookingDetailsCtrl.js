(function () {

    angular
        .module('syncery')
        .controller('BookingDetailsCtrl', BookingDetailsCtrl);


    function BookingDetailsCtrl($scope, $stateParams, BookingSvc){
        $scope.id = $stateParams.id;
        $scope.booking = BookingSvc.getBookingDataById($scope.id);
        console.log($scope.booking);
    }
})();