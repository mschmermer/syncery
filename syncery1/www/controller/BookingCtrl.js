(function () {

    angular
        .module('syncery')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSideMenuDelegate, ionicMaterialInk, ionicMaterialMotion, $ionicSlideBoxDelegate
                         ) {

        $scope.$on('$ionicView.enter', function () {
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function () {
            $ionicSideMenuDelegate.canDragContent(true);
        });

        $scope.myActiveSlide = 0;

        ionicMaterialInk.displayEffect();

        $scope.month = [''];
        $scope.month2 = [];

        accommodations = ['Unterkunft 1','Unterkunft 2','Unterkunft 3','Unterkunft 4','Unterkunft 5'];
        accommodations_actual = 0;

        var moments = moment().locale('de');

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

        $scope.toggle = function (monat) {
            $selected.find("div.syncery-option").slideUp();
            $scope.monat = monat;
        }

        $scope.toggle2 = function (suche) {
            $selected.find("div.syncery-option").slideUp();
            $scope.suche = suche;
        }


        $scope.slideChanged = function (index) {
            switch (index) {
                case 0:
                    $scope.monthnumber_actual = $scope.monthnumber;
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
                    $scope.monthnumber_actual = $scope.monthnumber1;
                    switch ($scope.myActiveSlide) {
                        case 0:
                            $scope.monthnumber2 = $scope.monthnumber2 + 3;
                            if ($scope.monthnumber2 > 11) {
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
                    ;
                    break;
                case 2:
                    $scope.monthnumber_actual = $scope.monthnumber2;
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

        };
    }
})();