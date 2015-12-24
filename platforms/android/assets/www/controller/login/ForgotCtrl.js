(function () {

    angular
        .module('syncery')
        .controller('ForgotCtrl', ForgotCtrl);


    function ForgotCtrl($scope, UserSvc, LoginFactory, $state, $ionicSideMenuDelegate, $ionicHistory) {

        $scope.$on('$ionicView.enter', function () {
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function () {
            $ionicSideMenuDelegate.canDragContent(true);
        });

    }
})();