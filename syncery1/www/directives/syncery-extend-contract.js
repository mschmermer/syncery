(function () {

    angular
        .module('syncery')
        .directive('synceryExtendContract', function () {
            return {
                restrict: 'E',
                replace: 'true',
                scope: {
                    number: '=',
                    payment: '=',
                    methodToCall: '&method'
                },
                templateUrl: './directives/templates/syncery-extend-contract.html',
                controller: function ($scope, $translate) {
                    console.log($scope.payment);

                    $scope.currency = '€';
                    $scope.costs = '5';
                    $scope.payment_time_shortly = 'mtl.';

                    $scope.choosePayment = function (payment) {
                        console.log(payment, $scope.payment);
                        $scope.payments[payment] = "selected";
                        $scope.payments[$scope.payment] = "";
                        $scope.payment = payment;
                        if($scope.payment = "monthly"){
                            var number = $scope.number.substring($scope.number.length-2, $scope.number.length);
                            $scope.costs = number * 5;
                        }
                        if($scope.payment = "annually"){
                            var number = $scope.number.substring($scope.number.length-2, $scope.number.length);
                            $scope.costs = number * 10 * 5;
                        }
                    }

                    $scope.chooseNumbers = function (number) {
                        $scope.numbers[number].class = "selected";
                        $scope.numbers[$scope.number].class = "";
                        $scope.number = number;
                    }

                    init();

                    function init() {
                        $scope.payments = {};
                        $scope.payments["monthly"] = "";
                        $scope.payments["annually"] = "";

                        $scope.numbers = {
                            '1': {value: '1', class: ""},
                            '< 5': {value: '< 5', class: ""},
                            '< 10': {value: '< 10', class: ""},
                            '< 30': {value: '< 30', class: ""},
                            '< 100': {value: '< 100', class: ""}
                        };

                        $scope.numbers[$scope.number].class = "selected";
                        $scope.payments[$scope.payment] = "selected";

                        $scope.width = document.getElementById("options").offsetWidth - 10;
                        var margin_left = ($scope.width * 0.25) / 6;
                        var width = ($scope.width * 0.75) / 5;
                        var height = width;
                        var font_size = (width / 10) * 3 + 'px';
                        var line_height = (height - 2) + "px";

                        $scope.number_style = {
                            'height': height + "px",
                            'line-height': line_height,
                            'width': width + "px",
                            'margin-left': margin_left + "px",
                            'font-size': font_size
                        }

                        $scope.width = document.getElementById("options").offsetWidth - 4;
                        var width = ($scope.width * 0.25);
                        var margin_left = ($scope.width * 0.50) / 3;

                        $scope.payment_style = {
                            'height': height + "px",
                            'width': width + "px",
                            'font-size': font_size,
                            'line-height': line_height,
                            'margin_left': margin_left + "px"
                        }

                        $scope.circle = {
                            'height': height + "px",
                            'width': height + "px",
                            'border-radius': height + "px"
                        }
                    }

                },
                link: function (scope, element, attrs) {
                    element.bind('click', function () {

                        /*switch (scope.number)
                        {
                            case "1":
                                if(scope.payment = "monthly"){
                                    scope.costs = 5;
                                }
                                if(scope.payment = "annually"){
                                    scope.costs = 48;
                                }
                                break;
                            case "< 10":
                                if(scope.payment = "monthly"){
                                    scope.costs = 50;
                                }
                                if(scope.payment = "annually"){
                                    scope.costs = 480;
                                }
                                break;
                            case "< 30":
                                if(scope.payment = "monthly"){
                                    scope.costs = 150;
                                }
                                if(scope.payment = "annually"){
                                    scope.costs = 1440;
                                }
                                break;
                            case "< 100":
                                if(scope.payment = "monthly"){
                                    scope.costs = 500;
                                }
                                if(scope.payment = "annually"){
                                    scope.costs = 4800;
                                }
                                break;
                        }*/

                        var func = scope.methodToCall();
                        func({number: scope.number, payment: scope.payment});
                    });
                }
            }
        })
})
();