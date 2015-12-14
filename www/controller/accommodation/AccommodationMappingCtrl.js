(function () {

    angular
        .module('syncery')
        .controller('AccommodationMappingCtrl', AccommodationMappingCtrl);


    function AccommodationMappingCtrl($scope, PortalSvc, MappingSvc, $stateParams) {
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





    }
})();