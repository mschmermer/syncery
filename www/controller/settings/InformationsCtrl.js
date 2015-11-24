(function () {

    angular
        .module('syncery')
        .controller('InformationsCtrl', InformationsCtrl);


    function InformationsCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc, $translate, language) {
        $scope.clickCalendar = function(id){
        }
    }
})();