(function () {

    angular
        .module('syncery')
        .controller('AccountDataCtrl', AccountDataCtrl);


    function AccountDataCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc,$ionicScrollDelegate, $timeout, $location) {

        $scope.user = UserSvc.getUser();


    }
})();