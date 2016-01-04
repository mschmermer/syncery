(function () {

    angular
        .module('syncery')
        .controller('SelectorCtrl', SelectorCtrl);


    function SelectorCtrl($scope, $stateParams, $state, $ionicHistory) {

        $scope.title = $stateParams.selector['name'];
        $scope.items = $stateParams.selector['items'];
        $scope.selected = $stateParams.selector['selected'];

        $scope.choice = function(item){
            $scope.modal.hide();
            $scope.selector.gender.selected = item;
        }
    }
}());