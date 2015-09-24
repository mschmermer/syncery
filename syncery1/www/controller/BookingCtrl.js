(function () {

    angular
        .module('starter.controllers')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $location, $ionicPopup, $ionicSideMenuDelegate, ionicMaterialInk, ionicMaterialMotion) {

        $scope.$on('$ionicView.enter', function(){
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function(){
            $ionicSideMenuDelegate.canDragContent(true);
        });

        ionicMaterialInk.displayEffect();


        $scope.mounth = ['Januar', 'Februar', 'Maerz', 'April', 'Mai', 'Juni','Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        $scope.day = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
        $scope.searching = [];
        $scope.input_suche = '';
        kunden = ['Andreas Gallien', 'Marcus Schmermer', 'Anke Schulz', 'Mathias Auge'];

        if(!$scope.dm && !$scope.dj){
            var d = new Date();
            $scope.dm = d.getMonth() + 1;
            $scope.dj = d.getYear();
            $scope.monat = $scope.mounth[$scope.dm-1];
            Kalender.init($scope.dm, $scope.dj);
            Kalender.writeCalendar();
        }


        $scope.toggle = function(monat) {
            $selected.find("div.syncery-option").slideUp();
            $scope.monat = monat;
        }

        $scope.toggle2 = function(suche) {
            $selected.find("div.syncery-option").slideUp();
            $scope.suche = suche;
        }

        $scope.onSwipeLeft = function() {

            $scope.dm = $scope.dm+1;
            $scope.monat = $scope.mounth[$scope.dm-1];

            Kalender.init($scope.dm, $scope.dj);
            Kalender.writeCalendar();

            console.log($scope.dm+' '+$scope.monat);
        }

        $scope.onSwipeRight = function() {

            $scope.dm = $scope.dm-1;
            $scope.monat = $scope.mounth[$scope.dm-1];

            Kalender.init($scope.dm, $scope.dj);
            Kalender.writeCalendar();

            console.log($scope.dm+' '+$scope.monat);
        }

        $(document).ready(function () {

            $selected = false;

            $('td').on('click', function () {
                if (!($(this).hasClass('other-mounth'))) {
                    if ($selected) {
                        $selected.find("div.selected").remove();
                        $('tr').find('.occupied-selected').removeClass('occupied-selected').addClass('occupied');;
                        $('tr').find('.arrival-selected').removeClass('arrival-selected').addClass('arrival');;
                        $('tr').find('.departure-selected').removeClass('departure-selected').addClass('departure');;
                    }
                    $selected = $(this);
                    $selected.append('<div class="selected"></div>');
                }
                if (($(this).hasClass('occupied'))) {
                    id = $(this).attr('data-booking-id');
                    data = '[data-booking-id="'+id+'"].occupied';
                    td = $('tr').find(data).removeClass('occupied').addClass('occupied-selected');
                    data = '[data-booking-id="'+id+'a"].arrival';
                    td = $('tr').find(data).removeClass('arrival').addClass('arrival-selected');
                    data = '[data-booking-id="'+id+'d"].departure';
                    td = $('tr').find(data).removeClass('departure').addClass('departure-selected');

                }
            })

            $('div.syncery-input').on('click', function () {
                $selected = $(this);
                if ($selected && !$selected.find("div.syncery-option").is(':visible')) {
                    $selected.find("div.syncery-option").slideDown('slow');
                }

            });

            $('div.syncery-option.ng-binding').on('click', function () {
                var val = $(this).text();
                $selected.find("div.syncery-option").slideUp();
            });

            $('div.syncery-input-search').on('click', function () {
                $selected = $(this);
                if ($selected && !$selected.find("div.syncery-option").is(':visible')) {
                    $selected.find("div.syncery-option").slideDown('slow');
                }
                $(".syncery-input").keyup(function(){
                    $selected.find("div.syncery-option").remove();
                    var input = $(this).val();
                    // Do Searching in MYSQL
                    $.each( kunden, function( key, value ) {
                        $selected.append('<div style="display: block" class="syncery-option" ng-click="toggle2()">'+value+'</div>');
                    });
                    if(input.length == 0){
                        $selected.find("div.syncery-option").remove();
                    }
                });
            });

        })
    }
})();