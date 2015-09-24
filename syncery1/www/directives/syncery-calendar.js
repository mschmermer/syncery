(function () {

    angular
        .module('starter.controllers')
        .directive('myCustomer', function() {
            return {
                template: 'Name: {{customer.name}} Address: {{customer.address}}'
            };
        })
});