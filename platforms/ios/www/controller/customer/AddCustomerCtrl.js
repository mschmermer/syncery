(function () {

    angular
        .module('syncery')
        .controller('AddCustomerCtrl', AddCustomerCtrl);


    function AddCustomerCtrl($scope, $stateParams, CustomerSvc, $ionicModal, $state) {

        $scope.selector={};
        $scope.selector['gender'] = {
            items: ['Herr','Frau'],
            name: 'gender',
            selected: 'Herr'
        };

        if ($stateParams.id) {
            $scope.id = $stateParams.id;
            $scope.customer = CustomerSvc.getCustomersById($scope.id);
            console.log($scope.customer);
        }

        if ($stateParams.selector) {
            $scope.selector[$stateParams.selector.name].selected = $stateParams.selector.selected;
            console.log($stateParams.selector);
        }

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
            //$state.go('app.selector', {'selector': $scope.selector['gender'], 'view': 'addCustomer'});
        }

    }
})();