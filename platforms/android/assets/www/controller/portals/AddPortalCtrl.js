(function () {

    angular
        .module('syncery')
        .controller('AddPortalCtrl', AddPortalCtrl);


    function AddPortalCtrl($scope, PortalSvc, $stateParams, $ionicLoading, $ionicHistory) {
        $scope.portal = PortalSvc.getPortalById($stateParams.id);
        $scope.input ={};
        $scope.hide ={
            mail:true,
            password:true,
            key:true,
            sync_id:true
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

                $scope.hide ={
                    mail:($scope.input.mail) ? true : false,
                    password:($scope.input.password) ? true : false,
                    key:($scope.input.key) ? true : false,
                    sync_id:($scope.input.sync_id) ? true : false
                }
            }
        }
    }
})();