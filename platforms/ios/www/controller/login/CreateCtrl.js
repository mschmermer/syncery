(function () {

    angular
        .module('syncery')
        .controller('CreateCtrl', CreateCtrl);


    function CreateCtrl($scope, UserSvc, LoginFactory, $state, $ionicSideMenuDelegate, $ionicHistory) {
        $scope.signup = function(){

        }
        $scope.login = function(){
            $state.go('app.login');
        }
    }
})();