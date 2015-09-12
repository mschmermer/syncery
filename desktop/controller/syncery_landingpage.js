
angular.module('MyApp', ['ngMaterial'])
.controller('LandingpageCtrl', function($scope) {
        $scope.language = 'DE';
        $scope.hello = function() {
            alert('Hello ' + (this.email || 'world') + '!');
        }
        $scope.changeLanguage = function(language){
            this.language=language;
        }
    });