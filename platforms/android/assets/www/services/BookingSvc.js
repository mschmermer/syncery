(function () {

    angular
        .module('syncery')
        .service('BookingSvc', BookingSvc);


    function BookingSvc() {
        var vm = this;
        vm.reservationData = {
            2016: {
                4: {
                    "2016-4-7": {
                        class: 'arrival', 'booking-id': 1
                    },
                    '2016-4-8': {
                        class: 'occupied', 'booking-id': 1
                    },
                    '2016-4-9': {
                        class: 'occupied', 'booking-id': 1
                    },
                    '2016-4-10': {
                        class: 'occupied', 'booking-id': 1
                    },
                    '2016-4-11': {
                        class: 'departure arrival', 'booking-id': '1 2'
                    },
                    '2016-4-12': {
                        class: 'occupied', 'booking-id': 2
                    },
                    '2016-4-13': {
                        class: 'occupied', 'booking-id': 2
                    },
                    '2016-4-14': {
                        class: 'occupied', 'booking-id': 2
                    },
                    '2016-4-15': {
                        class: 'occupied', 'booking-id': 2
                    },
                    '2016-4-16': {
                        class: 'departure', 'booking-id': 2
                    },
                    '2016-4-21': {
                        class: 'arrival', 'booking-id': 3
                    },
                    '2016-4-22': {
                        class: 'occupied', 'booking-id': 3
                    },
                    '2016-4-23': {
                        class: 'occupied', 'booking-id': 3
                    },
                    '2016-4-24': {
                        class: 'departure', 'booking-id': 3
                    },
                    '2016-4-26': {
                        class: 'arrival', 'booking-id': 4
                    },
                    '2016-4-27': {
                        class: 'occupied', 'booking-id': 4
                    },
                    '2016-4-28': {
                        class: 'departure', 'booking-id': 4
                    }
                }
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

        vm.pickedDates = {};

        vm.selectedCustomer = '';


        service = {
            getReservationData: getReservationData,
            selectReservation: selectReservation,
            getBookingDataById: getBookingDataById,
            getBookingData: getBookingData,
            setSelectedCustomer: setSelectedCustomer,
            getSelectedCustomer: getSelectedCustomer,
            setRangepick: setRangepick,
            disselected: disselected
        };
        return service;

        function disselected() {

            if (vm.pickedDates[2]) {
                var diff = -1;
                var d1 = moment(vm.pickedDates[1], 'YYYY-M-D');
                var d2 = moment(vm.pickedDates[2], 'YYYY-M-D');
                while (diff != 0) {
                    vm.reservationData[d1.year()][d1.month() + 1][d1.format('YYYY-M-D')]['class'] =
                        vm.reservationData[d1.year()][d1.month() + 1][d1.format('YYYY-M-D')]['class'].replace('picked', '');
                    d1.add(1, 'days');
                    duration = moment.duration(d2.diff(d1));
                    diff = duration.asDays();
                }
                vm.reservationData[d1.year()][d1.month() + 1][d1.format('YYYY-M-D')]['class'] =
                    vm.reservationData[d1.year()][d1.month() + 1][d1.format('YYYY-M-D')]['class'].replace('picked', '');
            }

        }

        function setRangepick(date1, date2) {

            disselected();

            vm.pickedDates = {1: date1.format('YYYY-M-D'), 2: date2.format('YYYY-M-D')};

            var is_reserved = false;
            var diff = -1;

            while (diff != 0) {

                if (!vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]) {
                    vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')] = {};
                    vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['class'] = 'picked';
                } else {
                    vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['class'] += ' picked';
                    if (vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['booking-id']) {
                        is_reserved = true;
                    }
                }

                date1.add(1, 'days')
                duration = moment.duration(date2.diff(date1));
                diff = duration.asDays();
                //console.log(date1.format('YYYY-M-DD'), date2.format('YYYY-M-DD'), vm.reservationData);

            }

            if (!vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]) {
                vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')] = {};
                vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['class'] = 'picked';
            } else {
                vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['class'] += ' picked';
                if (vm.reservationData[date1.year()][date1.month() + 1][date1.format('YYYY-M-D')]['booking-id']) {
                    is_reserved = true;
                }
            }

            return is_reserved;
        }

        function getReservationData(year, month) {
            if (vm.reservationData[year] && vm.reservationData[year][month]) {
                return vm.reservationData[year][month];
            } else {
                if (!vm.reservationData[year]) {
                    vm.reservationData[year] = {};
                    vm.reservationData[year][month] = {};
                } else {
                    vm.reservationData[year][month] = {};
                }
                return vm.reservationData[year][month];
            }
        }

        function selectReservation(year, month, booking_id) {

            if (vm.selected[year] && vm.selected[year][month]) {
                for (i in vm.selected[year][month]) {
                    vm.reservationData[year][month][vm.selected[year][month][i]]["class"] = vm.reservationData[year][month][vm.selected[year][month][i]]["class"].replace(' selected', '');
                    vm.reservationData[year][month][vm.selected[year][month][i]]["class"] = vm.reservationData[year][month][vm.selected[year][month][i]]["class"].replace(' aselected', '');
                    vm.reservationData[year][month][vm.selected[year][month][i]]["class"] = vm.reservationData[year][month][vm.selected[year][month][i]]["class"].replace(' dselected', '');
                }
                vm.selected[year][month] = [];
            }

            if(!vm.selected[year]){
                vm.selected[year] = {};
            }

            vm.selected[year][month] = [];


            for (date in vm.reservationData[year][month]) {
                if (vm.reservationData[year][month][date]['booking-id']) {
                    if (vm.reservationData[year][month][date]['booking-id'].length > 1) {
                        var ids = vm.reservationData[year][month][date]['booking-id'].split(' ');
                        if (ids[0] == booking_id) {
                            vm.reservationData[year][month][date]['class'] += ' dselected';
                            vm.selected[year][month].push(date);
                        }
                        if (ids[1] == booking_id) {
                            vm.reservationData[year][month][date]['class'] += ' aselected';
                            vm.selected[year][month].push(date);
                        }
                    } else {
                        if (vm.reservationData[year][month][date]['booking-id'] == booking_id) {
                            vm.reservationData[year][month][date]['class'] += ' selected';
                            vm.selected[year][month].push(date);
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
        }

        function getSelectedCustomer() {
            return vm.selectedCustomer;
        }


    }
})();