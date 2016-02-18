(function () {

    angular
        .module('syncery')
        .controller('SearchCustomerCtrl', SearchCustomerCtrl);


    function SearchCustomerCtrl($scope, $state,$location,$timeout,
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

        filterBarInstance = $ionicFilterBar.show({
            items: $scope.data.customers,
            update: function (filteredItems) {
                $scope.data.customers = filteredItems;
            },
            filterProperties: ['name'],
            cancelText: $scope.text['cancel'],
        });

        $scope.addCutomer = function () {
            $state.go('app.addCustomer');
        }

        $scope.selectCustomer = function(id){
            alert(id);

        }

    }
})();