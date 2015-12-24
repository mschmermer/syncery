(function () {

    angular
        .module('syncery')
        .controller('SelectPortalCtrl', SelectPortalCtrl);


    function SelectPortalCtrl($scope, UserSvc, PortalSvc, $state,$timeout, $location,$ionicScrollDelegate ) {
        $scope.addPortal = function(){
            $state.go();
        }

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';
        $scope.listCanSwipe = true;

        $scope.portals = PortalSvc.getPortals();

        $timeout( function() {
            $location.hash('portal_list');
            var delegate = $ionicScrollDelegate.$getByHandle('portals');
            delegate.anchorScroll(true);
        }, 200);

        $scope.data.showSearch = true;

        $scope.cancel = function () {
            $timeout( function() {
                $location.hash('add_portal_list');
                var delegate = $ionicScrollDelegate.$getByHandle('addPortal');
                delegate.anchorScroll(true);
            }, 200);
            $scope.data.searchQuery = '';
        }
    }
})();