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

        if (window.StatusBar) {
            $scope.$on('$ionicView.beforeEnter', function(){
                StatusBar.hide();
            });

            $scope.$on('$ionicView.beforeLeave', function(){
                StatusBar.show();
            });
        }
    }
})();