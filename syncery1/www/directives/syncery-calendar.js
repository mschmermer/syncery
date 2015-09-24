(function () {

    angular
        .module('starter.controllers')
        .directive('synceryCalendar', function () {
            return {
                restrict: 'E',
                templateUrl: './templates/syncery-calendar.html',
                scope: {
                    month: '=',
                    year: '=',
                    onClick:'&'
                },
                controller: function ($scope) {

                    $scope.calendarData = {};
                    $scope.day = [];
                    //set locale to German
                    var moments = moment().locale('de');

                    // set Weekdays
                    for (var i = 1; i <= 6; i++) {
                        $scope.day.push(moments.isoWeekday(i).format('dd').toUpperCase());
                    }
                    $scope.day.push(moments.isoWeekday(0).format('dd').toUpperCase());

                    // get number for last day
                    var lastDayForThisMounth = moment([$scope.year, $scope.month] , "YYYY-MM").daysInMonth();
                    var lastDayForLastMounth = moment([$scope.year, $scope.month-1] , "YYYY-MM").daysInMonth();
                    var firstIsoweekdayForThisMounth = moment([$scope.year, $scope.month, 01], "YYYY-MM-DD").isoWeekday();
                    if(firstIsoweekdayForThisMounth == 0){
                        firstIsoweekdayForThisMounth = 7;
                    }

                    var day = 1;
                    var day2 = 1;

                    console.log(firstIsoweekdayForThisMounth,lastDayForLastMounth,lastDayForThisMounth ,$scope.year, $scope.month);

                    for (var col = 1; col <= 6; col++) {
                        for (var row = 1; row <= 7; row++) {

                            //last month
                            if(col==1 && row < firstIsoweekdayForThisMounth){
                                $scope.calendarData[col+'-'+row] = {
                                    daynumber: lastDayForLastMounth-(firstIsoweekdayForThisMounth-row-1),
                                    month: $scope.month-1,
                                    data_position: col + '-' + row,
                                    today: '',
                                    class: 'other_month '
                                };
                            }

                            // actual month
                            if(((col==1 && row >= firstIsoweekdayForThisMounth)||col>1)&&(day<=lastDayForThisMounth)){
                                $scope.calendarData[col+'-'+row] = {
                                    daynumber: day,
                                    month: $scope.month,
                                    data_position: col + '-' + row,
                                    class: col+'-'+row,
                                    today: '',
                                };
                                day++;
                            }

                            // next month
                            if(day==lastDayForThisMounth+1){
                                $scope.calendarData[col+'-'+row] = {
                                    daynumber: day2,
                                    month: $scope.month+1,
                                    data_position: col + '-' + row,
                                    today: '',
                                    class: 'other_month '
                                };
                                day2++;
                            }
                        }
                    }

                    if($scope.calendarData['2-2']){
                        $scope.calendarData['2-2']['class'] = 'arrival';
                        $scope.calendarData['2-3']['class'] = 'occupied';
                        $scope.calendarData['2-4']['class'] = 'occupied';
                        $scope.calendarData['2-5']['class'] = 'occupied';
                        $scope.calendarData['2-6']['class'] = 'occupied';
                        $scope.calendarData['2-7']['class'] = 'occupied';
                        $scope.calendarData['3-1']['class'] = 'occupied';
                        $scope.calendarData['3-2']['class'] = 'occupied 3-2';
                        $scope.calendarData['3-3']['class'] = 'occupied';
                        $scope.calendarData['3-4']['class'] = 'occupied';
                        $scope.calendarData['3-5']['class'] = 'departure';
                        $scope.calendarData['2-2']['bookingId'] = '1a';
                        $scope.calendarData['2-3']['bookingId'] = '1';
                        $scope.calendarData['2-4']['bookingId'] = '1';
                        $scope.calendarData['2-5']['bookingId'] = '1';
                        $scope.calendarData['2-6']['bookingId'] = '1';
                        $scope.calendarData['2-7']['bookingId'] = '1';
                        $scope.calendarData['3-1']['bookingId'] = '1';
                        $scope.calendarData['3-2']['bookingId'] = '1';
                        $scope.calendarData['3-3']['bookingId'] = '1';
                        $scope.calendarData['3-4']['bookingId'] = '1';
                        $scope.calendarData['3-5']['bookingId'] = '1d';
                        $scope.calendarData['3-6']['class'] = 'arrival';
                        $scope.calendarData['3-7']['class'] = 'occupied';
                        $scope.calendarData['4-1']['class'] = 'occupied';
                        $scope.calendarData['4-2']['class'] = 'occupied';
                        $scope.calendarData['4-3']['class'] = 'occupied';
                        $scope.calendarData['4-4']['class'] = 'occupied';
                        $scope.calendarData['4-5']['class'] = 'occupied';
                        $scope.calendarData['4-6']['class'] = 'departure selected';
                    }
                    console.log($scope.calendarData);

                },
                link: function(scope, elem, attrs) {
                    scope.select= function(position){
                        var title = angular.element(elem.children()[0]).find('.'+position).append('<div class="selected"></div>');
                        if(title){
                            title.find('.selected').remove();
                        }
                    }
                }
            };
        })
})();