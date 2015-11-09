(function () {

    angular
        .module('syncery')
        .controller('SettingsCtrl', SettingsCtrl);


    function SettingsCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc) {
        $scope.signOff = function(){
            UserSvc.logout();
            $state.go('app.login');
        }
    }
})();