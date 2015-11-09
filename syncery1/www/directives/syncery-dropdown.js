(function () {

    angular
        .module('syncery')
        .directive('synceryDropdown', function () {
            return {
                restrict: 'E',
                replace: 'true',
                templateUrl: './directives/templates/syncery-dropdown.html',
                scope: {
                    methodToCall: '&method',
                    name: '=',
                    attributes: '=',
                    attribute: '='
                },
                controller: function ($scope) {
                    $scope.hide = true;
                },

                link: function (scope, elem, attrs) {
                    scope.open = function () {
                        scope.hide = false;
                    }

                    scope.select = function (attribute) {
                        scope.attribute = attribute;
                        scope.hide = true;
                        var func = scope.methodToCall();
                        func(scope.attribute);
                    }

                }
            }
        }
    )
})();