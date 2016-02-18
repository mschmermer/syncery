(function () {

    angular
        .module('syncery')
        .controller('CustomerDetailsCtrl', CustomerDetailsCtrl);


    function CustomerDetailsCtrl($scope, UserSvc, LoginFactory, $state, $timeout,$location,
                                 $stateParams, CustomerSvc,$ionicScrollDelegate, currency) {

        $scope.id = $stateParams.id;
        $scope.currency = currency;
        $scope.customer = CustomerSvc.getCustomersById($scope.id);

        $scope.icon = {
            contact: 'icon ion-ios-arrow-down',
            bookings: 'icon ion-ios-arrow-down'
        };
        $scope.hide = {
            contact: true,
            bookings: true
        };


        $scope.showMore = function (field) {
            if ($scope.hide[field]) {
                $scope.hide[field] = false;
                $scope.icon[field] = 'icon ion-ios-arrow-up';
            } else {
                $scope.hide[field] = true;
                $scope.icon[field] = 'icon ion-ios-arrow-down';
            }
            $timeout( function() {
                $ionicScrollDelegate.resize();
                $location.hash(field);
                var delegate = $ionicScrollDelegate.$getByHandle('customerDetails');
                delegate.anchorScroll(true);
            }, 200);
        }

        $scope.edit = function(id){
            $state.go('app.addCustomer', {'id': id});
        }

        $scope.showAllBookings = function(id){
            alert('all Bookings for '+ id);
        }
    }
})();