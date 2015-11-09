(function () {

    angular
        .module('syncery')
        .controller('AccommodationsCtrl', AccommodationsCtrl);


    function AccommodationsCtrl($scope, $timeout,$location, $ionicScrollDelegate, $state, AccommodationSvc) {
        $scope.listCanSwipe = true;

        $scope.data = {};
        $scope.data.showSearch = false;
        $scope.data.searchQuery = '';


        $scope.data.accommodations = AccommodationSvc.getAccommodations();

        $timeout( function() {
            $location.hash('accommodation_list');
            var delegate = $ionicScrollDelegate.$getByHandle('accommodations');
            delegate.anchorScroll(true);
        }, 200);

        $scope.data.showSearch = true;


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
            alert(id);
        }

        $scope.edit = function (id) {
            alert(id);
        }
    }
})();