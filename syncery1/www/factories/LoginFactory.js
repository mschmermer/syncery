(function () {

    angular
        .module('syncery')
        .factory('LoginFactory', LoginFactory);


    function LoginFactory($scope, $ionicPopup, $ionicLoading){

        Login = {
            login: login
        };

        function login(){
            $scope.showAlert = function() {
                var alertPopup = $ionicPopup.alert({
                    title: 'Fehler beim Login',
                    template: 'Der Benutzername oder das Passwort stimmen nicht überein.',
                    buttons: [
                        {
                            text: '<b>OK</b>',
                            type: 'button-dark'}
                    ]
                });
            };
            $scope.showAlert();
        }

        return Login;
    }
})();