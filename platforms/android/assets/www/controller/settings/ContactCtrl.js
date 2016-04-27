(function () {

    angular
        .module('syncery')
        .controller('ContactCtrl', ContactCtrl);


    function ContactCtrl($scope, $ionicModal, $translate) {
        $scope.selector={};
        $scope.selector['category'] = {
            items: ['category 1','category 2','category 3','category 4','category 5'],
            name: 'category',
            selected: ''
        };

        $translate(['select_category']).then(function (translations) {
            console.log(translations);
            $scope.selector['category'].selected = translations.select_category;
        });

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal = modal
        })


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
            //$state.go('app.selector', {'selector': $scope.selector['gender'], 'view': 'addCustomer'});
        }
    }
})();