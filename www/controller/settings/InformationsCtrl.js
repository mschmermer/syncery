(function () {

    angular
        .module('syncery')
        .controller('InformationsCtrl', InformationsCtrl);


    function InformationsCtrl($scope, $ionicModal, language, $ionicScrollDelegate, $timeout) {

        var moments = moment().locale(language);

        $scope.dates = {};

        for (var i = 0; i <= 3; i++) {
            $scope.dates[i] = {
                month: moment().add(i, 'months').month() + 1,
                year: moment().add(i, 'months').year()
            };
        }

        $scope.getScrollPosition = function () {
            if ($ionicScrollDelegate.$getByHandle('datepicker').getScrollPosition().top >
                $ionicScrollDelegate.$getByHandle('datepicker').getScrollView().__maxScrollTop+20) {
                $timeout(function () {
                    $scope.dates[i + 3] = {
                        month: moment().add(i, 'months').month() + 1,
                        year: moment().add(i, 'months').year()
                    };
                    i++;
                    $ionicScrollDelegate.resize();
                    console.log($scope.dates, i);
                }, 500);
            }
        }

        $scope.clickCalendar = function(data){
            console.log(data);
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


    }
})();