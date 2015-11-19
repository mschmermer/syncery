(function () {

    angular
        .module('syncery')
        .service('CustomerSvc', CustomerSvc);


    function CustomerSvc($ionicLoading, $timeout){

        var vm = this;

        vm.customers = this.customers = [
            { id: '1', first_name: 'Marcus', name: 'Schmermer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar1.jpg' },
            { id: '2', first_name: 'Bettina', name: 'Kohlert', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar2.jpg'  },
            { id: '3', first_name: 'Paul', name: 'Gösch', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar3.jpg'  },
            { id: '4', first_name: 'Christoph', name: 'Schulz', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '5', first_name: 'Benny', name: 'Sommerfeld', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '6', first_name: 'Anke', name: 'Schmermer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '7', first_name: 'Denny', name: 'Morgenstern', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '8', first_name: 'Max', name: 'Ruppel', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '9', first_name: 'Florian', name: 'Mayer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '10', first_name: 'Nadin', name: 'Schreiber', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '11', first_name: 'Lukas', name: 'Herrmann', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '12', first_name: 'Jürgen', name: 'Auerswald', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
            { id: '13', first_name: 'Robin', name: 'Kuchta', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00 },
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
            console.log('1');
            $timeout(function() {
                console.log('2');
            },200000);

            console.log('3');
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