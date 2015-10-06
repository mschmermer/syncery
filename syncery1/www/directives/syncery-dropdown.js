(function () {

    angular
        .module('syncery')
        .directive('synceryDropdown', function () {
            return {
                restrict: 'E',
                templateUrl: './directives/templates/syncery-dropdown.html',
                scope: {
                    name: '=',
                    attributes: '=',
                    attribute: '='
                },
                controller: function ($scope) {
                    $scope.hide=true;
                },

                link: function (scope, elem, attrs) {
                    scope.open = function(){
                        scope.hide=false;
                    }

                    scope.select = function(month){
                        scope.attribute = month;
                        scope.hide=true;
                    }
                }
            }
        }
    )
})();