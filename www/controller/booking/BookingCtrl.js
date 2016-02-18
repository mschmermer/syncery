(function () {

    angular
        .module('syncery')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSlideBoxDelegate, $ionicModal, $ionicTabsDelegate,
                         language, $ionicScrollDelegate, $timeout, $location, $state,
                         $stateParams, UserSvc) {
        $scope.standard_class = 'item item-stacked-label';
        $scope.hide = {
            customer: {
                hide: true,
                class: $scope.standard_class
            },
            date: {
                hide: true,
                class: $scope.standard_class
            },
            accommodation: {
                hide: true,
                class: $scope.standard_class
            }
        };

        $scope.beginning = UserSvc.getWeekBeginning();

        init();

        $scope.$watch('selector.month.selected', function (newvalue) {
            $scope.selectMonth(newvalue);
        });

        $scope.$on('$ionicView.enter', function(){
            $scope.tab_id = parseInt($stateParams.tab_id);
            if($scope.tab_id){
                $ionicTabsDelegate.$getByHandle('bookingtabs').select($scope.tab_id);
            }
            if($stateParams.filter){
                $scope.filter($stateParams.filter);
            }
        });

        $scope.filter_class={};
        $scope.filter_class.date="button-assertive";
        $scope.filter_class.open="button-royal button-outline";
        $scope.filter_class.unpaid="button-royal button-outline";

        $scope.filter = function(filter){
            switch (filter) {
                case "date":
                    $scope.filter_class.date = "button-assertive";
                    $scope.filter_class.open = "button-royal button-outline";
                    $scope.filter_class.unpaid = "button-royal button-outline";
                    break;
                case "open":
                    $scope.filter_class.date = "button-royal button-outline";
                    $scope.filter_class.open = "button-assertive";
                    $scope.filter_class.unpaid = "button-royal button-outline";
                    break;
                case "unpaid":
                    $scope.filter_class.date = "button-royal button-outline";
                    $scope.filter_class.open = "button-royal button-outline";
                    $scope.filter_class.unpaid = "button-assertive";
                    break;
            }

        }


        $scope.showMore = function (name) {
            switch (name) {
                case 'accommodation':
                    if ($scope.hide.accommodation.hide) {
                        $scope.hide.accommodation.class += ' item-text-wrap';
                        $scope.hide.accommodation.hide = false;
                    } else {
                        $scope.hide.accommodation.class = $scope.standard_class;
                        $scope.hide.accommodation.hide = true;
                    }
                    break;
                case 'date':
                    if ($scope.hide.date.hide) {
                        $scope.hide.date.class += ' item-text-wrap';
                        $scope.hide.date.hide = false;
                    } else {
                        $scope.hide.date.class = $scope.standard_class;
                        $scope.hide.date.hide = true;
                    }
                    break;
                case 'customer':
                    if ($scope.hide.customer.hide) {
                        $scope.hide.customer.class += ' item-text-wrap';
                        $scope.hide.customer.hide = false;
                    } else {
                        $scope.hide.customer.class = $scope.standard_class;
                        $scope.hide.customer.hide = true;
                    }
                    break;
            }

        }

        $scope.clickCalendar = function (day) {
            if (day.booking_id) {
                $scope.booking_id = day.booking_id;
                $scope.bookingView = false;
                $timeout(function () {
                    $ionicScrollDelegate.resize();
                    $location.hash('BookingView');
                    var delegate = $ionicScrollDelegate.$getByHandle('bookings');
                    delegate.anchorScroll(true);
                }, 200);
            } else {
                console.log(day);
                $scope.booking_id = false;
                $scope.bookingView = true;
                $timeout(function () {
                    $ionicScrollDelegate.resize();
                    $ionicScrollDelegate.scrollTop(true);
                }, 200);
            }
        }

        $scope.changeBooking = function () {
            alert('goto change booking for ' + $scope.booking_id);
        }

        $scope.showBooking = function () {
            alert('goto show booking for ' + $scope.booking_id);
        }

        $scope.close = function () {
            $scope.bookingView = true;
            $timeout(function () {
                $ionicScrollDelegate.resize();
                $ionicScrollDelegate.scrollTop(true);
            }, 200);
        }

        $scope.addBooking = function(){
            $state.go('app.addBooking');
        }

        function init() {

            $scope.selector={};
            $scope.selector['accommodations'] = {
                items: ['Unterkunft 1', 'Unterkunft 2', 'Unterkunft 3', 'Unterkunft 4', 'Unterkunft 5'],
                name: 'accommodations',
                selected: 'Unterkunft 1'
            };


            $scope.myActiveSlide = 0;

            $scope.hideCal1 = false;
            $scope.hideCal2 = false;
            $scope.jumper = 0;
            $scope.col = "col-100";


            if(window.innerWidth>=605){
                $scope.hideCal1 = true;
                $scope.col = "col-50";
                $scope.jumper = 1;
            }
            if(window.innerWidth>=910){
                $scope.hideCal2 = true;
                $scope.col = "col-33";
                $scope.jumper = 2;
            }

            $scope.month = [];
            $scope.month2 = [];

            $scope.hideButtonAdd = false;
            $scope.bookingView = true;


            var moments = moment().locale(language);

            if (!$scope.monthnumber) {
                $scope.monthnumber = moment().month() + 1;
                $scope.monthnumber_actual = $scope.monthnumber;
                $scope.year = moment().year();
                $scope.monthnumber1 = $scope.monthnumber + 1;
                $scope.monthnumber2 = $scope.monthnumber - 1;
                if ($scope.monthnumber == 12) {
                    $scope.monthnumber1 = 1;
                    $scope.year1 = $scope.year + 1;
                    $scope.year2 = $scope.year;
                } else if ($scope.monthnumber == 1) {
                    $scope.year1 = $scope.year;
                    $scope.monthnumber2 = 12;
                    $scope.year2 = $scope.year - 1;
                } else {
                    $scope.year1 = $scope.year;
                    $scope.year2 = $scope.year;
                }
            }

            for (var i = 0; i <= 11; i++) {
                $scope.month.push(moments.month(i).format('MMMM'));
                $scope.month2.push(moments.month(i).format('MMMM') + ' ' + $scope.year);
            }

            $scope.date_actual = moments.month($scope.monthnumber - 1).format('MMMM') + ' ' + $scope.year;

            $scope.selector['month'] = {
                items: $scope.month2,
                name: 'month',
                selected: $scope.date_actual
            };
        }

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
        }

        $scope.slideHasChanged = function (index) {
            switch (index) {
                case 0:
                    $scope.date_actual = $scope.month[$scope.monthnumber - 1] + ' ' + $scope.year;
                    $scope.selector.month.selected = $scope.date_actual;
                    switch ($scope.myActiveSlide) {
                        case 1:
                            $scope.monthnumber2 = $scope.monthnumber2 - 3;
                            if ($scope.monthnumber2 <= 0) {
                                $scope.monthnumber2 = $scope.monthnumber2 + 12;
                                $scope.year2 = $scope.year2 - 1;
                            }
                            break;
                        case 2:
                            $scope.monthnumber1 = $scope.monthnumber1 + 3;
                            if ($scope.monthnumber1 > 12) {
                                $scope.monthnumber1 = $scope.monthnumber1 - 12;
                                $scope.year1 = $scope.year1 + 1;
                            }


                            break;
                    }
                    break;
                case 1:
                    $scope.date_actual = $scope.month[$scope.monthnumber1 - 1] + ' ' + $scope.year1;
                    $scope.selector.month.selected = $scope.date_actual;
                    switch ($scope.myActiveSlide) {
                        case 0:
                            $scope.monthnumber2 = $scope.monthnumber2 + 3;
                            if ($scope.monthnumber2 > 12) {
                                $scope.monthnumber2 = $scope.monthnumber2 - 12;
                                $scope.year2 = $scope.year2 + 1;
                            }
                            break;
                        case 2:
                            $scope.monthnumber = $scope.monthnumber - 3;
                            if ($scope.monthnumber <= 0) {
                                $scope.monthnumber = $scope.monthnumber + 12;
                                $scope.year = $scope.year - 1;
                            }
                            break;
                    }

                    break;
                case 2:
                    $scope.date_actual = $scope.month[$scope.monthnumber2 - 1] + ' ' + $scope.year2;
                    $scope.selector.month.selected = $scope.date_actual;
                    switch ($scope.myActiveSlide) {
                        case 1:
                            $scope.monthnumber = $scope.monthnumber + 3;
                            if ($scope.monthnumber > 12) {
                                $scope.monthnumber = $scope.monthnumber - 12;
                                $scope.year = $scope.year + 1;
                            }
                            break;
                        case 0:
                            $scope.monthnumber1 = $scope.monthnumber1 - 3;
                            if ($scope.monthnumber1 <= 0) {
                                $scope.monthnumber1 = $scope.monthnumber1 + 12;
                                $scope.year1 = $scope.year1 - 1;
                            }
                            break;
                    }
                    break;

            }
            $scope.myActiveSlide = $ionicSlideBoxDelegate.currentIndex();
        }

        $scope.selectMonth = function (month) {

            var moments = moment().locale(language);
            month = month.split(" ");
            actual_month = parseInt(moments.month(month[0]).format('M'));
            actual_year = parseInt(month[1]);
            switch ($scope.myActiveSlide) {
                case 0:
                    $scope.monthnumber = actual_month;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month + 1;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month - 1;
                    $scope.year2 = actual_year;
                    if (actual_month == 12) {
                        $scope.monthnumber1 = 1;
                        $scope.year1 = actual_year + 1;
                    }
                    if (actual_month == 1) {
                        $scope.monthnumber2 = 12;
                        $scope.year2 = actual_year - 1;
                    }
                    break;
                case 1:
                    $scope.monthnumber = actual_month - 1;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month + 1;
                    $scope.year2 = actual_year;
                    if (actual_month == 12) {
                        $scope.monthnumber2 = 1;
                        $scope.year2 = actual_year + 1;
                    }
                    if (actual_month == 1) {
                        $scope.monthnumber = 12;
                        $scope.year = actual_year - 1;
                    }
                    break;
                case 2:
                    $scope.monthnumber = actual_month + 1;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month - 1;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month;
                    $scope.year2 = actual_year;
                    if (actual_month == 12) {
                        $scope.monthnumber = 1;
                        $scope.year = actual_year + 1;
                    }
                    if (actual_month == 1) {
                        $scope.monthnumber1 = 12;
                        $scope.year1 = actual_year - 1;
                    }
                    break;
            }
        }
    }
})();