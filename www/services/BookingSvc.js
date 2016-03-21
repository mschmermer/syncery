(function () {

    angular
        .module('syncery')
        .service('BookingSvc', BookingSvc);


    function BookingSvc() {
        var vm = this;
        vm.reservationData = {
            3: {
                "2016-3-7": {
                    class: 'arrival', 'booking-id': 1
                },
                '2016-3-8': {
                    class: 'occupied', 'booking-id': 1
                },
                '2016-3-9': {
                    class: 'occupied', 'booking-id': 1
                },
                '2016-3-10': {
                    class: 'occupied', 'booking-id': 1
                },
                '2016-3-11': {
                    class: 'departure arrival', 'booking-id': '1 2'
                },
                '2016-3-12': {
                    class: 'occupied', 'booking-id': 2
                },
                '2016-3-13': {
                    class: 'occupied', 'booking-id': 2
                },
                '2016-3-14': {
                    class: 'occupied', 'booking-id': 2
                },
                '2016-3-15': {
                    class: 'occupied', 'booking-id': 2
                },
                '2016-3-16': {
                    class: 'departure', 'booking-id': 2
                },
                '2016-3-21': {
                    class: 'arrival', 'booking-id': 3
                },
                '2016-3-22': {
                    class: 'occupied', 'booking-id': 3
                },
                '2016-3-23': {
                    class: 'occupied', 'booking-id': 3
                },
                '2016-3-24': {
                    class: 'departure', 'booking-id': 3
                },
                '2016-3-26': {
                    class: 'arrival', 'booking-id': 4
                },
                '2016-3-27': {
                    class: 'occupied', 'booking-id': 4
                },
                '2016-3-28': {
                    class: 'departure', 'booking-id': 4
                },
            }
        };

        vm.bookingData = {
            1: {
                customer_id: 1, arrival: '2016-3-7', departure: '2016-3-11', accommodation_id: 1
            },

            2: {
                customer_id: 2, arrival: '2016-3-11', departure: '2016-3-16', accommodation_id: 2
            },

            3: {
                customer_id: 3, arrival: '2016-3-21', departure: '2016-3-24', accommodation_id: 3
            },
            4: {
                customer_id: 4, arrival: '2016-3-26', departure: '2016-3-28', accommodation_id: 4
            }
        }

        vm.selected = {};

        vm.selectedCustomer = '';


        service = {
            getReservationData: getReservationData,
            selectReservation: selectReservation,
            getBookingDataById: getBookingDataById,
            getBookingData: getBookingData,
            setSelectedCustomer: setSelectedCustomer,
            getSelectedCustomer: getSelectedCustomer
        };
        return service;

        function getReservationData(month) {
            if (vm.reservationData[month]) {
                return vm.reservationData[month];
            } else {
                return {};
            }
        }

        function selectReservation(month, booking_id) {

            if (vm.selected[month]) {
                for (i in vm.selected[month]) {
                    vm.reservationData[month][vm.selected[month][i]]["class"] = vm.reservationData[month][vm.selected[month][i]]["class"].replace(' selected', '');
                    vm.reservationData[month][vm.selected[month][i]]["class"] = vm.reservationData[month][vm.selected[month][i]]["class"].replace(' aselected', '');
                    vm.reservationData[month][vm.selected[month][i]]["class"] = vm.reservationData[month][vm.selected[month][i]]["class"].replace(' dselected', '');
                }
                vm.selected[month] = [];
            }

            vm.selected[month] = [];


            for (date in vm.reservationData[month]) {
                if (vm.reservationData[month][date]['booking-id']) {
                    if (vm.reservationData[month][date]['booking-id'].length > 1) {
                        var ids = vm.reservationData[month][date]['booking-id'].split(' ');
                        if (ids[0] == booking_id) {
                            vm.reservationData[month][date]['class'] += ' dselected';
                            vm.selected[month].push(date);
                        }
                        if (ids[1] == booking_id) {
                            vm.reservationData[month][date]['class'] += ' aselected';
                            vm.selected[month].push(date);
                        }
                    } else {
                        if (vm.reservationData[month][date]['booking-id'] == booking_id) {
                            vm.reservationData[month][date]['class'] += ' selected';
                            vm.selected[month].push(date);
                        }
                    }
                }
            }

        }

        function getBookingDataById(id) {
            return vm.bookingData[id];
        }

        function getBookingData() {
            return vm.bookingData;
        }

        function setSelectedCustomer(id) {
            vm.selectedCustomer = id;
            console.log(vm.selectedCustomer);
        }

        function getSelectedCustomer() {
            return vm.selectedCustomer;
        }


    }
})();