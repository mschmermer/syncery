(function () {

    angular
        .module('syncery')
        .controller('AddAccommodationCtrl', AddAccommodationCtrl);


    function AddAccommodationCtrl($scope, AccommodationSvc, $state, $cordovaFileTransfer, $stateParams, $cordovaImagePicker, $ionicModal) {
        $scope.back = function(){
            $state.go('app.accommodations');
        }

        $scope.acc = {};

        $scope.id = $stateParams.id;

        $scope.accommodation = AccommodationSvc.getAccommodationById($scope.id);

        $scope.data.ImageURI = false;

        $scope.show_save = false;

        /*$scope.upload = function() {
            var options = {
                fileKey: "avatar",
                fileName: "image.png",
                chunkedMode: false,
                mimeType: "image/png"
            };
            $cordovaFileTransfer.upload("http://192.168.56.1:1337/file/upload", "/android_asset/www/img/ionic.png", options).then(function(result) {
                console.log("SUCCESS: " + JSON.stringify(result.response));
            }, function(err) {
                console.log("ERROR: " + JSON.stringify(err));
            }, function (progress) {
                // constant progress updates
            });
        }

        $scope.data = { "ImageURI" :  "Select Image" };

        function UploadPicture(imageURI) {

            $scope.data.ImageURI =  imageURI;
            alert($scope.data.ImageURI );
        }*/


        $scope.ShowPictures = function(){
            var options = {
                maximumImagesCount: 1,
                width: 200,
                height: 200,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    $scope.data.ImageURI = results[0];
                }, function(error) {
                    // error getting photos
                });
        };

        // Select for Dropdown

        $scope.selector={};
        $scope.selector['gender'] = {
            items: ['Herr','Frau'],
            name: 'gender',
            selected: 'Herr'
        };

        $ionicModal.fromTemplateUrl('templates/selector.html', {
            scope: $scope,
            animation: 'fade-in'
        }).then(function(modal) {
            $scope.modal_selector = modal
        })

        $scope.$watch('acc', function (acc) {
            if(Object.keys(acc).length == 11){
                $scope.show_save = true;
            }
        }, true);


        $scope.select = function (name) {
            $scope.modal_data = $scope.selector[name];
            $scope.modal_selector.show();
            //$state.go('app.selector', {'selector': $scope.selector['gender'], 'view': 'addCustomer'});
        }

    }
})();