(function () {

    angular
        .module('syncery')
        .directive('synceryDatepicker', function () {
            return {
                restrict: 'E',
                templateUrl: './directives/templates/syncery-datepicker.html',
                scope: {
                    day: "=",
                    month: "=",
                    year: "=",
                    name: "="
                },
                controller: function ($scope) {

                },

                link: function (scope, elem, attrs) {

                }
            }
        }
    )
})();