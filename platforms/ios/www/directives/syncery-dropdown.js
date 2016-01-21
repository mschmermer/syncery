(function () {

    angular
        .module('syncery')
        .directive('synceryDropdown', function () {
            return {
                restrict: 'E',
                replace: 'true',
                templateUrl: './directives/templates/syncery-dropdown.html',
                scope: {
                    methodToCall: '&method',
                    name: '=',
                    attributes: '=',
                    attribute: '='
                },
                controller: function ($scope, $element, $ionicScrollDelegate) {
                    $scope.hide = true;

                    $element.on('click', function(){
                        $ionicScrollDelegate.resize();
                    });
                },

                link: function (scope, elem, attrs) {
                    scope.open = function () {
                        if(scope.hide){
                            scope.hide = false;
                        }else{
                            scope.hide = true;
                        }
                    }

                    scope.select = function (attribute) {
                        scope.attribute = attribute;
                        scope.hide = true;
                        var func = scope.methodToCall();
                        func(scope.attribute);
                    }

                }
            }
        }
    )
})();