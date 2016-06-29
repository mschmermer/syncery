(function () {

    angular
        .module('syncery')
        .controller('HomeCtrl', HomeCtrl);


    function HomeCtrl($scope, $state, $ionicHistory) {

        $scope.contract_remaining = 13;
        $scope.contract_total = 30;

        $scope.translationData = {
            lastdays: $scope.contract_remaining,
            unfinished: '3',
            unpaid: '5'
        };

        $scope.unfinishedBookings = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.bookings', {tab_id: 1, filter: 'open'});
        }

        $scope.unpaidBookings = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.bookings', {tab_id: 1, filter: 'unpaid'});
        }

        $scope.extendContract = function(){
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            $state.go('app.agreement');
        }

        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.timeline = [{
            date: new Date(),
            title: "Awesome picture",
            author:"John Mybeweeg",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            type: "picture"
        },{
            date: new Date(),
            title: "Look at my video!",
            author:"Miranda Smith",
            text: "Lorem ipsum dolor sit amet",
            type: "video"

        },{
            date: new Date(),
            title: "I am here",
            author:"Ludo Anderson",
            text: "Lorem ipsum dolor sit amet",
            type: "location"

        },{
            date: new Date(),
            title: "For my friends",
            author:"Sara Orwell",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            type: "text"

        }]
    }
})();