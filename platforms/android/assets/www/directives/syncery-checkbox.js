(function () {

    angular
        .module('syncery')
        .directive('synceryCheckbox', function () {
            return {
                restrict: 'E',
                replace: 'true',
                scope: {
                    methodToCall: '&method',
                    selected: '=',
                    name: '='
                },
                templateUrl: './directives/templates/syncery-checkbox.html',
                controller: function ($scope) {
                    if($scope.selected){
                        $scope.text = {'font-weight':'bold'};
                    }else{
                        $scope.text = {'font-weight':'normal'};
                    }
                    $scope.select = function(){
                        if($scope.selected){
                            $scope.selected=false
                            $scope.text = {'font-weight':'normal'};
                        }else{
                            $scope.selected=true;
                            $scope.text = {'font-weight':'bold'};
                        }
                        var func = $scope.methodToCall();
                        func({name: $scope.name,value:{selected: $scope.selected}});
                    }
                },
            }
        })
})
();