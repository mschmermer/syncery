(function () {

    angular
        .module('syncery')
        .controller('LoginCtrl', LoginCtrl);


    function LoginCtrl($scope, UserSvc, $state, $ionicSideMenuDelegate, $ionicHistory, ngFB, GooglePlus) {

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
            ngFB.login({scope: 'email'}).then(
                function (response) {
                    if (response.status === 'connected') {
                        ngFB.api({
                            path: '/me',
                            params: {fields: 'id,name'}
                        }).then(
                            function (user) {
                                $scope.user = user;
                                $state.go('app.home');
                            },
                            function (error) {
                                alert('Facebook error: ' + error.error_description);
                            });

                    } else {
                        alert('Facebook login failed');
                    }
                }
            );
        }

        $scope.googleLogin = function () {
            GooglePlus.login().then(function (authResult) {
                console.log(authResult);

                GooglePlus.getUser().then(function (user) {
                    console.log(user);
                });
            }, function (err) {
                console.log(err);
            });
        };
    }
})();