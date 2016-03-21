(function () {

    angular
        .module('syncery')
        .controller('SelectPortalCtrl', SelectPortalCtrl);


    function SelectPortalCtrl($scope, $translate, PortalSvc, $state,$timeout, $location,$ionicScrollDelegate, $ionicFilterBar ) {
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

        $scope.text={};

        $translate('cancel')
            .then(function (translatedValue) {
                $scope.text['cancel'] = translatedValue;
            });

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('selectPortal').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.portals,
                    update: function (filteredItems) {
                        $scope.portals = filteredItems;
                    },
                    filterProperties: ['name'],
                    cancelText: $scope.text['cancel'],
                });
            }
        }
    }
})();