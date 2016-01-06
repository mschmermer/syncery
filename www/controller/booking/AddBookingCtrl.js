(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, PortalSvc, $ionicModal) {

        $scope.accommodations = ['Unterkunft1', 'Unterkunft2', 'Unterkunft3', 'Unterkunft4'];

        $scope.data = {};

        $scope.selectDate = function (date) {
            console.log(date);
        }

        $scope.input = function (input) {
            $scope.data[input['name']] = input['value'];
            console.log($scope.data);
        }

        // Selector
        $scope.selector={};

        $scope.selector['gender'] = {
            items: ['Herr','Frau'],
            name: 'gender',
            selected: 'Herr'
        };

        $scope.selector['accommodations'] = {
            items: ['Unterkunft 1', 'Unterkunft 2', 'Unterkunft 3', 'Unterkunft 4', 'Unterkunft 5'],
            name: 'accommodations',
            selected: 'Unterkunft 1'
        };

        $scope.selector['adult'] = {
            items: ['1 Erwachsener', '2 Erwachsener', '3 Erwachsener', '4 Erwachsener'],
            name: 'accommodations',
            selected: '1 Erwachsener'
        };

        $scope.selector['children'] = {
            items: ['keine Kinder', '1 Kinder', '2 Kinder', '3 Kinder', '4 Kinder'],
            name: 'accommodations',
            selected: 'keine Kinder'
        };

        $scope.selector['animals'] = {
            items: ['keine Tiere', '1 Tier', '2 Tiere', '3 Tiere', 'mehr als 3 Tiere'],
            name: 'accommodations',
            selected: 'keine Tiere'
        };

        $scope.selector['channel'] = {
            items: ['direkt', 'portal'],
            name: 'portal',
            selected: 'direkt'
        };

        $scope.selector['status'] = {
            items: ['reserviert', 'gebucht'],
            name: 'status',
            selected: 'reserviert'
        };

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