(function () {

    angular
        .module('syncery')
        .controller('SearchCtrl', SearchCtrl);


    function SearchCtrl($scope, $ionicFilterBar) {
        $scope.data = {};
        $scope.data.showSearch = true;
        $scope.data.searchQuery = '';

        $ionicFilterBar.show({
            update: function (filteredItems) {
            },
            filterProperties: 'description'
        });


        /*var anim = $ionicAnimation({
         // A unique, reusable name
         name: 'popIn',

         // The duration of an auto playthrough
         duration: 0.5,

         // How long to wait before running the animation
         delay: 0,

         // Whether to reverse after doing one run through
         autoReverse: false,

         // How many times to repeat? -1 or null for infinite
         repeat: -1,

         // Timing curve to use (same as CSS timing functions), or a function of time "t" to handle it yourself
         curve: 'ease-in-out',

         onStart: function() {
         // Callback on start
         },
         onEnd: function() {
         // Callback on end
         },
         step: function(amt) {

         }
         })*/

    }
}());