(function () {

    angular
        .module('syncery')
        .service('BookingSvc', BookingSvc);


    function BookingSvc() {
        var vm = this;
        vm.reservationData = {
            12: {
                "2015-12-7": {
                    class: 'arrival', 'booking-id': 1
                },
                '2015-12-8': {
                    class: 'occupied', 'booking-id': 1
                },
                '2015-12-9': {
                    class: 'occupied', 'booking-id': 1
                },
                '2015-12-10': {
                    class: 'occupied', 'booking-id': 1
                },
                '2015-12-11': {
                    class: 'departure arrival', 'booking-id': '1 2'
                },
                '2015-12-12': {
                    class: 'occupied', 'booking-id': 2
                },
                '2015-12-13': {
                    class: 'occupied', 'booking-id': 2
                },
                '2015-12-14': {
                    class: 'occupied', 'booking-id': 2
                },
                '2015-12-15': {
                    class: 'occupied', 'booking-id': 2
                },
                '2015-12-16': {
                    class: 'departure', 'booking-id': 2
                },
                '2015-12-21': {
                    class: 'arrival', 'booking-id': 3
                },
                '2015-12-22': {
                    class: 'occupied', 'booking-id': 3
                },
                '2015-12-23': {
                    class: 'occupied', 'booking-id': 3
                },
                '2015-12-24': {
                    class: 'departure', 'booking-id': 3
                },
                '2015-12-26': {
                    class: 'arrival', 'booking-id': 4
                },
                '2015-12-27': {
                    class: 'occupied', 'booking-id': 4
                },
                '2015-12-28': {
                    class: 'departure', 'booking-id': 4
                },
            }
        };

        vm.selected = {};


        service = {
            getReservationData: getReservationData,
            selectReservation: selectReservation,
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
                        if(ids[0] == booking_id){
                            vm.reservationData[month][date]['class'] += ' dselected';
                            vm.selected[month].push(date);
                        }
                        if(ids[1] == booking_id){
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

                /*if(vm.reservationData[month][date]['booking-id'].length == 1 && vm.reservationData[month][date]['booking-id'] == booking_id){
                 vm.reservationData[month][date]['class'] += ' selected';
                 }else if(vm.reservationData[month][date]['booking-id'].length > 1){
                 var ids = vm.reservationData[month][date]['booking-id'].split(' ');
                 console.log(ids, booking_id);
                 if(ids[0] = booking_id){

                 vm.reservationData[month][date]['class'] += ' aselected';
                 }
                 if(ids[1] = booking_id){
                 vm.reservationData[month][date]['class'] += ' dselected';
                 }
                 }
                 vm.selected[month].push(date);*/

                /*if(vm.reservationData[month][date]['booking-id'] == booking_id && booking_id.length > 0){
                 if(vm.reservationData[month][date]['booking-id'].length == 1){
                 vm.reservationData[month][date]['class'] += ' selected';
                 }else{
                 var ids = vm.reservationData[month][date]['booking-id'].split(' ');
                 console.log(ids, booking_id);
                 if(ids[0] = booking_id){

                 vm.reservationData[month][date]['class'] += ' aselected';
                 }
                 if(ids[1] = booking_id){
                 vm.reservationData[month][date]['class'] += ' dselected';
                 }
                 }
                 vm.selected[month].push(date);
                 }*/
            }

        }


    }
})();