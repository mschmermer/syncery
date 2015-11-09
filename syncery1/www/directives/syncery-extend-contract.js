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
                        console.log(payment, $scope.payments);
                        $scope.payments[payment].class = "selected";
                        $scope.payments[$scope.payment].class = "";
                        $scope.payment = payment;
                    }

                    $scope.chooseNumbers = function (number) {
                        $scope.numbers[number].class = "selected";
                        $scope.numbers[$scope.number].class = "";
                        $scope.number = number;
                    }

                    init();

                    function init(){
                        $scope.payments = {
                        };

                        $translate('monthly').then(function (monthly) {
                            $scope.payments[monthly]={value: monthly, class: ""};
                        });
                        $translate('annually').then(function (annually) {
                            $scope.payments[annually]={value: annually, class: ""};
                        });

                        $scope.numbers = {
                            '1': {value: '1', class: ""},
                            '< 5': {value: '< 5', class: ""},
                            '< 10': {value: '< 10', class: ""},
                            '< 30': {value: '< 30', class: ""},
                            '< 100': {value: '< 100', class: ""}
                        };


                        $scope.numbers[$scope.number].class = "selected";


                        $scope.width = document.getElementById("options").offsetWidth - 10;
                        var margin_left = ($scope.width * 0.25) / 6;
                        var width = ($scope.width * 0.75) / 5;
                        var height = width;
                        var font_size = (width/10)*3+'px';
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

                        $scope.payment_style = {
                            'height': height + "px",
                            'width': width + "px",
                            'border': '1px solid white',
                            'font-size': font_size,
                            'line-height': line_height,
                            'width': width + "px"
                        }

                        $scope.circle = {
                            'height': height + "px",
                            'width': height + "px",
                            'border-radius': height+"px"
                        }
                    }

                },
                link: function (scope, element, attrs) {
                    element.bind('click', function () {
                        var func = scope.methodToCall();
                        func(scope.number);
                    });
                }
            }
        })
})
();