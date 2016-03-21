(function () {

    angular
        .module('syncery')
        .controller('AddBookingCtrl', AddBookingCtrl);


    function AddBookingCtrl($scope, $ionicModal, $state, $stateParams, CustomerSvc, $ionicHistory, BookingSvc) {

        $scope.accommodations = ['Unterkunft1', 'Unterkunft2', 'Unterkunft3', 'Unterkunft4'];

        $scope.data = {};
        $scope.modal_data = {};

        $scope.selectDate = function (date) {

        }

        $scope.customer = BookingSvc.getSelectedCustomer();


        $scope.input = function (input) {
            $scope.data[input['name']] = input['value'];
        }

        $scope.save = function () {
            alert('save');
        }

        // Selector
        $scope.selector = {};

        $scope.selector['gender'] = {
            items: ['Herr', 'Frau'],
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
        }).then(function (modal) {
            $scope.modal = modal
        });

        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal.show();
        }

        $scope.searchCustomer = function () {
            $state.go('app.searchCustomer');
        }

        $scope.data.deposit = '';
        $scope.data.final_payment = '';
        $scope.data.money = {};

        $scope.changeMoney = function (field) {
            if (!$scope.data.money[field]) {
                $scope.data.money[field] = "";
            }
            if (accounting.formatMoney(($scope.data.money[field] / 100), "", 2, ".", ",") != $scope.data[field].substr(0, $scope.data[field].length - 1)
                && $scope.data.money[field] != '') {
                $scope.data.money[field] = $scope.data.money[field].substr(0, $scope.data.money[field].length - 1);
                $scope.data[field] = accounting.formatMoney(($scope.data.money[field] / 100), "", 2, ".", ",");
                if ($scope.data.money[field] == '') {
                    $scope.data[field] = '';
                }
                return;
            }

            if (isNaN(parseInt($scope.data[field].slice(-1)))) {
                $scope.data.money[field] = $scope.data.money[field];
                $scope.data[field] = $scope.data[field].substr(0, $scope.data[field].length - 1);
                return;
            } else {
                $scope.data.money[field] = $scope.data.money[field] + '' + $scope.data[field].slice(-1);
            }

            $scope.data[field] = accounting.formatMoney(($scope.data.money[field] / 100), "", 2, ".", ",");
        }


    }
})();