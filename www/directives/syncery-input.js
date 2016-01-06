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
                    $scope.change = function () {}

                    switch ($scope.type) {
                        case 'text':
                            $scope.typ = 'text';
                            $scope.pattern = '.*';
                            break;
                        case 'number':
                            $scope.typ = 'tel';
                            $scope.pattern = '[0-9]*';
                            break;
                        case 'plz':
                            $scope.typ = 'tel';
                            $scope.pattern = '[0-9]*';
                            $scope.max = 999999;
                            break;
                        case 'tel':
                            $scope.typ = 'tel';
                            $scope.pattern = '[0-9]*';
                            break;
                        case 'mail':
                            $scope.typ = 'email';
                            break;
                        case 'money':
                            $scope.typ = 'text';
                            $scope.money_hide = false;
                            $scope.pattern = '.*';
                            $scope.money = '';
                            $scope.class_form = 'item-icon-right';
                            $scope.maxlenght = 21;
                            $scope.change = function () {


                                if(accounting.formatMoney(($scope.money/100), "", 2, ".", ",") != $scope.input.substr(0, $scope.input.length - 1)
                                && $scope.money!=''){
                                    $scope.money = $scope.money.substr(0, $scope.money.length - 1);
                                    $scope.input = accounting.formatMoney(($scope.money/100), "", 2, ".", ",");
                                    if($scope.money==''){
                                        $scope.input='';
                                    }
                                    return;
                                }

                                if(isNaN(parseInt($scope.input.slice(-1)))){
                                    $scope.money = $scope.money;
                                    $scope.input = $scope.input.substr(0, $scope.input.length - 1);
                                    return;
                                }else{
                                    $scope.money = $scope.money+''+$scope.input.slice(-1);
                                }

                                $scope.input = accounting.formatMoney(($scope.money/100), "", 2, ".", ",");


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