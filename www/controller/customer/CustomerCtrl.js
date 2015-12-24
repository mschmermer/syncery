(function () {

    angular
        .module('syncery')
        .controller('CustomerCtrl', CustomerCtrl);


    function CustomerCtrl($scope, $state,$location,$timeout,
                          $ionicScrollDelegate, $ionicFilterBar, CustomerSvc, $translate) {

        $scope.listCanSwipe = true;

        $scope.data = {};
        $scope.data.showSearch = true;

        $scope.text={};

        $translate('cancel')
            .then(function (translatedValue) {
                $scope.text['cancel'] = translatedValue;
            });

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('customer').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.data.customers,
                    update: function (filteredItems) {
                        $scope.data.customers = filteredItems;
                    },
                    filterProperties: ['name'],
                    cancelText: $scope.text['cancel'],
                });
            }
        }

        $scope.data.customers = CustomerSvc.getCustomers();

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