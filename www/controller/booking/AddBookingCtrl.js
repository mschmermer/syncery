(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, $ionicPopup) {

        $scope.accommodations = ['Unterkunft1', 'Unterkunft2', 'Unterkunft3', 'Unterkunft4'];

        $scope.date = {
            month: 12,
            year: 2015,
        };

        $scope.showCalendar = function (name) {
            $scope.clickCalendar = function(test){
                console.log(test);
            }

            $scope.back = function(){
                $scope.date.month--;
            }

            $scope.forward = function(){
                $scope.date.month++;
            }

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                cssClass: "date-picker",
                template: '<button class="button button-positive button" ng-click="back()">' +
                '<i class="icon ion-chevron-left"></i> </button>' +
                '<button class="button button-positive button" ng-click="forward()">' +
                '<i class="icon ion-chevron-right"></i> </button>'+
                '<syncery-calendar data-method="clickCalendar" ' +
                'month="date.month" year="'+$scope.date.year+'"></syncery-calendar>',
                title: name,
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });
        }

    }
})();