(function () {

    angular
        .module('syncery')
        .directive('synceryCalendarSlider', function () {
            return {
                restrict: 'E',
                replace: 'true',
                templateUrl: './directives/templates/syncery-calendar-slider.html',
                scope: {
                    methodToCall: '&method',
                    month: '=',
                    year: '=',
                },
                controller: function ($scope, $ionicSlideBoxDelegate, BookingSvc, $element, UserSvc, language) {

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
                        var moments = moment().locale(language);
                        actual_month = $scope.month;
                        actual_year = $scope.year;
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

                    $scope.myActiveSlide = 0;

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

                    $scope.hideButtonAdd = false;
                    $scope.bookingView = true;


                    var moments = moment().locale(language);

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

                    $scope.selectMonth($scope.month);

                },

                link: function (scope) {



                }
            }
        }
    )
})();