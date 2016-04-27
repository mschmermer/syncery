(function () {

    angular
        .module('syncery')
        .service('MappingSvc', MappingSvc);


    function MappingSvc() {
        var vm = this;

        vm.portals =[
            {id: 1, name: 'booking.com'},
            {id: 2, name: 'rbnb'},
            {id: 3, name: 'Ferienwohnungen.com'},
            {id: 4, name: 'Ostsee-Ferienwohnungen.de'},
            {id: 5, name: 'Hotel.de'},
        ];

        vm.mappings = [
            {acc_id: 1, portal_id: 1, portal_name: 'booking.com', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 1, portal_id: 2, portal_name: 'rbnb', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 1, portal_id: 3, portal_name: 'Ferienwohnungen.com', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 2, portal_id: 4, portal_name: 'Ostsee-Ferienwohnungen.de', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 2, portal_id: 5, portal_name: 'Hotel.de', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 2, portal_id: 1, portal_name: 'booking.com', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 3, portal_id: 2, portal_name: 'rbnb', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 3, portal_id: 3, portal_name: 'Ferienwohnungen.com', password: '34126', sync_id: '3142hcd263'},
            {acc_id: 3, portal_id: 4, portal_name: 'Ostsee-Ferienwohnungen.de', password: '34126', sync_id: '3142hcd263'},

        ];


        service = {
            getMapping: getMapping,
            getMappingByPortal: getMappingByPortal,
        };
        return service;

        function getMapping(acc_id){
            var mapping = vm.mappings.filter(function (obj) {
                return obj.acc_id == acc_id;
            });
            return mapping;
        }

        function getMappingByPortal(acc_id, portal_id){
            var mapping = vm.mappings.filter(function (obj) {
                return obj.acc_id == acc_id;
            });
            var mapping = mapping.filter(function (obj) {
                return obj.portal_id == portal_id;
            });
            return mapping[0];
        }

    }
})();