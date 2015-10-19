(function () {

    angular
        .module('syncery')
        .service('UserSvc', UserSvc);


    function UserSvc($scope){

        $scope = this;

        $scope.user = false;

        service = {
            setUser: setUser,
            getUser: getUser,
            logout: logout
        };
        return service;

        function getUser(){
            return $scope.user;
        }

        function setUser(user){
            $scope.user = user;
        }

        function logout(){
            $scope.user = false;
        }

    }
})();