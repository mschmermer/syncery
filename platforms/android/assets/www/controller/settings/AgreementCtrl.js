(function () {

    angular
        .module('syncery')
        .controller('AgreementCtrl', AgreementCtrl);


    function AgreementCtrl($scope, $location, $timeout, $ionicScrollDelegate) {
        $scope.contract_remaining = 15;
        $scope.contract_total = 30;

        $scope.number= '1';
        $scope.payment = 'monthly';

        $scope.icon = {
            invoice_address: 'icon ion-chevron-down',
            invoices: 'icon ion-chevron-down'
        };
        $scope.hide = {
            invoice_address: true,
            invoices: true
        };

        $scope.translationData = {
            lastdays: $scope.contract_remaining,
        };

        $scope.switchContract = function(options){
            console.log(options);
        }

        $scope.showMore = function (field) {
            if ($scope.hide[field]) {
                $scope.hide[field] = false;
                $scope.icon[field] = 'icon ion-chevron-up';
            } else {
                $scope.hide[field] = true;
                $scope.icon[field] = 'icon ion-chevron-down';
            }
            $timeout( function() {
                $ionicScrollDelegate.resize();
                $location.hash(field);
                var delegate = $ionicScrollDelegate.$getByHandle('agreement');
                delegate.anchorScroll(true);
            }, 200);
        }
    }
})();