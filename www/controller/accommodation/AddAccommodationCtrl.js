(function () {

    angular
        .module('syncery')
        .controller('AddAccommodationCtrl', AddAccommodationCtrl);


    function AddAccommodationCtrl($scope, AccommodationSvc, $state, $cordovaFileTransfer, $stateParams, $cordovaImagePicker) {
        $scope.back = function(){
            $state.go('app.accommodations');
        }

        $scope.id = $stateParams.id;

        $scope.accommodation = AccommodationSvc.getAccommodationById($scope.id);

        console.log($scope.accommodation);

        $scope.upload = function() {
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
        }


        $scope.ShowPictures = function(){
            var options = {
                maximumImagesCount: 10,
                width: 800,
                height: 800,
                quality: 80
            };

            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                        alert('Image URI: ' + results[i]);
                    }
                }, function(error) {
                    // error getting photos
                });
        };

    }
})();