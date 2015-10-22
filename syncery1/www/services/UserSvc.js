(function () {

    angular
        .module('syncery')
        .service('UserSvc', UserSvc);


    function UserSvc(){

        this.user = false;

        service = {
            setUser: setUser,
            getUser: getUser,
            logout: logout
        };
        return service;

        function getUser(){
            return this.user;
        }

        function setUser(user){
            this.user = user;
        }

        function logout(){
            this.user = false;
        }

    }
})();