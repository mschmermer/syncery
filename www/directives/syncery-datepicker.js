(function () {

    angular
        .module('syncery')
        .directive('synceryDatepicker', function () {
            return {
                restrict: 'E',
                templateUrl: './directives/templates/syncery-datepicker.html',
                scope: {
                    day: "=",
                    month: "=",
                    year: "=",
                    name: "=",
                    methodToCall: '&method',
                },
                controller: function ($scope, $ionicPopup) {

                    if(!$scope.day){
                        $scope.day='--'
                    }
                    if(!$scope.month){
                        $scope.month='--'
                    }
                    if(!$scope.year){
                        $scope.year='----'
                    }

                    $scope.date = {
                        month: 12,
                        year: 2015,
                    };

                    $scope.showCalendar = function (name) {
                        $scope.clickCalendar = function(select){
                            $scope.day = select.day;
                            $scope.month = select.month;
                            $scope.year = select.year;
                        }

                        $scope.back = function(){
                            if($scope.date.month == 1){
                                $scope.date.year--;
                                $scope.date.month=12
                            }else{
                                $scope.date.month--;
                            }
                        }

                        $scope.next = function(){
                            if($scope.date.month == 12){
                                $scope.date.year++;
                                $scope.date.month=1
                            }else{
                                $scope.date.month++;
                            }
                        }

                        // An elaborate, custom popup
                        var myPopup = $ionicPopup.show({
                            cssClass: "date-picker",
                            template: '<syncery-calendar data-method="clickCalendar" ' +
                            'month="date.month" year="date.year"></syncery-calendar>' +
                            '<button class="button button-positive button-back" ng-click="back()">' +
                            '<i class="icon ion-chevron-left"></i> </button>' +
                            '<button class="button button-positive button-next" ng-click="next()">' +
                            '<i class="icon ion-chevron-right"></i> </button>',
                            title: name,
                            scope: $scope,
                            buttons: [
                                {text: 'Cancel'},
                                {
                                    text: '<b>Save</b>',
                                    type: 'button-positive',
                                    onTap: function (e) {
                                        if ($scope.day == '--') {
                                            e.preventDefault();
                                        } else {
                                            var func = $scope.methodToCall();
                                            func({name: $scope.name, day: $scope.day, month: $scope.month, year: $scope.year});
                                            return true;
                                        }
                                    }
                                }
                            ]
                        });
                    }
                },

                link: function (scope, elem, attrs) {

                }
            }
        }
    )
})();