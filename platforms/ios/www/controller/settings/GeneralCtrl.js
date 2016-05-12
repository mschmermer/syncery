(function () {

    angular
        .module('syncery')
        .controller('GeneralCtrl', GeneralCtrl);


    function GeneralCtrl($scope, UserSvc, $ionicModal, $translate, language, $ionicHistory) {
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
            switch (newvalue){
                case 'german': $translate.use('de'); UserSvc.setLanguage('de');break;
                case 'english': $translate.use('en'); UserSvc.setLanguage('en'); break;
            }

            $ionicHistory.clearCache();
        });

        $scope.$watch('selector.week_beginning.selected', function (newvalue) {
            UserSvc.setWeekBeginning(newvalue);
            $ionicHistory.clearCache();
            console.log(UserSvc.getWeekBeginning());
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
            items: ['german','english'],
            name: 'language',
            selected: ''
        };

        switch (UserSvc.getLanguage()){
            case 'de': $scope.selector.language.selected ='german';break;
            case 'en': $scope.selector.language.selected ='english';break;
        }

        $scope.selector['date_format'] = {
            items: ['dd/mm/yyyy','yyyy/mm/dd'],
            name: 'date_format',
            selected: 'dd/mm/yyyy'
        };

        $scope.selector['week_beginning'] = {
            items: ['monday','sunday'],
            name: 'week_beginning',
            selected: UserSvc.getWeekBeginning()
        };

        $scope.selector['number_format'] = {
            items: ['#.###,##','#,###.##'],
            name: 'number_format',
            selected: '#.###,##'
        };

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

        $scope.save = function(){
            language = $scope.language;
            $translate.use($scope.language);
        }
    }
})();