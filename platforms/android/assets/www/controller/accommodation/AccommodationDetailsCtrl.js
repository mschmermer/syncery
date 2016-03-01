(function () {

    angular
        .module('syncery')
        .controller('AccommodationDetailsCtrl', AccommodationDetailsCtrl);


    function AccommodationDetailsCtrl($scope,$location,$timeout, $state, $stateParams,
                                      AccommodationSvc, $ionicScrollDelegate, MappingSvc) {


        $scope.id = $stateParams.id;
        $scope.accommodation = {};

        $scope.descriptionClass = 'item';
        $scope.icon = {
            MasterDataAcco: 'icon ion-ios-arrow-down',
            Mapping: 'icon ion-ios-arrow-down',
            accommodation_capacity: 'icon ion-ios-arrow-down'
            };
        $scope.hide = {
            MasterDataAcco: true,
            Mapping: true,
            accommodation_capacity: true
        };

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.accommodation = AccommodationSvc.getAccommodationById($scope.id);

        $scope.mappings = MappingSvc.getMapping($scope.id);

        $scope.showMoreDescription = function () {

            if ($scope.descriptionClass.length <= 4) {
                $scope.descriptionClass += ' item-text-wrap';
            } else {
                $scope.descriptionClass = $scope.descriptionClass.substring(0, 4);
            }
        }

        $scope.showMore = function (field) {
            if ($scope.hide[field]) {
                $scope.hide[field] = false;
                $scope.icon[field] = 'icon ion-ios-arrow-up';
            } else {
                $scope.hide[field] = true;
                $scope.icon[field] = 'icon ion-ios-arrow-down';
            }
            $timeout( function() {
                $ionicScrollDelegate.resize();
                $location.hash(field);
                var delegate = $ionicScrollDelegate.$getByHandle('accommodationDetails');
                delegate.anchorScroll(true);
            }, 200);
        }

        $scope.edit = function(id){
            alert(id);
        }

        $scope.addMapping = function(){
            $state.go('app.accommodationMapping', {acc_id: $scope.id});
        }
    }
})();