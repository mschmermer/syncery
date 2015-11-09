(function () {

    angular
        .module('syncery')
        .controller('CustomerCtrl', CustomerCtrl);


    function CustomerCtrl($scope, UserSvc, LoginFactory, $state,$location,$timeout, $ionicScrollDelegate, $timeout, CustomerSvc) {

        $scope.listCanSwipe = true;

        $scope.data = {};
        $scope.data.showSearch = false;

        $scope.data.customers = CustomerSvc.getCustomers();

        $timeout( function() {
            $location.hash('customer_list');
            var delegate = $ionicScrollDelegate.$getByHandle('customer');
            delegate.anchorScroll(true);
        }, 200);

        $scope.data.showSearch = true;

        $scope.addCutomer = function () {
            $state.go('app.addCustomer');
        }
        $scope.cancel = function () {
            $location.hash('customer_list');
            var delegate = $ionicScrollDelegate.$getByHandle('customer');
            delegate.anchorScroll(true);
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