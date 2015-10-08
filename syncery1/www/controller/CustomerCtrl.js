(function () {

    angular
        .module('syncery')
        .controller('CustomerCtrl', CustomerCtrl);


    function CustomerCtrl($scope){

        $scope.customers = {
            1:{
                name: 'Marcus Schmermer',
                bookings: '1 / 3',
                last_booking: '22.09.15 - 30.10.15',
                profit: '0 €',
                outstanding_payments: '200€'
            },
            2:{
                name: 'Marcus Schmermer',
                bookings: '1 / 1',
                last_booking: '22.09.15 - 30.10.15',
                profit: '230 €',
                outstanding_payments: ''
            },
            3:{
                name: 'Marcus Schmermer',
                bookings: '1 / 45',
                last_booking: '22.09.15 - 30.10.15',
                profit: '1110 €',
                outstanding_payments: ''
            },
            4:{
                name: 'Marcus Schmermer',
                bookings: '1 / 3',
                last_booking: '22.09.15 - 30.10.15',
                profit: '1450 €',
                outstanding_payments: '150€'
            },
            5:{
                name: 'Marcus Schmermer',
                bookings: '1 / 3',
                last_booking: '22.09.15 - 30.10.15',
                profit: '150 €',
                outstanding_payments: ''
            },
        }

        $scope.searching = function(search){

        }
    }
})();