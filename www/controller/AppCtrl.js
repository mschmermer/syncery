(function () {

    angular
        .module('syncery')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $translate, language, UserSvc,$state) {
        // Form data for the login modal
        $scope.loginData = {};
        $translate.use(language);

        $scope.data={};

        $scope.data.user = UserSvc.getUser();
        $scope.data.profiles = UserSvc.getProfiles();
        $scope.data.open=false
        $scope.data.classes={};
        $scope.data.classes['arrow']='ion-ios-arrow-down';
        $scope.data.hide_user_selector=true;

        $scope.data.open_bookings = 5;

        $scope.user_selector = function(){
            if($scope.data.open){
                $scope.data.open = false;
                $scope.data.hide_user_selector=true;
                $scope.data.classes['arrow']='ion-ios-arrow-down';
            }else{
                $scope.data.open = true;
                $scope.data.hide_user_selector=false;
                $scope.data.classes['arrow']='ion-ios-arrow-up';
            }
            console.log($scope.data);
        }




        /*if(!UserSvc.isLogged()){
            $state.go('app.login');
        }*/

    }
})();