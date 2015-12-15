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

        vm.configPortals = [
            {   id: 1,
                portal_id: 1,
                portal_name: 'booking.com',
                mail: 'ma.schmermer@gmail.com',
                password: 1234,
                key: 'fsd678dsfgs',
                sync_id: 67},
            {   id: 1,
                portal_id: 2,
                portal_name: 'rbnb',
                mail: 'ma.schmermer@gmail.com',
                password: 1234,
                key: 'fsd678dsfgs',
                sync_id: 67},
            {   id: 1,
                portal_id: 3,
                portal_name: 'Ferienwohnungen.com',
                mail: 'ma.schmermer@gmail.com',
                password: 1234,
                key: 'fsd678dsfgs',
                sync_id: 67}
        ];

        service = {
            getPortals: getPortals,
            getPortalById: getPortalById,
            getPortalnameById: getPortalnameById,
            getPortalByName: getPortalByName,
            savePortal: savePortal,
            getConfigPortals: getConfigPortals,
            deletePortal: deletePortal
        };
        return service;

        function getPortals(){
            return vm.portals;
        }

        function getPortalById(id) {
            var portal = vm.portals.filter(function (obj) {
                return obj.id == id;
            });
            return portal[0];
        }

        function getPortalnameById(id) {
            var portal = vm.portals.filter(function (obj) {
                return obj.id == id;
            });
            return portal[0].name;
        }

        function getPortalByName(name) {
            var portal_id = vm.portals.filter(function (obj) {
                return obj.name == name;
            });
            return portal_id[0];
        }

        function savePortal(portal){
            portal['id']=vm.configPortals.length+1;
            vm.configPortals.push(portal);
            console.log(vm.configPortals);
        }

        function deletePortal(id){
            function findIndexInData(data, property, value) {
                var result = -1;
                data.some(function (item, i) {
                    if (item[property] === value) {
                        result = i;
                        return true;
                    }
                });
                return result;
            }

            var index = findIndexInData(vm.configPortals, 'id', id);

            vm.configPortals.splice(index, 1);
            return index;
        }

        function getConfigPortals(){
            return vm.configPortals;
        }
    }
})();