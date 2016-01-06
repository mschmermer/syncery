(function () {

    angular
        .module('syncery')
        .directive('synceryCalendar', function ($compile, $templateRequest) {
            return {
                restrict: 'E',
                replace: 'true',
                templateUrl: './directives/templates/syncery-calendar.html',
                scope: {
                    methodToCall: '&method',
                    month: '=',
                    year: '=',
                    booking_id: '='
                },
                controller: function ($scope, $timeout, BookingSvc, $element) {

                    $element.bind('click', function (element) {
                        if (element.srcElement.attributes['data-position']) {
                            var position = element.srcElement.attributes['data-position'].value;
                            var selected_day = element.toElement.innerText;
                            if (element.srcElement.attributes['data-booking-id']) {
                                var booking_id = element.srcElement.attributes['data-booking-id'].value;
                                if (booking_id.length > 1) {
                                    booking_id = booking_id.split(' ')[1];
                                }
                            }

                            angular.element(document.querySelector('table#' + $scope.calendarid + ' div.selected')).remove();
                            var td = angular.element(document.querySelector('table#' + $scope.calendarid + ' td[data-position="' + position + '"]'));

                            if (!td.hasClass('other_month')) {
                                td.append('<div class="selected"></div>');
                                BookingSvc.selectReservation($scope.month, booking_id, position);
                                var func = $scope.methodToCall();
                                func({booking_id: booking_id, day: selected_day, month: $scope.month, year: $scope.year});
                            }
                        }
                    });

                    $scope.initCalendarData = function (month, year) {

                        $scope.day = [];

                        var cid = 0;

                        $timeout(function () {
                            do {
                                cid++;
                            } while (!(angular.element(document.querySelector('#calendar' + cid)).length === 0));
                            $scope.calendarid = 'calendar' + cid;
                        }, 2);

                        //set locale to German
                        var moments = moment().locale('de');

                        $scope.months = [''];
                        $scope.today = moment().format('D');

                        for (var i = 0; i <= 11; i++) {
                            $scope.months.push(moments.month(i).format('MMMM'));
                        }

                        // set Weekdays
                        for (var i = 1; i <= 6; i++) {
                            $scope.day.push(moments.isoWeekday(i).format('dd').toUpperCase());
                        }
                        $scope.day.push(moments.isoWeekday(0).format('dd').toUpperCase());

                        calendarData = {};

                        calendarData['positions'] = {};

                        calendarData['values'] = BookingSvc.getReservationData(month);

                        calendarClass = {};

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
                                if (!calendarData['positions'][col]) {
                                    calendarData['positions'][col] = {};
                                }

                                //last month
                                if (col == 1 && row < firstIsoweekdayForThisMounth) {
                                    if ($scope.month > 1) {
                                        var date = year + '-' + (month - 1) + '-' + (lastDayForLastMounth - (firstIsoweekdayForThisMounth - row - 1));
                                    } else {
                                        var date = (year - 1) + '-12-' + lastDayForLastMounth - (firstIsoweekdayForThisMounth - row - 1);
                                    }

                                    calendarData['positions'][col][row] = {
                                        daynumber: lastDayForLastMounth - (firstIsoweekdayForThisMounth - row - 1),
                                        date: date
                                    };

                                    calendarData['values'][date] = {
                                        data_position: col + '-' + row,
                                        class: 'other_month ',
                                    };
                                }

                                // actual month
                                if ((col == 1 && row >= firstIsoweekdayForThisMounth) || (col > 1 && day <= lastDayForThisMounth)) {
                                    var date = year + '-' + (month) + '-' + day;
                                    calendarData['positions'][col][row] = {
                                        daynumber: day,
                                        date: date
                                    };
                                    if (calendarData['values'][date]) {
                                        calendarData['values'][date] = {
                                            'data_position': col + '-' + row,
                                            'class': calendarData['values'][date]['class'] !== undefined ? calendarData['values'][date]['class'] : '',
                                            'booking-id': calendarData['values'][date]['booking-id'] !== undefined ? calendarData['values'][date]['booking-id'] : '',
                                        };
                                    } else {
                                        calendarData['values'][date] = {'data_position': col + '-' + row, class: ''};
                                    }
                                    day++;
                                }

                                // next month
                                if (day == lastDayForThisMounth + 2) {
                                    if ($scope.month < 12) {
                                        var date = year + '-' + (month + 1) + '-' + day2;
                                    } else {
                                        var date = (year + 1) + '-1-' + day2;
                                    }

                                    calendarData['positions'][col][row] = {
                                        daynumber: day2,
                                        date: date
                                    };

                                    calendarData['values'][date] = {
                                        data_position: col + '-' + row,
                                        class: 'other_month ',
                                    };

                                    day2++;
                                }
                                if (day == lastDayForThisMounth + 1) {
                                    day++;
                                }

                                if (moment([year, month, (day - 1)], "YYYY-MM-DD").isSame(moment(), 'day')) {
                                    calendarData['values'][date]['class'] = calendarData['values'][date]['class'] + ' today';
                                }
                            }
                        }

                        return calendarData;
                    }

                    $scope.calendarData = $scope.initCalendarData($scope.month, $scope.year);

                },

                link: function (scope, elem, BookingSvc) {

                    scope.$watch('month', function (newMonth, oldMonth) {
                        scope.calendarData = scope.initCalendarData(newMonth, scope.year);
                        angular.element(document.querySelector('div.today')).remove();
                        var position = angular.element(document.querySelector('td.today')).attr('data-position');
                        var booking_id = angular.element(document.querySelector('td.today')).attr('data-booking-id');
                        var date = angular.element(document.querySelector('td.today')).attr('data-date');
                        angular.element(document.querySelector('td.today')).append('<div class="today" data-position="' + position + '" ' +
                            ' data-date="' + date + '" data-booking-id="' + booking_id + '">' + scope.today + '</div>');
                        angular.element(document.querySelector('table#' + scope.calendarid + ' div.selected')).remove();
                    });



                    /*elem.bind('click', function (element) {
                     if (element.srcElement.attributes['data-position']) {
                     var position = element.srcElement.attributes['data-position'].value;
                     var date = element.srcElement.attributes['data-date'].value;
                     var selected_day = element.toElement.innerText;

                     angular.element(document.querySelector('table#' + scope.calendarid + ' div.selected')).remove();
                     var td = angular.element(document.querySelector('table#' + scope.calendarid + ' td[data-position="' + position + '"]'));

                     if (!td.hasClass('other_month')) {
                     td.append('<div class="selected"></div>');
                     if (element.srcElement.attributes['data-booking-id']) {
                     var booking_id = element.srcElement.attributes['data-booking-id'].value;
                     $compile(element.contents())(scope);
                     }
                     }
                     var func = scope.methodToCall();
                     func({booking_id: booking_id, day: selected_day, month: scope.month, year: scope.year});
                     }
                     });

                     /*scope.select = function (position) {
                     scope.booking_id = false;
                     angular.element(document.querySelector('table#'+scope.calendarid+' div.selected')).remove();
                     var td = angular.element(document.querySelector('table#'+scope.calendarid+' td[data-position="'+position+'"]'));
                     scope.selected_day = parseInt(td.html());

                     if(scope.arrival && scope.departure){
                     for (var col = scope.arrival.charAt(0); col <= 6; col++) {
                     if(col <= scope.departure.charAt(0)){
                     for (var row = 1; row <= 7; row++) {
                     if((row >= scope.arrival.charAt(2) && col < scope.departure.charAt(0)) ||
                     (row <= scope.departure.charAt(2) && col == scope.departure.charAt(0))){
                     scope.calendarData[col][row]['class'] = scope.calendarData[col][row]['class'].replace('selected', '');
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
                     if(td.hasClass('occupied') || td.hasClass('arrival')){
                     var id = td.attr('data-booking-id');
                     scope.booking_id=id.charAt(0);
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
                     //elem.bind('click', function () {
                     var func = scope.methodToCall();
                     func({booking_id: scope.booking_id, day: scope.selected_day, month: scope.month, year: scope.year});
                     //});
                     }*/
                }
            }
        }
    )
})();