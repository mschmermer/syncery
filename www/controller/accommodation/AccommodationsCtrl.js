(function () {

    angular
        .module('syncery')
        .controller('AccommodationsCtrl', AccommodationsCtrl);


    function AccommodationsCtrl($scope, $timeout,$location, $ionicScrollDelegate, $state, AccommodationSvc,
                                $ionicFilterBar) {
        $scope.listCanSwipe = true;

        $scope.data = {};

        $scope.data.accommodations = AccommodationSvc.getAccommodations();

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('accommodations').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.data.accommodations,
                    update: function (filteredItems) {
                        $scope.data.accommodations = filteredItems;
                    },
                    filterProperties: 'name'
                });
            }
        }

        $timeout( function() {
            $location.hash('accommodation_list');
            var delegate = $ionicScrollDelegate.$getByHandle('accommodations');
            delegate.anchorScroll(true);
        }, 200);


        $scope.addAccommodation = function () {
            $state.go('app.addAccommodation');
        }
        $scope.cancel = function () {
            $timeout( function() {
                $location.hash('accommodation_list');
                var delegate = $ionicScrollDelegate.$getByHandle('accommodations');
                delegate.anchorScroll(true);
            }, 200);
            $scope.data.searchQuery = '';
        }

        $scope.delete = function (id) {
            AccommodationSvc.deleteAccommodation(id);
        }

        $scope.edit = function (id) {
            $state.go('app.addAccommodation', {id: id});
        }

    }
})();