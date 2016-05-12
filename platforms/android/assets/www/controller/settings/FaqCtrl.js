(function () {

    angular
        .module('syncery')
        .controller('FaqCtrl', FaqCtrl);


    function FaqCtrl($scope, $state) {
        $scope.hide = {};
        $scope.hide.q1 = true;
        $scope.hide.q2 = true;
        $scope.hide.q3 = true;

        $scope.class = {};
        $scope.class.q1  = "ion-plus";
        $scope.class.q2 = "ion-plus";
        $scope.class.q3 = "ion-plus";

        $scope.show = function(question){
            console.log(question, $scope[question]);
            if($scope.hide[question]){
                $scope.hide[question] = false;
                $scope.class[question] = "ion-minus";
            }else{
                $scope.hide[question] = true;
                $scope.class[question] = "ion-plus";
            }
        }


    }
})();