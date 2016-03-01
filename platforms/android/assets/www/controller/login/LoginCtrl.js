(function () {

    angular
        .module('syncery')
        .controller('LoginCtrl', LoginCtrl);


    function LoginCtrl($scope, UserSvc, LoginFactory, $state, $ionicSideMenuDelegate, $ionicHistory, $ionicNavBarDelegate) {

        $scope.$on('$ionicView.enter', function () {
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function () {
            $ionicSideMenuDelegate.canDragContent(true);
        });


        $scope.dologin = function(){
            UserSvc.setLogged(true);
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.home');
        }
    }
})();