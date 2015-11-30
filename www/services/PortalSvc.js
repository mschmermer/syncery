(function () {

    angular
        .module('syncery')
        .service('PortalSvc', PortalSvc);


    function PortalSvc() {
        var vm = this;

        vm.portals =[
            {id: 1, name: 'booking.com'},
            {id: 2, name: 'rbnb'},
            {id: 3, name: 'Ferienwohnungen.com'},
            {id: 4, name: 'Ostsee-Ferienwohnungen.de'},
            {id: 5, name: 'Hotel.de'},
        ];

        service = {
            getPortals: getPortals,
        };
        return service;

        function getPortals(){
            return vm.portals;
        }


    }
})();