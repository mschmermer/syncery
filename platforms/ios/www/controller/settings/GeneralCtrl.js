(function () {

    angular
        .module('syncery')
        .controller('GeneralCtrl', GeneralCtrl);


    function GeneralCtrl($scope, UserSvc, LoginFactory, $state, $stateParams, CustomerSvc, $translate, language) {
        $scope.id = 1;
        $scope.languages = ['de', 'en'];
        $scope.languageSelected = ($scope.languages.indexOf(UserSvc.getLanguage()))+1;
        console.log($scope.languageSelected);
        $scope.language = language;

        $scope.decision = ['on', 'off'];

        $scope.switchLanguage = function (id) {
            if(id == '1'){
                $scope.language = 'de';
            }
            if(id == '2'){
                $scope.language = 'en';
            }
        };

        $scope.save = function(){
            language = $scope.language;
            $translate.use($scope.language);
        }
    }
})();