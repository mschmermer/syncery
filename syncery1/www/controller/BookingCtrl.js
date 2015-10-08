(function () {

    angular
        .module('syncery')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate,
    $ionicPopover, language) {

        init();

        $scope.toggle = function (monat) {
            $selected.find("div.syncery-option").slideUp();
            $scope.monat = monat;
        }

        $scope.toggle2 = function (suche) {
            $selected.find("div.syncery-option").slideUp();
            $scope.suche = suche;
        }


        $scope.slideChanged = function (index) {
            changeSlideNumbers(index);
        };

        function init(){
            $scope.$on('$ionicView.enter', function () {
                $ionicSideMenuDelegate.canDragContent(false);
            });
            $scope.$on('$ionicView.leave', function () {
                $ionicSideMenuDelegate.canDragContent(true);
            });

            $scope.myActiveSlide = 0;


            $scope.language = language;

            $scope.month = [];
            $scope.month2 = [];

            $scope.accommodations = ['alle Unterk�nfte', 'Unterkunft 1','Unterkunft 2','Unterkunft 3','Unterkunft 4','Unterkunft 5'];
            $scope.accommodations_actual = 0;

            $scope.title = {
                'de': 'Buchungen',
                'en' : 'Bookings'
            }

            $scope.booking_id='123';

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

            $scope.date_actual=moments.month($scope.monthnumber-1).format('MMMM') + ' ' + $scope.year
        }

        function changeSlideNumbers(index){
            switch (index) {
                case 0:
                    $scope.date_actual=$scope.month[$scope.monthnumber-1] + ' ' + $scope.year;
                    switch ($scope.myActiveSlide) {
                        case 1:
                            $scope.monthnumber2 = $scope.monthnumber2 - 3;
                            if ($scope.monthnumber2 <= 0) {
                                $scope.monthnumber2 = $scope.monthnumber2 + 12;
                                $scope.year2 = $scope.year2 - 1;
                            }
                            break;
                        case 2:
                            ;
                            $scope.monthnumber1 = $scope.monthnumber1 + 3;
                            if ($scope.monthnumber1 > 12) {
                                $scope.monthnumber1 = $scope.monthnumber1 - 12;
                                $scope.year1 = $scope.year1 + 1;
                            }
                            break;
                    }
                    break;
                case 1:
                    $scope.date_actual=$scope.month[$scope.monthnumber1-1] + ' ' + $scope.year1;
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
                    $scope.date_actual=$scope.month[$scope.monthnumber2-1] + ' ' + $scope.year2;
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


        $scope.popover = $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        });

        // .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        });
    }
})();