angular.module('syncery', ['ionic', 'pascalprecht.translate'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .constant({'language': 'de'})

    .config(function ($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider, language, languageVariables) {

        $translateProvider.translations('en', languageVariables['en']);
        $translateProvider.translations('de', languageVariables['de']);
        $translateProvider.preferredLanguage('de');
        $translateProvider.fallbackLanguage('de');
        $translateProvider.useSanitizeValueStrategy('escape');

        $ionicConfigProvider.backButton.text('').icon('ion-ios7-arrow-left');

        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'LoginCtrl'
                    }
                }

            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html'
                    }
                }
            })

            .state('app.bookings', {
                url: '/bookings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/bookings.html',
                        controller: 'BookingCtrl'
                    }
                }
            })

            .state('app.accommodations', {
                url: '/accommodations',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/accommodations.html',
                        controller: 'AccommodationsCtrl'
                    }
                }
            })

            .state('app.addAccommodation', {
                url: '/addAccommodation',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/addAccommodation.html',
                        controller: 'AddAccommodationCtrl'
                    }
                }
            })

            .state('app.accommodationDetails', {
                url: '/accommodationDetails:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/accommodationDetails.html',
                        controller: 'AccommodationDetailsCtrl'
                    }
                }
            })

            .state('app.customer', {
                url: '/customer',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer/customer.html',
                        controller: 'CustomerCtrl'
                    }
                }
            })

            .state('app.addCustomer', {
                url: '/addCustomer',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer/addCustomer.html',
                        controller: 'AddCustomerCtrl'
                    }
                }
            })

            .state('app.customerDetails', {
                url: '/customerDetails:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer/customerDetails.html',
                        controller: 'CustomerDetailsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlist.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/bookings');
    });
