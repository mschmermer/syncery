(function () {

    angular
        .module('syncery')
        .directive('synceryCalendar', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: './directives/templates/syncery-calendar.html',
                scope: {
                    month: '=',
                    year: '=',
                    onClick: '&'
                },
                controller: function ($scope, $ionicModal) {

                    $scope.calendarData = {};
                    $scope.day = [];
                    //set locale to German
                    var moments = moment().locale('de');

                    $scope.months = [''];
                    $scope.today = moment().format('DD');

                    for(var i=0; i<=11; i++){
                        $scope.months.push(moments.month(i).format('MMMM'));
                    }

                    // set Weekdays
                    for (var i = 1; i <= 6; i++) {
                        $scope.day.push(moments.isoWeekday(i).format('dd').toUpperCase());
                    }
                    $scope.day.push(moments.isoWeekday(0).format('dd').toUpperCase());

                    $scope.initCalendarData = function(month, year){

                        calendarData={};

                        // get number for last day
                        var lastDayForThisMounth = moment([year, month], "YYYY-MM").daysInMonth();
                        var lastDayForLastMounth = moment([year, month - 1], "YYYY-MM").daysInMonth();
                        var firstIsoweekdayForThisMounth = moment([year, month, 01], "YYYY-MM-DD").isoWeekday();
                        if (firstIsoweekdayForThisMounth == 0) {
                            firstIsoweekdayForThisMounth = 7;
                        }

                        var day = 1;
                        var day2 = 1;


                        for (var col = 1; col <= 6; col++) {
                            for (var row = 1; row <= 7; row++) {
                                if(!calendarData[col]){
                                    calendarData[col] ={};
                                }

                                //last month
                                if (col == 1 && row <= firstIsoweekdayForThisMounth) {
                                    calendarData[col][row] =  {
                                        daynumber: lastDayForLastMounth - (firstIsoweekdayForThisMounth - row - 1),
                                        data_position: col + '-' + row,
                                        class: 'other_month '
                                    };
                                }

                                // actual month
                                if ((col == 1 && row >= firstIsoweekdayForThisMounth) || (col > 1 && day <= lastDayForThisMounth)) {
                                    calendarData[col][row] =  {
                                        daynumber: day,
                                        data_position: col + '-' + row,
                                        class: col + '-' + row,
                                    };
                                    day++;
                                }

                                // next month
                                if (day == lastDayForThisMounth + 2) {
                                    calendarData[col][row] =  {
                                        daynumber: day2,
                                        data_position: col + '-' + row,
                                        class: 'other_month '
                                    };
                                    day2++;
                                }
                                if (day == lastDayForThisMounth + 1) {
                                    day++;
                                }

                                if(moment([year, month, (day-1)], "YYYY-MM-DD").isSame(moment(), 'day')){
                                    calendarData[col][row]['class'] = calendarData[col][row]['class'] = ' today';
                                }
                            }
                        }

                        if (calendarData['2']['2']) {
                            calendarData['2']['2']['class'] = 'arrival';
                            calendarData['2']['3']['class'] = 'occupied';
                            calendarData['2']['4']['class'] = 'occupied';
                            calendarData['2']['5']['class'] = 'occupied';
                            calendarData['2']['6']['class'] = 'occupied';
                            calendarData['2']['7']['class'] = 'occupied';
                            calendarData['3']['1']['class'] = 'occupied';
                            calendarData['3']['2']['class'] = 'occupied 3-2';
                            calendarData['3']['3']['class'] = 'occupied';
                            calendarData['3']['4']['class'] = 'occupied';
                            calendarData['3']['5']['class'] = 'departure';
                            calendarData['2']['2']['booking-id'] = '1a';
                            calendarData['2']['3']['booking-id'] = '1';
                            calendarData['2']['4']['booking-id'] = '1';
                            calendarData['2']['5']['booking-id'] = '1';
                            calendarData['2']['6']['booking-id'] = '1';
                            calendarData['2']['7']['booking-id'] = '1';
                            calendarData['3']['1']['booking-id'] = '1';
                            calendarData['3']['2']['booking-id'] = '1';
                            calendarData['3']['3']['booking-id'] = '1';
                            calendarData['3']['4']['booking-id'] = '1';
                            calendarData['3']['5']['booking-id'] = '1d';
                            calendarData['3']['6']['class'] = 'arrival';
                            calendarData['3']['7']['class'] = 'occupied';
                            calendarData['4']['1']['class'] = 'occupied';
                            calendarData['4']['2']['class'] = 'occupied';
                            calendarData['4']['3']['class'] = 'occupied';
                            calendarData['4']['4']['class'] = 'occupied';
                            calendarData['4']['5']['class'] = 'occupied';
                            calendarData['4']['6']['class'] = 'departure';
                            calendarData['3']['6']['booking-id'] = '2a';
                            calendarData['3']['7']['booking-id'] = '2';
                            calendarData['4']['1']['booking-id'] = '2';
                            calendarData['4']['2']['booking-id'] = '2';
                            calendarData['4']['3']['booking-id'] = '2';
                            calendarData['4']['4']['booking-id'] = '2';
                            calendarData['4']['5']['booking-id'] = '2';
                            calendarData['4']['6']['booking-id'] = '2d';
                        }
                        return calendarData;
                    }

                    $scope.calendarData = $scope.initCalendarData($scope.month, $scope.year);

                },
                link: function (scope, elem, attrs) {

                    scope.$watch('month', function(newMonth, oldMonth) {
                        angular.element(document.querySelector('div.today')).remove();
                        angular.element(document.querySelector('td.today')).append('<div class="today">'+scope.today+'</div>');
                        scope.calendarData = scope.initCalendarData(newMonth, scope.year);
                    });

                    scope.select = function (position) {
                        angular.element(document.querySelector('div.selected')).remove();
                        var td = angular.element(document.querySelector('td[data-position="'+position+'"]'));

                        if(scope.arrival && scope.departure){
                            for (var col = scope.arrival.charAt(0); col <= 6; col++) {
                                if(col <= scope.departure.charAt(0)){
                                    for (var row = 1; row <= 7; row++) {
                                        if((row >= scope.arrival.charAt(2) && col < scope.departure.charAt(0)) ||
                                            (row <= scope.departure.charAt(2) && col == scope.departure.charAt(0))){
                                            scope.calendarData[col][row]['class'] = scope.calendarData[col][row]['class'].substr(0, scope.calendarData[col][row]['class'].length-9);
                                        }
                                    }
                                }
                            }
                            scope.arrival = false;
                            scope.departure = false;
                        }

                        if(!td.hasClass('other_month')){
                            td.append('<div class="selected"></div>');
                        }
                        if(td.hasClass('occupied')){
                            var id = td.attr('data-booking-id');
                            scope.booking_id=id;
                            var arrival = angular.element(document.querySelector('td[data-booking-id="'+id+'a"]')).attr('data-position');
                            scope.arrival = arrival;
                            var departure = angular.element(document.querySelector('td[data-booking-id="'+id+'d"]')).attr('data-position');
                            scope.departure = departure;
                            scope.calendarData[arrival.charAt(0)][arrival.charAt(2)]['class'] += ' selected';
                            scope.calendarData[departure.charAt(0)][departure.charAt(2)]['class'] += ' selected';

                            for (var col = arrival.charAt(0); col <= 6; col++) {
                                if(col <= departure.charAt(0)){
                                    for (var row = 1; row <= 7; row++) {
                                        if((row > arrival.charAt(2) && col < departure.charAt(0)) ||
                                            (row < departure.charAt(2) && col == departure.charAt(0))){
                                            scope.calendarData[col][row]['class'] += ' selected';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    )
})();