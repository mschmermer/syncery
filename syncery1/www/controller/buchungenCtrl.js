(function () {

    angular
        .module('starter.controllers')
        .controller('BuchungenCtrl', BuchungenCtrl);


    function BuchungenCtrl($scope, $location, $ionicPopup) {

        $scope.mounth = ['Januar', 'Februar', 'Maerz'];
        $scope.monat = '';
        $scope.day = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
        $scope.searching = ['Andreas Gallien', 'Andreas Testa', 'Andreas Testa2']

        var d = new Date();
        var dm = d.getMonth() + 1;
        var dj = d.getYear();

        Kalender.init(dm, dj);
        Kalender.writeCalendar();

        /*if((($( window ).width())/290 >= 3)){
            $('#syncery_calendar_placeholder1').load('templates/syncery-calendar.html', function() {
                Kalender.init(dm, dj);
                Kalender.writeCalendar();
            });
        }

        if((($( window ).width())/290 >= 3)){
            $('#syncery_calendar_placeholder2').load('templates/syncery-calendar.html', function() {
                Kalender.init(dm, dj);
                Kalender.writeCalendar();
            });
        }

        if((($( window ).width())/290 >= 3)){
            $('#syncery_calendar_placeholder3').load('templates/syncery-calendar.html', function() {
                Kalender.init(dm, dj);
                Kalender.writeCalendar();
            });
        }*/


        $scope.toggle = function(monat) {
            $selected.find("div.syncery-option").slideUp();
            $scope.monat = monat;
        }

        $scope.toggle2 = function(suche) {
            $selected.find("div.syncery-option").slideUp();
            $scope.suche = suche;
        }

        $(document).ready(function () {

            /*$( window ).resize(function() {
                if((($( window ).width())/290 >= 2) && ($( window ).width())/290 <= 3){
                    $('#syncery_calendar_placeholder2').load('templates/syncery-calendar.html', function() {
                        Kalender.init(dm, dj);
                        Kalender.writeCalendar();
                    });
                }else{
                    $('#syncery_calendar_placeholder2').find('table').remove();
                }

                if((($( window ).width())/290 >= 3)){
                    $('#syncery_calendar_placeholder3').load('templates/syncery-calendar.html', function() {
                        Kalender.init(dm, dj);
                        Kalender.writeCalendar();
                    });
                    alert('test');
                }else{
                    $('#syncery_calendar_placeholder3').find('table').remove();
                }
            });*/

            $selected = false;

            $('td').on('click', function () {
                if (!($(this).hasClass('other-mounth'))) {
                    if ($selected) {
                        $selected.find("div.selected").remove();
                    }
                    $selected = $(this);
                    $selected.append('<div class="selected"></div>');
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
                alert(val);
                $selected.find("div.syncery-option").slideUp();
            });


        })
    }
})();