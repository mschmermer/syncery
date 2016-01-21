(function () {

    angular
        .module('syncery')
        .controller('AddPortalCtrl', AddPortalCtrl);


    function AddPortalCtrl($scope, PortalSvc, $stateParams, $ionicLoading, $ionicHistory) {
        $scope.portal = PortalSvc.getPortalById($stateParams.id);
        $scope.input ={};
        $scope.config_portal = PortalSvc.getConfigPortalsById($stateParams.id);
        if($scope.config_portal){
            console.log($scope.config_portal);
            $scope.input.name = $scope.config_portal.portal_name;
            $scope.input.mail = $scope.config_portal.mail;
            $scope.input.key = $scope.config_portal.key;
            $scope.input.password = $scope.config_portal.password;
            $scope.input.sync_id = $scope.config_portal.sync_id;
        }

        $scope.save = function(){
            if($scope.input.mail && $scope.input.password && $scope.input.key && $scope.input.sync_id){
                portal = {
                    portal_id: $scope.portal.id,
                    portal_name: $scope.portal.name,
                    mail: $scope.input.mail,
                    password: $scope.input.password,
                    key: $scope.input.key,
                    sync_id: $scope.input.sync_id
                }
                PortalSvc.savePortal(portal);
                $ionicHistory.goBack(-2);
            }else{
                $ionicLoading.show({
                    template: 'Bitte Eingabe überprüfen.',
                    noBackdrop: true,
                    duration: 1000,
                });
            }
        }
    }
})();