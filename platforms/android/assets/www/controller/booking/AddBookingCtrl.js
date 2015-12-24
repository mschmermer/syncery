(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, $ionicPopup) {

        $scope.accommodations = ['Unterkunft1', 'Unterkunft2', 'Unterkunft3', 'Unterkunft4'];

        $scope.data = {};

        $scope.selectDate = function (date) {
            console.log(date);
        }

        $scope.input = function (input) {
            $scope.data[input['name']] = input['value'];
            console.log($scope.data);
        }

    }
})();