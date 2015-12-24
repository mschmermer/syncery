(function () {

    angular
        .module('syncery')
        .service('UserSvc', UserSvc);


    function UserSvc() {
        var vm = this;
        vm.logged = false;
        vm.user = {
            title: 'Herr',
            first_name: 'Marcus',
            name: 'Schmermer',
            address: 'Erieseering 22',
            plz: '10319',
            city: 'Berlin',
            country: 'Deutschland',
            telephone: '03094399851',
            mobile: '0151 63 42 68 41',
            email: 'ma.schmermer@gmail.com',
            img_url: 'https://yt3.ggpht.com/-zPvOjYvipv8/AAAAAAAAAAI/AAAAAAAAAAA/3kRkURdYIgk/s900-c-k-no/photo.jpg',
            username: 'ma.schmermer',
            password: '********',
            language: 'de'
        };

        service = {
            setUser: setUser,
            getUser: getUser,
            getLanguage: getLanguage,
            setLanguage: setLanguage,
            logout: logout,
            isLogged: isLogged,
            setLogged: setLogged
        };
        return service;

        function getUser() {
            return vm.user;
        }

        function setUser(user) {
            vm.user = user;
        }

        function setLanguage(language){
            vm.user.language = language;
        }

        function getLanguage(){
            return vm.user.language;
        }

        function logout() {
            vm.login=false;
        }

        function isLogged(){
            return vm.login;
        }

        function setLogged(){
            vm.login=true;
        }

    }
})();