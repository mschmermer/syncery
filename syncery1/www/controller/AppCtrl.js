(function () {

    angular
        .module('syncery')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $ionicModal, $translate, language, UserSvc, $state) {
        // Form data for the login modal
        $scope.loginData = {};
        $translate.use(language);


        /*if(!UserSvc.isLogged()){
            $state.go('app.login');
        }*/

    }
})();