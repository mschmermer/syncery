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
                controller: function ($scope, $ionicPopup, UserSvc, language) {

                    if(!$scope.day){
                        $scope.day='--'
                    }
                    if(!$scope.month){
                        $scope.month='--'
                    }
                    if(!$scope.year){
                        $scope.year='----'
                    }

                    var moments = moment().locale(language);

                    $scope.date = {
                        month: moment().month() + 1,
                        year: moment().year(),
                    };

                    $scope.beginning = UserSvc.getWeekBeginning();

                    $scope.showCalendar = function (name) {
                        $scope.clickCalendar = function(select){
                            $scope.day2 = select.day;
                            $scope.month2 = select.month;
                            $scope.year2 = select.year;
                            if($scope.selectedDate1 || ($scope.selectedDate2 && $scope.selectedDate1)){
                                $scope.selectedDate2=$scope.day2+'.'+$scope.month2+'.'+$scope.year2;
                            }else{
                                $scope.selectedDate1=$scope.day2+'.'+$scope.month2+'.'+$scope.year2;
                                $scope.selectedDate2=false;
                            }
                            $scope.booking_id = select.booking_id;
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
                            template:
                            '<ion-item class="item item-icon-left" ng-if="selectedDate1"><i class="icon ion-calendar"></i>' +
                            '<h2>{{selectedDate1}} - {{selectedDate2}}</h2></ion-item>' +
                            '<syncery-calendar data-method="clickCalendar" ' +
                            'month="date.month" year="date.year" beginning="beginning" rangepicker="true"></syncery-calendar>',
                            title: name,
                            scope: $scope,
                            buttons: [
                                {text: '<i class="icon ion-chevron-left"></i>',
                                    type: 'button-royal',
                                    onTap: function (e) {
                                        e.preventDefault();
                                        $scope.back();
                                    },
                                },
                                {text: 'Abbrechen'},
                                {
                                    text: '<b>Speichern</b>',
                                    type: 'button-positive',
                                    onTap: function (e) {
                                        if ($scope.day2 == '--' || $scope.booking_id != '') {
                                            e.preventDefault();
                                        } else {
                                            console.log($scope.booking_id);
                                            $scope.day = $scope.day2;
                                            $scope.month = $scope.month2;
                                            $scope.year = $scope.year2;

                                            var func = $scope.methodToCall();
                                            func({name: $scope.name, day: $scope.day, month: $scope.month, year: $scope.year});
                                            return true;
                                        }
                                    }
                                },
                                {text: '<i class="icon ion-chevron-right"></i>',
                                    type: 'button-royal',
                                    onTap: function (e) {
                                        e.preventDefault();
                                        $scope.next();
                                    },
                                },
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