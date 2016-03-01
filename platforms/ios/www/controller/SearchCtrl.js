(function () {

    angular
        .module('syncery')
        .controller('SearchCtrl', SearchCtrl);


    function SearchCtrl($scope, $ionicFilterBar, $translate) {
        $scope.data = {};
        $scope.data.showSearch = true;
        $scope.data.searchQuery = '';
        $scope.text = {};

        $translate('cancel')
            .then(function (translatedValue) {
                $scope.text['cancel'] = translatedValue;
            });



        $scope.$on('$ionicView.afterEnter', function(){
            filterBarInstance = $ionicFilterBar.show({
                update: function (filteredItems, text) {
                    $scope.data.customers = filteredItems;
                    console.log(text);
                },
                cancelText: $scope.text['cancel'],
            });
        });

        $scope.search = function(){
            filterBarInstance = $ionicFilterBar.show({

                update: function (filteredItems, text) {
                    $scope.data.customers = filteredItems;
                    console.log(text);
                },

                cancelText: $scope.text['cancel'],
            });
        }

    }
}());