(function () {

    angular
        .module('syncery')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSlideBoxDelegate, $ionicModal, $ionicTabsDelegate,
                         language, $ionicScrollDelegate, $timeout, $location, $state,
                         $stateParams, UserSvc, BookingSvc, AccommodationSvc, CustomerSvc) {

        init();

        function init() {

            // Filter for List-View

            $scope.filter_class={};
            $scope.filter_class.date="selected";
            $scope.filter_class.open="";
            $scope.filter_class.unpaid="";

            // Selection for accommodations

            $scope.selector={};
            $scope.selector['accommodations'] = {
                items: ['Unterkunft 1', 'Unterkunft 2', 'Unterkunft 3', 'Unterkunft 4', 'Unterkunft 5'],
                name: 'accommodations',
                selected: 'Unterkunft 1'
            };

            /*$scope.standard_class = 'item item-stacked-label';
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
            };*/

            //$scope.beginning = UserSvc.getWeekBeginning();

            $scope.selected_booking = {};

            // slider variables

            $scope.myActiveSlide = 0;

            // amount of calendars by Screen width

            $scope.hideCal1 = false;
            $scope.hideCal2 = false;
            $scope.jumper = 1;
            $scope.col = "col-100";


            if(window.innerWidth>=605){
                $scope.hideCal1 = true;
                $scope.col = "col-50";
                $scope.jumper = 2;
            }
            if(window.innerWidth>=910){
                $scope.hideCal2 = true;
                $scope.col = "col-33";
                $scope.jumper = 3;
            }

            $scope.month = [];
            $scope.month2 = [];

            $scope.bookingView = true;


            var moments = moment().locale(UserSvc.getLanguage());

            if (!$scope.monthnumber) {
                $scope.monthnumber = moment().month() + 1;
                $scope.monthnumber_actual = $scope.monthnumber;
                $scope.year = moment().year();
                $scope.monthnumber1 = $scope.monthnumber + $scope.jumper;
                $scope.monthnumber2 = $scope.monthnumber - $scope.jumper;
                $scope.year1 = $scope.year;
                $scope.year2 = $scope.year;

                if($scope.monthnumber1 < 0){
                    $scope.monthnumber1+= 12;
                    $scope.year1-=1;
                }
                if($scope.monthnumber1 > 12){
                    $scope.monthnumber1-= 12;
                    $scope.year1+=1;
                }
                if($scope.monthnumber2 < 0){
                    $scope.monthnumber2+= 12;
                    $scope.year2-=1;
                }
                if($scope.monthnumber2 > 12){
                    $scope.monthnumber2-= 12;
                    $scope.year2+=1;
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

        $scope.$watch('selector.month.selected', function (newvalue) {
            $scope.selectMonth(newvalue);
        });

        $scope.$on('$ionicView.enter', function(){
            $scope.tab_id = parseInt($stateParams.tab_id);
            $scope.bookings = BookingSvc.getBookingData();
            for (var id in $scope.bookings ) {
                $scope.bookings[id].accommodation = AccommodationSvc.getAccommodationById($scope.bookings[id].accommodation_id).name;
                $scope.bookings[id].customer = CustomerSvc.getCustomersById($scope.bookings[id].customer_id);
                //var moments = moment().locale(UserSvc.getLanguage());
                //$scope.bookings[id].arrival = moment($scope.bookings[id].arrival, "YYYY-MM-DD").locale(UserSvc.getLanguage()).format('DD. MMM YYYY');
                //$scope.bookings[id].departure = moment($scope.bookings[id].departure, "YYYY-MM-DD").locale(UserSvc.getLanguage()).format('DD. MMM YYYY');
            }
            if($scope.tab_id){
                $ionicTabsDelegate.$getByHandle('bookingtabs').select($scope.tab_id);
            }
            if($stateParams.filter){
                $scope.filter($stateParams.filter);
            }
        });

        $scope.filter = function(filter){
            switch (filter) {
                case "date":
                    $scope.filter_class.date = "selected";
                    $scope.filter_class.open = "";
                    $scope.filter_class.unpaid = "";
                    break;
                case "open":
                    $scope.filter_class.date = "";
                    $scope.filter_class.open = "selected";
                    $scope.filter_class.unpaid = "";
                    break;
                case "unpaid":
                    $scope.filter_class.date = "button-light";
                    $scope.filter_class.open = "button-light";
                    $scope.filter_class.unpaid = "selected";
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
                $scope.selected_booking = BookingSvc.getBookingDataById($scope.booking_id);
                $scope.selected_booking.accommodation = AccommodationSvc.getAccommodationById($scope.selected_booking.accommodation_id).name;
                $scope.selected_booking.customer = CustomerSvc.getCustomersById($scope.selected_booking.customer_id);
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
            $state.go('app.bookingDeatils', {id: $scope.booking_id});
        }

        $scope.showBooking = function () {
            $state.go('app.bookingDeatils', {id: $scope.booking_id});
        }

        $scope.addBooking = function(){
            $state.go('app.addBooking');
        }

        window.addEventListener('resize', function(event){
            if(window.innerWidth<605){
                $scope.hideCal1 = false;
                $scope.hideCal2 = false;
                $scope.jumper = 1;
                $scope.col = "col-100";
            }
            if(window.innerWidth>=605){
                $scope.hideCal1 = true;
                $scope.hideCal2 = false;
                $scope.col = "col-50";
                $scope.jumper = 2;
            }
            if(window.innerWidth>=910){
                $scope.hideCal2 = true;
                $scope.col = "col-33";
                $scope.jumper = 3;
            }
        });




        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal_selector = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal_selector.show();
        }

        $scope.slideHasChanged = function (index) {
            switch (index) {
                case 0:
                    switch ($scope.myActiveSlide) {
                        case 1:
                            $scope.date_actual = $scope.month[$scope.monthnumber-1] + ' ' + $scope.year;
                            $scope.selector.month.selected = $scope.date_actual;

                            break;
                        case 2:
                            $scope.date_actual = $scope.month[$scope.monthnumber-1] + ' ' + $scope.year;
                            $scope.selector.month.selected = $scope.date_actual;
                            break;
                    }
                    break;
                case 1:
                    switch ($scope.myActiveSlide) {
                        case 0:
                            $scope.date_actual = $scope.month[$scope.monthnumber1-1] + ' ' + $scope.year1;
                            $scope.selector.month.selected = $scope.date_actual;
                            break;
                        case 2:
                            $scope.date_actual = $scope.month[$scope.monthnumber1 -1] + ' ' + $scope.year1;
                            $scope.selector.month.selected = $scope.date_actual;
                            break;
                    }

                    break;
                case 2:
                    switch ($scope.myActiveSlide) {
                        case 1:
                            $scope.date_actual = $scope.month[$scope.monthnumber2 - 1] + ' ' + $scope.year2;
                            $scope.selector.month.selected = $scope.date_actual;
                            break;
                        case 0:
                            $scope.date_actual = $scope.month[$scope.monthnumber2 -1] + ' ' + $scope.year2;
                            $scope.selector.month.selected = $scope.date_actual;
                            break;
                    }
                    break;

            }
            $scope.myActiveSlide = $ionicSlideBoxDelegate.currentIndex();
        }

        $scope.selectMonth = function (month) {
            var moments = moment().locale(UserSvc.getLanguage());
            month = month.split(" ");
            actual_month = parseInt(moments.month(month[0]).format('M'));
            actual_year = parseInt(month[1]);
            switch ($scope.myActiveSlide) {
                case 0:
                    $scope.monthnumber = actual_month;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month + 1* $scope.jumper;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month - 1* $scope.jumper;
                    $scope.year2 = actual_year;
                    if($scope.monthnumber2 <= 0){
                        $scope.monthnumber2+=12;
                        $scope.year2-=1;
                    }
                    if($scope.monthnumber2 > 12){
                        $scope.monthnumber2-=12;
                        $scope.year2+=1;
                    }
                    if($scope.monthnumber1 <= 0){
                        $scope.monthnumber1+=12;
                        $scope.year1-=1;
                    }
                    if($scope.monthnumber1 > 12){
                        $scope.monthnumber1-=12;
                        $scope.year1+=1;
                    }
                    break;
                case 1:
                    $scope.monthnumber = actual_month - 1* $scope.jumper;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month + 1* $scope.jumper;
                    $scope.year2 = actual_year;
                    if($scope.monthnumber2 <= 0){
                        $scope.monthnumber2+=12;
                        $scope.year2-=1;
                    }
                    if($scope.monthnumber2 > 12){
                        $scope.monthnumber2-=12;
                        $scope.year2+=1;
                    }
                    if($scope.monthnumber <= 0){
                        $scope.monthnumber+=12;
                        $scope.year-=1;
                    }
                    if($scope.monthnumber > 12){
                        $scope.monthnumber-=12;
                        $scope.year+=1;
                    }
                    break;
                case 2:
                    $scope.monthnumber = actual_month + 1* $scope.jumper;
                    $scope.year = actual_year;
                    $scope.monthnumber1 = actual_month - 1* $scope.jumper;
                    $scope.year1 = actual_year;
                    $scope.monthnumber2 = actual_month;
                    $scope.year2 = actual_year;
                    if($scope.monthnumber <= 0){
                        $scope.monthnumber+=12;
                        $scope.year-=1;
                    }
                    if($scope.monthnumber > 12){
                        $scope.monthnumber-=12;
                        $scope.year+=1;
                    }
                    if($scope.monthnumber1 <= 0){
                        $scope.monthnumber1+=12;
                        $scope.year1-=1;
                    }
                    if($scope.monthnumber1 > 12){
                        $scope.monthnumber1-=12;
                        $scope.year1+=1;
                    }
                    break;
            }
        }
    }
})();