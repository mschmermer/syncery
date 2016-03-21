(function () {

    angular
        .module('syncery')
        .controller('RangepickerCtrl', RangepickerCtrl);


    function RangepickerCtrl($scope, language, $timeout, $ionicScrollDelegate, $location) {
        var moments = moment().locale(language);

        $scope.dates = {};

        for(var i= -3;i<=3; i++){
            $scope.dates[i+3] = {month: moment().add(i, 'months').month()+1, year: moment().add(i, 'months').year()};
        }

        $timeout( function() {
            $ionicScrollDelegate.resize();
            $location.hash('3');
            var delegate = $ionicScrollDelegate.$getByHandle('datepicker');
            delegate.anchorScroll(false);
        }, 2);

        $scope.getScrollPosition = function(){
            console.log($ionicScrollDelegate.$getByHandle('datepicker').getScrollView().__maxScrollTop);
            console.log($ionicScrollDelegate.$getByHandle('datepicker').getScrollPosition().top);
            if($ionicScrollDelegate.$getByHandle('datepicker').getScrollPosition().top < 10){
                $scope.dates[7] = {month: moment().add(5, 'months').month()+1, year: moment().add(4, 'months').year()};
            }
        }
    }
}());