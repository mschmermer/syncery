(function () {

    angular
        .module('syncery')
        .directive('synceryDatepicker', function () {
                return {
                    restrict: 'E',
                    templateUrl: './directives/templates/syncery-datepicker.html',
                    scope: {
                        day1: "=",
                        month1: "=",
                        year1: "=",
                        day2: "=",
                        month2: "=",
                        year2: "=",
                        name: "=",
                        methodToCall: '&method',
                    },
                    controller: function ($scope, $state) {

                        if (!$scope.day1) {
                            $scope.day1 = '--'
                        }
                        if (!$scope.month1) {
                            $scope.month1 = '--'
                        }
                        if (!$scope.year1) {
                            $scope.year1 = '----'
                        }

                        if (!$scope.day2) {
                            $scope.day2 = '--'
                        }
                        if (!$scope.month2) {
                            $scope.month2 = '--'
                        }
                        if (!$scope.year2) {
                            $scope.year2 = '----'
                        }

                        $scope.showCalendar = function(){
                            $state.go('app.rangepicker');
                        }

                        /*var moments = moment().locale(language);

                        $scope.dates = {};

                        for(var i= -3;i<=3; i++){
                            $scope.dates[i+3] = {month: moment().add(i, 'months').month()+1, year: moment().add(i, 'months').year()};
                        }

                        console.log($scope.dates);

                        $scope.beginning = UserSvc.getWeekBeginning();

                        $scope.showCalendar = function (name) {
                            $scope.clickCalendar = function (select) {

                                console.log(select);


                                /*$scope.day2 = select.day;
                                 $scope.month2 = select.month;
                                 $scope.year2 = select.year;
                                 if($scope.selectedDate1 || ($scope.selectedDate2 && $scope.selectedDate1)){
                                 $scope.selectedDate2=$scope.day2+'.'+$scope.month2+'.'+$scope.year2;
                                 }else{
                                 $scope.selectedDate1=$scope.day2+'.'+$scope.month2+'.'+$scope.year2;
                                 $scope.selectedDate2=false;
                                 }
                                 $scope.booking_id = select.booking_id;*/
                            /*}

                            $scope.back = function () {
                                if ($scope.date.month == 1) {
                                    $scope.date.year--;
                                    $scope.date.month = 12
                                } else {
                                    $scope.date.month--;
                                }
                            }

                            $scope.next = function () {
                                if ($scope.date.month == 12) {
                                    $scope.date.year++;
                                    $scope.date.month = 1
                                } else {
                                    $scope.date.month++;
                                }
                            }

                            $scope.getScrollPosition = function(){
                                console.log($ionicScrollDelegate.$getByHandle('datepicker').getScrollPosition())
                            }

                            // An elaborate, custom popup
                            var myPopup = $ionicPopup.show({
                                cssClass: "date-picker",
                                template: '<div delegate-handle="datepicker" on-scroll="getScrollPosition()">'+
                                '<div ng-repeat="(key, value) in dates">' +
                                '<syncery-calendar data-method="clickCalendar" ' +
                                'month="value.month" year="value.year" beginning="beginning" rangepicker="true">' +
                                '</syncery-calendar>'+
                                '</div></div>',
                                title: name,
                                scope: $scope,
                                buttons: [
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
                                                func({
                                                    name: $scope.name,
                                                    day: $scope.day,
                                                    month: $scope.month,
                                                    year: $scope.year
                                                });
                                                return true;
                                            }
                                        }
                                    }
                                ]
                            });
                        }*/
                    },

                    link: function (scope, elem, attrs) {

                    }
                }
            }
        )
})();