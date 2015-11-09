(function () {

    angular
        .module('syncery')
        .controller('AgreementCtrl', AgreementCtrl);


    function AgreementCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc) {
        $scope.contract_remaining = 15;
        $scope.contract_total = 30;

        $scope.test= '1';

        $scope.translationData = {
            lastdays: $scope.contract_remaining,
        };

        $scope.switchContract = function(options){
            console.log(options);
        }
    }
})();