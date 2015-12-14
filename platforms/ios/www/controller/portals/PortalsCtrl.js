(function () {

    angular
        .module('syncery')
        .controller('PortalsCtrl', PortalsCtrl);


    function PortalsCtrl($scope, UserSvc, $state,$timeout, $location,$ionicScrollDelegate ) {
        $scope.addPortal = function(){
            alert('add Portal');
        }

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';
        $scope.listCanSwipe = true;

        $timeout( function() {
            $location.hash('portal_list');
            var delegate = $ionicScrollDelegate.$getByHandle('portals');
            delegate.anchorScroll(true);
        }, 200);

        $scope.data.showSearch = true;

        $scope.cancel = function () {
            $timeout( function() {
                $location.hash('portal_list');
                var delegate = $ionicScrollDelegate.$getByHandle('portals');
                delegate.anchorScroll(true);
            }, 200);
            $scope.data.searchQuery = '';
        }
    }
})();