(function () {

    angular
        .module('syncery')
        .controller('AddCustomerCtrl', AddCustomerCtrl);


    function AddCustomerCtrl($scope, $stateParams, CustomerSvc) {

        $scope.id = $stateParams.id;

        $scope.customer = CustomerSvc.getCustomersById($scope.id);

        console.log($scope.customer);

    }
})();