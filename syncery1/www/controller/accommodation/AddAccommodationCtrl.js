(function () {

    angular
        .module('syncery')
        .controller('AddAccommodationCtrl', AddAccommodationCtrl);


    function AddAccommodationCtrl($scope, UserSvc, $state) {
        $scope.back = function(){
            $state.go('app.accommodations');
        }
    }
})();