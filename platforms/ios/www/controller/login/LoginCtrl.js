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
            /*GooglePlus.login().then(function (authResult) {
                console.log(authResult);

                GooglePlus.getUser().then(function (user) {
                    console.log(user);
                });
            }, function (err) {
                console.log(err);
            });*/
            window.plugins.googleplus.login(
                {},
                function (user_data) {
                    // For the purpose of this example I will store user data on local storage
                    UserService.setUser({
                        userID: user_data.userId,
                        name: user_data.displayName,
                        email: user_data.email,
                        picture: user_data.imageUrl,
                        accessToken: user_data.accessToken,
                        idToken: user_data.idToken
                    });

                    $ionicLoading.hide();
                    $state.go('app.home');
                },
                function (msg) {

                }
            );
        };
    }
})();