(function () {

    angular
        .module('syncery')
        .controller('BookingDetailsCtrl', BookingDetailsCtrl);


    function BookingDetailsCtrl($scope, $stateParams, BookingSvc, $ionicHistory, $ionicActionSheet){
        $scope.id = $stateParams.id;
        $scope.booking = BookingSvc.getBookingDataById($scope.id);
        console.log($scope.booking);

        $scope.showActionsheet = function() {

            $ionicActionSheet.show({
                buttons: [
                    { text: '<i class="icon ion-edit"></i> Bearbeiten' },
                    { text: '<i class="icon ion-checkmark"></i> Akzeptieren' },
                ],
                destructiveText: 'Löschen',
                cancelText: 'Abbrechen',
                cancel: function() {

                },
                buttonClicked: function(index) {

                    return true;
                },
                destructiveButtonClicked: function() {

                    return true;
                }
            });
        };
    }
})();