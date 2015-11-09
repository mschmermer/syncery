(function () {

    angular
        .module('syncery')
        .controller('AccountCtrl', AccountCtrl);


    function AccountCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc,$ionicScrollDelegate, $timeout, $location) {

        $scope.user = UserSvc.getUser();

        $scope.icon = {
            MasterData: 'icon ion-chevron-down'
        };
        $scope.hide = {
            MasterData: true
        };

        $scope.imgEdit = function(){

        }

        $scope.showMore = function (field) {
            if ($scope.hide[field]) {
                $scope.hide[field] = false;
                $scope.icon[field] = 'icon ion-chevron-up';
            } else {
                $scope.hide[field] = true;
                $scope.icon[field] = 'icon ion-chevron-down';
            }
            $timeout( function() {
                $ionicScrollDelegate.resize();
                $location.hash(field);
                var delegate = $ionicScrollDelegate.$getByHandle('account');
                delegate.anchorScroll(true);
            }, 200);
        }
    }
})();