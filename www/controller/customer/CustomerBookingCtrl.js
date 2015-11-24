(function () {

    angular
        .module('syncery')
        .controller('CustomerBookingCtrl', CustomerBookingCtrl);


    function CustomerBookingCtrl($scope, $timeout, $location, $ionicScrollDelegate, $state, AccommodationSvc) {
        $scope.listCanSwipe = true;

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';

        $scope.bookings = [
            {name: 'test1', id: 1, from: '21.1.2015', to: '23.1.2015'},
            {name: 'test2', id: 2, from: '21.2.2015', to: '23.2.2015'},
            {name: 'test3', id: 3, from: '21.3.2015', to: '23.3.2015'},
            {name: 'test4', id: 4, from: '21.4.2015', to: '23.4.2015'},
            {name: 'test5', id: 5, from: '21.5.2015', to: '23.5.2015'},
            {name: 'test6', id: 6, from: '21.6.2015', to: '23.6.2015'},
            {name: 'test7', id: 7, from: '21.7.2015', to: '23.7.2015'},
            {name: 'test8', id: 8, from: '21.8.2015', to: '23.8.2015'},
        ];


        $timeout(function () {
            $location.hash('customer_bookings_list');
            var delegate = $ionicScrollDelegate.$getByHandle('customer_bookings');
            delegate.anchorScroll(true);
        }, 200);

        $scope.data.showSearch = true;

        $scope.cancel = function () {
            $timeout(function () {
                $location.hash('customer_bookings_list');
                var delegate = $ionicScrollDelegate.$getByHandle('customer_bookings');
                delegate.anchorScroll(true);
            }, 200);
            $scope.data.searchQuery = '';
        }

        $scope.delete = function (id) {
            alert(id);
        }

        $scope.edit = function (id) {
            alert(id);
        }
    }
})();