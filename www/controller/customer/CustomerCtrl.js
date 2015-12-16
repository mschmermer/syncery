(function () {

    angular
        .module('syncery')
        .controller('CustomerCtrl', CustomerCtrl);


    function CustomerCtrl($scope, $state,$location,$timeout,
                          $ionicScrollDelegate, $ionicFilterBar, CustomerSvc) {

        $scope.listCanSwipe = true;

        $ionicScrollDelegate.$getByHandle('customer').getScrollPosition();

        $scope.data = {};
        $scope.data.showSearch = true;
        var open = 0;

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('customer').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.data.customers,
                    update: function (filteredItems) {
                        $scope.data.customers = filteredItems;
                    },
                    filterProperties: ['name','first_name']
                });
            }
            open = 1;
        }

        $scope.data.customers = CustomerSvc.getCustomers();

        $timeout( function() {
            $location.hash('customer_list');
            var delegate = $ionicScrollDelegate.$getByHandle('customer');
            delegate.anchorScroll(true);
        }, 200);

        $scope.addCutomer = function () {
            $state.go('app.addCustomer');
        }

        $scope.delete = function (id) {
            CustomerSvc.deleteCustomer(id);
        }

        $scope.edit = function (id) {
            $state.go('app.addCustomer', {'id': id});
        }

    }
})();