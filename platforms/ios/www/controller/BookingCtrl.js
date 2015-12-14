(function () {

    angular
        .module('syncery')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSlideBoxDelegate,
                         $ionicPopover, language, $ionicScrollDelegate, $timeout, $location) {
        $scope.standard_class= 'item item-stacked-label';
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

        init();

        $scope.showMore = function (name) {
            switch (name){
                case 'accommodation':
                    if($scope.hide.accommodation.hide){
                        $scope.hide.accommodation.class+= ' item-text-wrap';
                        $scope.hide.accommodation.hide=false;
                    }else{
                        $scope.hide.accommodation.class= $scope.standard_class;
                        $scope.hide.accommodation.hide=true;
                    }
                    break;
                case 'date':
                    if($scope.hide.date.hide){
                        $scope.hide.date.class+= ' item-text-wrap';
                        $scope.hide.date.hide=false;
                    }else{
                        $scope.hide.date.class= $scope.standard_class;
                        $scope.hide.date.hide=true;
                    }
                    break;
                case 'customer':
                    if($scope.hide.customer.hide){
                        $scope.hide.customer.class+= ' item-text-wrap';
                        $scope.hide.customer.hide=false;
                    }else{
                        $scope.hide.customer.class= $scope.standard_class;
                        $scope.hide.customer.hide=true;
                    }
                    break;
            }

        }

        $scope.clickCalendar = function (id) {
            if (id) {
                $scope.booking_id = id;
                $scope.bookingView = false;
                $timeout(function () {
                    $ionicScrollDelegate.resize();
                    $location.hash('BookingView');
                    var delegate = $ionicScrollDelegate.$getByHandle('bookings');
                    delegate.anchorScroll(true);
                }, 200);
            } else {
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

        function init() {
            /*$scope.$on('$ionicView.enter', function () {
             $ionicSideMenuDelegate.canDragContent(false);
             });
             $scope.$on('$ionicView.leave', function () {
             $ionicSideMenuDelegate.canDragContent(true);
             });*/


            $scope.myActiveSlide = 0;

            $scope.language = language;

            $scope.month = [];
            $scope.month2 = [];

            $scope.accommodations = ['Unterkunft 1', 'Unterkunft 2', 'Unterkunft 3', 'Unterkunft 4', 'Unterkunft 5'];
            $scope.accommodations_actual = 0;

            $scope.hideButtonAdd = false;
            $scope.bookingView = true;


            var moments = moment().locale(language);

            if (!$scope.monthnumber) {
                $scope.monthnumber = moment().month() + 1;
                $scope.monthnumber_actual = $scope.monthnumber;
                $scope.year = moment().year();
                if ($scope.monthnumber == 12) {
                    $scope.year1 = $scope.year + 1;
                    $scope.year2 = $scope.year;
                } else if ($scope.monthnumber == 1) {
                    $scope.year1 = $scope.year;
                    $scope.year2 = $scope.year - 1;
                } else {
                    $scope.year1 = $scope.year;
                    $scope.year2 = $scope.year;
                }
                $scope.monthnumber1 = $scope.monthnumber + 1;
                $scope.monthnumber2 = $scope.monthnumber - 1;
            }

            for (var i = 0; i <= 11; i++) {
                $scope.month.push(moments.month(i).format('MMMM'));
                $scope.month2.push(moments.month(i).format('MMMM') + ' ' + $scope.year);
            }

            $scope.date_actual = moments.month($scope.monthnumber - 1).format('MMMM') + ' ' + $scope.year
        }

        $scope.slideHasChanged = function (index) {
            switch (index) {
                case 0:
                    $scope.date_actual = $scope.month[$scope.monthnumber - 1] + ' ' + $scope.year;
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