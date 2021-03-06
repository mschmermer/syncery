(function () {

    angular
        .module('syncery')
        .service('CustomerSvc', CustomerSvc);


    function CustomerSvc($ionicLoading, $timeout){

        var vm = this;

        vm.customers = this.customers = [
            { id: '1', first_name: 'Marcus', name: 'Schmermer', open_bill: -(23.60), last_booking: '23.05.15', profit: 200.00, avatar: 'avatar1.jpg', status: 'cyan' },
            { id: '2', first_name: 'Bettina', name: 'Kohlert', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar2.jpg', status: 'red'  },
            { id: '3', first_name: 'Paul', name: 'Gösch', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, avatar: 'avatar3.jpg', status: 'green'  },
            { id: '4', first_name: 'Christoph', name: 'Schulz', open_bill: -23.60, last_booking: '23.05.15', profit: 200.00, status: 'grey' },
            { id: '5', first_name: 'Benny', name: 'Sommerfeld', open_bill: 23.60, last_booking: '23.05.15', profit: -200.00, status: 'cyan' },
            { id: '6', first_name: 'Anke', name: 'Schmermer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'cyan' },
            { id: '7', first_name: 'Denny', name: 'Morgenstern', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'grey' },
            { id: '8', first_name: 'Max', name: 'Ruppel', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'red' },
            { id: '9', first_name: 'Florian', name: 'Mayer', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'grey' },
            { id: '10', first_name: 'Nadin', name: 'Schreiber', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'grey' },
            { id: '11', first_name: 'Lukas', name: 'Herrmann', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'green' },
            { id: '12', first_name: 'Jürgen', name: 'Auerswald', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'grey' },
            { id: '13', first_name: 'Robin', name: 'Kuchta', open_bill: 23.60, last_booking: '23.05.15', profit: 200.00, status: 'green' },
        ];

        service = {
            addCustomers: addCustomers,
            getCustomers: getCustomers,
            getCustomersById: getCustomersById,
            deleteCustomer: deleteCustomer,
            getAlphaCustomers: getAlphaCustomers
        };
        return service;

        function addCustomers(customer){
            vm.customers.put(customer);
        }

        function getAlphaCustomers(){
            vm.customers = vm.customers.sort(function(a, b){
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
            var alphaCustomers = {};
            for(id in vm.customers){
                var letter = vm.customers[id].name[0];
                if(!alphaCustomers[letter]){
                    alphaCustomers[letter] = [];
                }
                alphaCustomers[letter].push(vm.customers[id]);
            }
            return alphaCustomers;
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

        function deleteCustomer(id){
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

            var index = findIndexInData(vm.customers, 'id', id);

            vm.customers.splice(index, 1);
            return index;
        }
    }
})();