(function () {

    angular
        .module('syncery')
        .service('AccommodationSvc', AccommodationSvc);


    function AccommodationSvc() {

        var vm = this;

        vm.accommodations = [
            {
                id: '1', name: 'Haus am See',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                thumbnail: 'img/house1.jpg',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '2', name: 'Berlin Appartment',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                thumbnail: 'img/house2.jpg',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '3', name: 'Rügen Ferienwohnung',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                thumbnail: 'img/house3.jpg',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '4', name: 'Ostsee Bungalow',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '5', name: 'Hostel Dortmund',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '6', name: 'Ferienwohnung München',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '7', name: 'Landseehaus Bayern',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '8', name: 'H3 Hotel Hamburg',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '9', name: 'Bungalow am See Brandenburg',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '10', name: 'Berlin Luxus Appartments',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '11', name: 'Hotel an der Brandenburger Seenplatte',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '12', name: 'Dortmunder Hafenhotel',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
            {id: '13', name: 'H3 Hotel Berlin-Mitte',
                description: 'banfjjkbf dsc jsd jf hfh kjdj gjkdhf jkgdjfh gjkfd jkv jsdoig hfdg kjfdn kjfg jkjf' +
                ' fg ogimfoihg kfgj fg jlkgfjh lfg hlkjfkg hlfg ghoj fkhjokf h j jkhro rt' +
                'f otg i4w irj  rt hrtjgjrj orhtgjrtjjg kr hortlkhjgrjjglkrtlkz',
                images: {
                    1:{url:'img/house1-large.jpg',
                        name:'Haus 1'},
                    2:{url:'img/house2-large.jpg',
                        name:'Haus 2'},
                    3:{url:'img/house3-large.jpg',
                        name:'Haus 3'}
                }
            },
        ];

        /*
         * this.accommodations = [
         {1: { id: '1', name: 'Haus am See' }},
         {2:{ id: '2', name: 'Berlin Appartment' }},
         {3:{ id: '3', name: 'Rügen Ferienwohnung' }},
         {4:{ id: '4', name: 'Ostsee Bungalow' }},
         {5:{ id: '5', name: 'Hostel Dortmund' }},
         {6:{ id: '6', name: 'Ferienwohnung München' }},
         {7:{ id: '7', name: 'Landseehaus Bayern' }},
         {8:{ id: '8', name: 'H3 Hotel Hamburg' }},
         {9:{ id: '9', name: 'Bungalow am See Brandenburg' }},
         {10:{ id: '10', name: 'Berlin Luxus Appartments' }},
         {11:{ id: '11', name: 'Hotel an der Brandenburger Seenplatte' }},
         {12:{ id: '12', name: 'Dortmunder Hafenhotel' }},
         {13:{ id: '13', name: 'H3 Hotel Berlin-Mitte' }},
         ];
         */

        service = {
            addAccommodations: addAccommodations,
            getAccommodations: getAccommodations,
            getAccommodationById: getAccommodationById
        };
        return service;

        function addAccommodations(accommodation) {
            vm.accommodations.put(accommodation);
        }

        function getAccommodations() {
            return vm.accommodations;
        }

        function getAccommodationById(id) {
            var accommodation = vm.accommodations.filter(function (obj) {
                return obj.id == id;
            });
            return accommodation[0];
        }

        function deleteAccommodation(id){
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

            var index = findIndexInData(vm.accommodations, 'id', id);

            vm.accommodations.splice(index, 1);
            return index;
        }
    }
})();