(function () {

    angular
        .module('syncery')
        .controller('PortalsCtrl', PortalsCtrl);


    function PortalsCtrl($scope, UserSvc, PortalSvc, $state,$timeout, $location,$ionicScrollDelegate ) {
        $scope.addPortal = function(){
            $state.go('app.selectPortal');
        }

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';
        $scope.listCanSwipe = true;

        $scope.portals = PortalSvc.getConfigPortals();

        console.log($scope.portals);

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

        $scope.delete = function(id){
            PortalSvc.deletePortal(id);
        }
    }
})();