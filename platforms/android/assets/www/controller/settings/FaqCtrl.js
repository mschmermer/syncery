(function () {

    angular
        .module('syncery')
        .controller('FaqCtrl', FaqCtrl);


    function FaqCtrl($scope, $state) {
        $scope.hide = {};
        $scope.hide.q1 = true;
        $scope.hide.q2 = true;
        $scope.hide.q3 = true;

        $scope.show = function(question){
            console.log(question, $scope[question]);
            if($scope.hide[question]){
                $scope.hide[question] = false;
            }else{
                $scope.hide[question] = true;
            }
        }


    }
})();