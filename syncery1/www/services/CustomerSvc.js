(function () {

    angular
        .module('syncery')
        .service('CustomerSvc', CustomerSvc);


    function CustomerSvc($ionicLoading){

        var vm = this;

        vm.customers = this.customers = [
            { id: '1', name: 'Marcus Schmermer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar1.jpg' },
            { id: '2', name: 'Bettina Kohlert', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar2.jpg'  },
            { id: '3', name: 'Paul Gösch', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar3.jpg'  },
            { id: '4', name: 'Christoph Schulz', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '5', name: 'Benny Sommerfeld', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '6', name: 'Anke Schmermer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '7', name: 'Denny Morgenstern', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '8', name: 'Max Ruppel', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '9', name: 'Florian Mayer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '10', name: 'Nadin Schreiber', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '11', name: 'Lukas Herrmann', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '12', name: 'Jürgen Auerswald', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '13', name: 'Robin Kuchta', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
        ];

        service = {
            addCustomers: addCustomers,
            getCustomers: getCustomers,
            getCustomersById: getCustomersById
        };
        return service;

        function addCustomers(customer){
            vm.customers.put(customer);
        }

        function getCustomers(){
            /*vm.customers = vm.customers.sort(function(a, b){
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });*/
            return vm.customers;
        }

        function getCustomersById(id) {
            var customers = vm.customers.filter(function (obj) {
                return obj.id == id;
            });
            return customers[0];
        }
    }
})();