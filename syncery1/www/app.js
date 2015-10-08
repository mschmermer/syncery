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

    .config(function ($stateProvider, $urlRouterProvider, $translateProvider, language) {

        $translateProvider.translations('en', {
            change_booking: "change booking",
            show_booking: "show booking"
        });
        $translateProvider.translations('de', {
            change_booking: "Buchung ändern",
            show_booking: "Buchung anzeigen"
        });
        $translateProvider.preferredLanguage(language);
        $translateProvider.fallbackLanguage(language);
        $translateProvider.useSanitizeValueStrategy('sanitize');

        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
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
                        templateUrl: 'templates/accommodations.html',
                        controller: 'AccommodationsCtrl'
                    }
                }
            })
            .state('app.customer', {
                url: '/customer',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer.html',
                        controller: 'CustomerCtrl'
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
