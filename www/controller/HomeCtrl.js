(function () {

    angular
        .module('syncery')
        .controller('HomeCtrl', HomeCtrl);


    function HomeCtrl($scope, $state, $ionicHistory) {

        $scope.contract_remaining = 13;
        $scope.contract_total = 30;

        $scope.translationData = {
            lastdays: $scope.contract_remaining,
            unfinished: '3',
            unpaid: '5'
        };

        $scope.unfinishedBookings = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.bookings', {tab_id: 1, filter: 'open'});
        }

        $scope.unpaidBookings = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.bookings', {tab_id: 1, filter: 'unpaid'});
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

        $scope.timeline = [
            {
                type: 'booking',
                name: 'Max Mustermann',
                date: '06.06.2016',
                booking_date: '06.06.2016',
                accommodation: 'Haus am See',
                portal: 'FeWo Direkt'
            },
            {
                type: 'cancel',
                name: 'Max Mustermann',
                date: '02.06.2016',
                booking_date: '06.06.2016',
                accommodation: 'Haus am See',
                portal: 'FeWo Direkt'
            },
            {
                type: 'departure',
                name: 'Max Mustermann',
                date: '02.06.2016',
                booking_date: '06.06.2016',
                accommodation: 'Haus am See',
                portal: 'FeWo Direkt'
            },
            {
                type: 'arrival',
                name: 'Max Mustermann',
                date: '02.06.2016',
                booking_date: '06.06.2016',
                accommodation: 'Haus am See',
                portal: 'FeWo Direkt'
            }
        ]
    }
})();