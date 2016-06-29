(function () {

    angular
        .module('syncery')
        .directive('synceryContractDays', function () {
            return {
                templateUrl: './directives/templates/syncery-contract-days.html',
                scope: {
                    remaining: "=",
                    total: '='
                },
                controller: function ($scope) {
                    $scope.remaining_percent = ($scope.total-$scope.remaining)/$scope.total*100;
                    $scope.total_percent = 100-$scope.remaining_percent;

                    $scope.total_width = {'width': ($scope.total_percent-4)+'%'};
                    $scope.remaining_width = {'width':($scope.remaining_percent-4)+'%'};
                    $scope.remaining_days = {'left':(window.innerWidth*($scope.remaining_percent/100)-20)+'px'};

                    console.log(window.innerWidth*$scope.remaining_percent);
                },

                link: function (scope, elem, attrs) {
                }
            }
        }
    )
})();