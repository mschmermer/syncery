(function () {

    angular
        .module('syncery')
        .controller('SignUpCtrl', SignUpCtrl);


    function SignUpCtrl($scope, UserSvc) {

        $scope.agb_check = true;

        $scope.agb = function(){
            if($scope.agb_check){
                $scope.agb_check=false;
            }else{
                $scope.agb_check=true;
            }
        }
    }
})();