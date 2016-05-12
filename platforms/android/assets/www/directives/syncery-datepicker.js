(function () {

    angular
        .module('syncery')
        .directive('synceryDatepicker', function () {
                return {
                    restrict: 'E',
                    templateUrl: './directives/templates/syncery-datepicker.html',
                    scope: {
                        name: "=",
                        methodToCall: '&method',
                        rangepicker: '='
                    },
                    controller: function ($scope, $state, language, $ionicModal, $ionicScrollDelegate, $timeout, BookingSvc, UserSvc) {

                        $scope.show_date1 = '--/--/----';
                        $scope.show_date2 = '--/--/----';
                        $scope.is_reserved = true;
                        $scope.date1 = false;
                        $scope.date2 = false;
                        var next = 4;
                        var previous = 1;

                        var moments = moment().locale(language);

                        $scope.dates = [];

                        for (var i = 0; i <= 3; i++) {
                            $scope.dates.push({
                                month: moment().add(i, 'months').month() + 1,
                                year: moment().add(i, 'months').year()
                            });
                        }

                        /*$scope.getScrollPosition = function () {

                            if ($ionicScrollDelegate.$getByHandle('datepicker').getScrollPosition().top == 0) {

                                $timeout(function () {
                                    $scope.dates.unshift({
                                        month: moment().subtract(previous, 'months').month() + 1,
                                        year: moment().subtract(previous, 'months').year()
                                    });
                                    previous++;
                                }, 20);

                            }
                        }*/

                        $scope.loadPreviousMore = function(){
                            $scope.dates.unshift({
                                month: moment().subtract(previous, 'months').month() + 1,
                                year: moment().subtract(previous, 'months').year()
                            });
                            previous++;
                            $scope.$broadcast('scroll.refreshComplete');
                        }


                        $scope.loadNextMore = function () {
                            $scope.dates.push({
                                month: moment().add(next, 'months').month() + 1,
                                year: moment().add(next, 'months').year()
                            });
                            next++;
                            $ionicScrollDelegate.resize();
                            $scope.$broadcast('scroll.infiniteScrollComplete');
                        };

                        /*$scope.$on('$stateChangeSuccess', function () {
                            $scope.loadMore();
                        });*/

                        $scope.clickCalendar = function (data) {
                            if($scope.rangepicker){
                                selectRange(data);
                            }else{
                                $scope.date1 = moment(new Date(data.year, data.month - 1, data.day));
                                $scope.show_date1 = $scope.date1.locale(UserSvc.getLanguage()).format('D. MMM YYYY');
                                $scope.is_reserved = false;
                            }
                            $state.reload();
                        }

                        function selectRange(data) {
                            if ($scope.date1) {
                                $scope.date2 = moment(new Date(data.year, data.month - 1, data.day));
                                var duration = moment.duration($scope.date2.diff($scope.date1));
                                var diff = duration.asDays();

                                if (diff <= 0) {
                                    BookingSvc.disselected();
                                    $scope.date1 = $scope.date2;
                                    $scope.show_date1 = $scope.date1.locale(UserSvc.getLanguage()).format('D. MMM YYYY');
                                    $scope.show_date2 = '--/--/----';
                                    $scope.date2 = false;
                                    $scope.is_reserved = true;
                                } else {
                                    $scope.show_date1 = $scope.date1.locale(UserSvc.getLanguage()).format('D. MMM YYYY');
                                    $scope.show_date2 = $scope.date2.locale(UserSvc.getLanguage()).format('D. MMM YYYY');
                                    $scope.arrival = $scope.date1;
                                    $scope.departure = $scope.date2;
                                    $scope.is_reserved = BookingSvc.setRangepick($scope.date1, $scope.date2);
                                    $scope.date1 = false;
                                    $scope.date2 = false;
                                }
                            } else {
                                BookingSvc.disselected();
                                $scope.is_reserved = true;
                                $scope.date1 = moment(new Date(data.year, data.month - 1, data.day));
                                $scope.show_date1 = $scope.date1.locale(UserSvc.getLanguage()).format('D. MMM YYYY');
                                $scope.show_date2 = '--/--/----';
                            }


                            //console.log($scope.date1, $scope.date2, diff);
                        }

                        $scope.select = function () {
                            $scope.modal.show();
                        }

                        $ionicModal.fromTemplateUrl('templates/rangepicker.html', {
                            scope: $scope,
                            animation: 'fade-in'
                        }).then(function (modal) {
                            $scope.modal = modal
                        });

                        $scope.back = function () {
                            BookingSvc.disselected();
                            $scope.modal.hide();
                        }

                        $scope.save = function () {
                            /*console.log($scope.is_reserved, $scope.show_date2);
                            if (!$scope.is_reserved && $scope.show_date2 != '--/--/----') {*/
                                BookingSvc.disselected();
                                $scope.modal.hide();
                            /*} else {
                                alert('fehler');
                            }*/

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