(function () {

    angular
        .module('syncery')
        .directive('synceryToggle', function () {
            return {
                restrict: 'E',
                replace: 'true',
                scope: {
                    methodToCall: '&method',
                    selected: '=',
                    attributes: '='
                },
                templateUrl: './directives/templates/syncery-toggle.html',
                controller: function ($scope) {
                    $scope.hide=true;
                    if($scope.selected == 1){
                        $scope.classFirst="selected";
                    }else{
                        $scope.classSecound="selected";
                    }

                    $scope.select = function(item){
                        $scope.selected = item;
                        if(item == '1'){
                            $scope.classFirst="selected";
                            $scope.classSecound="";
                        }else{
                            $scope.classSecound="selected";
                            $scope.classFirst="";
                        }
                    }
                },
                link: function (scope, element, attrs) {
                    element.bind('click', function () {
                        var func = scope.methodToCall();
                        func(scope.selected);
                    });
                }
            }
        })
})
();