(function () {

    angular
        .module('syncery')
        .directive('syncerySearch', function () {
            return {
                restrict: 'E',
                templateUrl: './directives/templates/syncery-search.html',
                scope: {
                    name: '=',
                    search_attribute: '=',
                    tests: '='
                },
                controller: function ($scope) {
                    $scope.tests2 = {
                        0: {name: 'marcus', id: 1},
                        1: {name: 'marcus1', id: 2},
                        2: {name: 'marcus2', id: 3},
                        3: {name: 'marcus3', id: 4}
                    }
                },

                link: function (scope, elem, attrs) {
                    scope.$watch('input_suche',function (oldValue, newValue) {
                        if(newValue && oldValue.length>3){
                            scope.tests = scope.tests2;
                            var a = angular.element(document.querySelector('div#customer-list a')).remove();
                        }
                    });
                }
            }
        }
    )
})();