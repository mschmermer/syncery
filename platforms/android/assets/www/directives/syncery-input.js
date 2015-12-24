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
                    $scope.tel_hide = true;
                    $scope.textarea_hide = true;

                    switch ($scope.type) {
                        case 'text':
                            $scope.pattern = '.*';
                            break;
                        case 'number':
                            $scope.pattern = '[0-9]*';
                            break;
                        case 'tel':
                            $scope.tel_hide = false;
                            $scope.input_hide = true;
                            $scope.pattern = '[0-9]*';
                            break;
                        case 'mail':
                            $scope.pattern = '[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_]' +
                                '[-a-z0-9_]*(\.[-a-z0-9_]+)*\.' +
                                '(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|' +
                                '[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?';
                            break;
                        case 'money':
                            $scope.money_hide = false;
                            $scope.input_hide = true;
                            $scope.pattern = '.*';
                            $scope.input = '0,00';
                            $scope.money = '';
                            $scope.class_form = 'item-icon-right';
                            $scope.change = function () {

                                if($scope.money == '0'){
                                    $scope.money = '';
                                }

                                if($scope.input.length < 3){
                                    $scope.input = '0,00';
                                    $scope.money = '';
                                    return;
                                }
                                if($scope.input.length < 5){
                                    $scope.money = $scope.money.substr(0, $scope.money.length - 2);
                                }

                                if(isNaN(parseInt($scope.input.slice(-1)))){
                                    $scope.money = $scope.money;
                                    $scope.input = $scope.money.substr(0, $scope.money.length - 2) + ',' + $scope.money.substr($scope.money.length - 2, $scope.money.length);
                                }else{
                                    $scope.money = $scope.money + $scope.input.slice(-1);
                                }

                                if ($scope.money.length > $scope.input.length) {
                                    $scope.money = $scope.money.substr(0, $scope.money.length - 2);
                                }

                                if ($scope.money.length == 0) {
                                    $scope.input = '0,00';
                                }

                                if ($scope.money.length == 1) {
                                    $scope.input = '0,0' + $scope.money;
                                }
                                if ($scope.money.length == 2) {
                                    $scope.input = '0,' + $scope.money;
                                }
                                if ($scope.money.length > 2) {
                                    $scope.input = $scope.money.substr(0, $scope.money.length - 2) + ',' + $scope.money.substr($scope.money.length - 2, $scope.money.length);
                                }
                            }
                            break;
                        case 'textarea':
                            $scope.class = 'textarea';
                            $scope.input_hide = true;
                            $scope.textarea_hide = false;
                            $scope.pattern = '.*';
                            break;
                        default:
                            $scope.pattern = '.*';
                            break;
                    }

                },

                link: function (scope, elem, attrs) {

                }
            }
        }
    )
})();