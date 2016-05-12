(function () {

    angular
        .module('syncery')
        .controller('InvoiceAdressCtrl', InvoiceAdressCtrl);


    function InvoiceAdressCtrl($scope, UserSvc, $ionicModal) {

        $scope.user = UserSvc.getUser();

        $scope.selector={};
        $scope.selector['gender'] = {
            items: ['Herr','Frau'],
            name: 'gender',
            selected: $scope.user.title
        };

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal_selector = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal_selector.show();
            //$state.go('app.selector', {'selector': $scope.selector['gender'], 'view': 'addCustomer'});
        }

    }
})();