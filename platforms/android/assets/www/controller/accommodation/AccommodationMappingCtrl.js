(function () {

    angular
        .module('syncery')
        .controller('AccommodationMappingCtrl', AccommodationMappingCtrl);


    function AccommodationMappingCtrl($scope, PortalSvc, MappingSvc, $stateParams, $ionicModal) {
        $scope.acc_id = $stateParams.acc_id;
        $scope.portal_id = $stateParams.portal_id;
        $scope.portals = [];

        PortalSvc.getConfigPortals().forEach(function(portal) {
            $scope.portals.push(portal.portal_name);
        });

        $scope.selectPortal = function(portal){
            $scope.portal_id = PortalSvc.getPortalByName(portal).id;
            $scope.mapping = MappingSvc.getMappingByPortal($scope.acc_id, $scope.portal_id);
        }

        $scope.selector={};
        $scope.selector['portals'] = {
            items: $scope.portals,
            name: 'portals',
            selected: $scope.portals[0]
        };

        $scope.selectPortal($scope.portals[0]);

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
        }

        $scope.$watch('selector.portals.selected', function (newvalue) {
            $scope.selectPortal(newvalue);
        });



    }
})();