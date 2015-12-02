(function () {

    angular
        .module('syncery')
        .directive('synceryInput', function () {
            return {
                restrict: 'E',
                templateUrl: './directives/templates/syncery-input.html',
                scope: {
                    title: "=",
                    input: "=",
                    type: "=",
                    methodToCall: '&method',
                },
                controller: function ($scope) {

                    $scope.input_hide = false;
                    $scope.money_hide = true;
                    $scope.textarea_hide = true;

                    switch($scope.type) {
                        case 'text':
                            $scope.pattern='.*';
                            break;
                        case 'number':
                            $scope.pattern='[0-9]{1,7}';
                            break;
                        case 'mail':
                            $scope.pattern='[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_]' +
                                '[-a-z0-9_]*(\.[-a-z0-9_]+)*\.' +
                                '(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|' +
                                '[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?';
                            break;
                        case 'money':
                            $scope.money_hide=false;
                            $scope.pattern='[+-]?[0-9]{1,3}(?:,?[0-9])*(?:\.[0-9]{1,2})';
                            $scope.class_form = 'item-icon-right';
                            break;
                        case 'textarea':
                            $scope.class='textarea';
                            $scope.input_hide=true;
                            $scope.textarea_hide=false;
                            $scope.pattern='.*';
                            break;
                        default:
                            $scope.pattern='.*';
                            break;
                    }

                },

                link: function (scope, elem, attrs) {

                }
            }
        }
    )
})();