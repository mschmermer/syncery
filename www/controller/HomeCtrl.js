(function () {

    angular
        .module('syncery')
        .controller('HomeCtrl', HomeCtrl);


    function HomeCtrl($scope, $state,language, $ionicHistory) {

        $scope.contract_remaining = 15;
        $scope.contract_total = 30;

        $scope.translationData = {
            lastdays: $scope.contract_remaining,
            unfinished: '3',
            unpaid: '5'
        };

        $scope.unfinishedBookings = function(){
            alert('to unfinished bookings')
        }

        $scope.unpaidBookings = function(){
            alert('to unpaid bookings');
        }

        $scope.extendContract = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.agreement');
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

    }
})();