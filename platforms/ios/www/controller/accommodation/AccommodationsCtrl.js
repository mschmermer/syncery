(function () {

    angular
        .module('syncery')
        .controller('AccommodationsCtrl', AccommodationsCtrl);


    function AccommodationsCtrl($scope, $ionicScrollDelegate, $state, AccommodationSvc,
                                $ionicFilterBar, $translate) {
        $scope.listCanSwipe = true;

        $scope.data = {};

        $scope.text={};

        $translate('cancel')
            .then(function (translatedValue) {
                $scope.text['cancel'] = translatedValue;
            });

        $scope.data.accommodations = AccommodationSvc.getAccommodations();

        $scope.getScrollPosition = function(){
            if($ionicScrollDelegate.$getByHandle('accommodations').getScrollPosition().top < 0){
                filterBarInstance = $ionicFilterBar.show({
                    items: $scope.data.accommodations,
                    update: function (filteredItems) {
                        $scope.data.accommodations = filteredItems;
                    },
                    filterProperties: 'name',
                    cancelText: $scope.text['cancel'],
                });
            }
        }



        $scope.addAccommodation = function () {
            $state.go('app.addAccommodation');
        }

        $scope.delete = function (id) {
            AccommodationSvc.deleteAccommodation(id);
        }

        $scope.edit = function (id) {
            $state.go('app.addAccommodation', {id: id});
        }

        /*$ionicContentBanner.show({icon: 'ion-ios-close-empty',transition: 'vertical',type: 'error', text:'test',interval: 15, autoClose: 5});*/

    }
})();