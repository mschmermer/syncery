(function () {

    angular
        .module('syncery')
        .controller('SearchCtrl', SearchCtrl);


    function SearchCtrl($scope, $ionicNavBarDelegate) {
        $scope.data = {};
        $scope.data.showSearch = true;
        $scope.data.searchQuery = '';

        $scope.hide_navbar = false;

        $scope.search = function(){
            $scope.hide_navbar = true;
        }

        $scope.cancel = function(){
            $scope.hide_navbar = false;
        }

    }
}());