(function () {

    angular
        .module('syncery')
        .controller('SearchCtrl', SearchCtrl);


    function SearchCtrl($scope) {
        $scope.data = {};
        $scope.data.showSearch = true;
        $scope.data.searchQuery = '';
    }
}());