(function () {

    angular
        .module('syncery')
        .controller('CustomerCtrl', CustomerCtrl);


    function CustomerCtrl($scope, ionicMaterialInk, ionicMaterialMotion){

        $scope.searching = function(search){
            console.log(search);
            if(search.length <= 2){
                $scope.tests = {

                };
            }else if(search.length > 2){
                $scope.tests = {
                    0: {name: 'marcus', id: 1},
                    1: {name: 'marcus1', id: 2},
                    2: {name: 'marcus2', id: 3},
                    3: {name: 'marcus3', id: 4}
                }
            }
        }
    }
})();