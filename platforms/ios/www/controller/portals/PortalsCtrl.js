(function () {

    angular
        .module('syncery')
        .controller('PortalsCtrl', PortalsCtrl);


    function PortalsCtrl($scope, UserSvc, PortalSvc, $state,$translate, $ionicFilterBar,$ionicScrollDelegate ) {
        $scope.addPortal = function(){
            $state.go('app.selectPortal');
        }

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';
        $scope.listCanSwipe = true;

        $scope.portals = PortalSvc.getConfigPortals();

        /*console.log($scope.portals);

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
        }*/

        $scope.text={};

        $translate('cancel')
            .then(function (translatedValue) {
                $scope.text['cancel'] = translatedValue;
            });

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('portals').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.portals,
                    update: function (filteredItems) {
                        $scope.portals = filteredItems;
                    },
                    filterProperties: ['portal_name'],
                    cancelText: $scope.text['cancel'],
                });
            }
        }

        $scope.delete = function(id){
            PortalSvc.deletePortal(id);
        }
    }
})();