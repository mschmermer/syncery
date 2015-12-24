(function () {

    angular
        .module('syncery')
        .controller('SettingsCtrl', SettingsCtrl);


    function SettingsCtrl($scope, $state, UserSvc) {
        $scope.signOff = function(){
            UserSvc.logout();
            $state.go('app.login');
        }

    }
})();