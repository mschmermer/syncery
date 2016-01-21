(function () {

    angular
        .module('syncery')
        .controller('GeneralCtrl', GeneralCtrl);


    function GeneralCtrl($scope, UserSvc, $ionicModal, $translate, language) {
        $scope.data = {};

        $scope.selector={};

        var timezones_moment = moment.tz.names();
        var timezones = {};

        for(var i in timezones_moment){
            zone = timezones_moment[i].split('/');
            if(zone.length == 1){
                if(!timezones['others']){
                    timezones['others']=[];
                }
                timezones['others'].push(zone[1]);
            }else if(zone.length == 2){
                if(!timezones[zone[0]]){
                    timezones[zone[0]]=[];
                }
                timezones[zone[0]].push(zone[1]);
            }else{
                if(!timezones[zone[1]]){
                    timezones[zone[1]]=[];
                }
                timezones[zone[1]].push(zone[2]);
            }

        }

        $scope.$watch('selector.timezone1.selected', function (newvalue) {
            $scope.selector.timezone2.items = timezones[$scope.selector['timezone1'].selected];
        });

        $scope.$watch('selector.language.selected', function (newvalue) {

        });

        $scope.selector['timezone1'] = {
            items: Object.keys(timezones),
            name: 'timezone',
            selected: 'Europe'
        };

        $scope.selector['timezone2'] = {
            items: timezones[$scope.selector['timezone1'].selected],
            name: 'timezone',
            selected: 'Berlin'
        };

        $scope.selector['currency'] = {
            items: ['€','$'],
            name: 'currency',
            selected: '€'
        };

        $scope.selector['language'] = {
            items: ['DE','EN'],
            name: 'language',
            selected: 'DE'
        };

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
        }

        $scope.save = function(){
            language = $scope.language;
            $translate.use($scope.language);
        }
    }
})();