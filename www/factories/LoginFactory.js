(function () {

    angular
        .module('syncery')
        .factory('LoginFactory', LoginFactory);


    function LoginFactory($ionicPopup, $ionicLoading){

        vm = this;

        Login = {
            login: login
        };

        function login(){
            vm.showAlert = function() {
                var alertPopup = $ionicPopup.show({
                    templateUrl: '/templates/login.html'
                });
            };
            vm.showAlert();
        }

        return Login;
    }
})();