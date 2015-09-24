(function () {

    angular
        .module('starter.controllers')
        .controller('BookingCtrl', BookingCtrl);


    function BookingCtrl($scope, $ionicSideMenuDelegate, ionicMaterialInk, ionicMaterialMotion) {

        $scope.$on('$ionicView.enter', function(){
            $ionicSideMenuDelegate.canDragContent(false);
        });
        $scope.$on('$ionicView.leave', function(){
            $ionicSideMenuDelegate.canDragContent(true);
        });

        ionicMaterialInk.displayEffect();

        $scope.month = [];
        var moments = moment().locale('de');

        for(var i=0; i<=11; i++){
            $scope.month.push(moments.month(i).format('MMMM'));
        }

        $scope.searching = [];
        $scope.input_suche = '';
        kunden = ['Andreas Gallien', 'Marcus Schmermer', 'Anke Schulz', 'Mathias Auge'];

        if(!$scope.monthnumber && !$scope.year){
            $scope.monthnumber = moment().month();
            $scope.year = moment().year();
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


        }

        $scope.onSwipeRight = function() {


        }

        /*$(document).ready(function () {

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

        })*/
    }
})();