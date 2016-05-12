(function () {

    angular
        .module('syncery')
        .controller('LoginCtrl', LoginCtrl);


    function LoginCtrl($scope, UserSvc, LoginFactory, $state, $ionicSideMenuDelegate, $ionicHistory, ngFB) {

        $scope.$on('$ionicView.enter', function () {
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function () {
            $ionicSideMenuDelegate.canDragContent(true);
        });

        $scope.create = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.create');
        }

        $scope.dologin = function(){
            UserSvc.setLogged(true);
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.home');
        }

        $scope.facebookLogin = function(){
            ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
                function (response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                        $scope.closeLogin();
                    } else {
                        alert('Facebook login failed');
                    }
                });
        }
    }
})();