(function () {

    angular
        .module('syncery')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $translate, language, UserSvc,$state, $ionicSideMenuDelegate, $ionicHistory) {
        // Form data for the login modal
        $scope.loginData = {};
        $translate.use(language);

        $scope.data={};

        $scope.data.user = UserSvc.getUser();

        $scope.data.open_bookings = 5;

        $scope.menu_class = {};
        $scope.menu_class.dashboard = 'selected';
        $scope.menu_class.selected = "dashboard";

        $scope.changeView = function(view){
            $scope.menu_class[$scope.menu_class.selected] = "";
            $scope.menu_class[view] = "selected";
            $scope.menu_class.selected = view;
            if(view == 'search'){
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });
                $state.go('app.search');
            }
        }

        /*
        $scope.settings = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.settings');
            $ionicSideMenuDelegate.toggleLeft();
            $scope.menu_class[$scope.menu_class.selected] = "";
        }


        /*if(!UserSvc.isLogged()){
            $state.go('app.login');
        }*/

    }
})();