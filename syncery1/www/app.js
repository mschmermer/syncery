angular.module('syncery', ['ionic', 'pascalprecht.translate', 'chart.js'])

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

    .constant(  {'language': 'de'})
    .constant(  {'currency': '�'})

    .config(function ($stateProvider, $urlRouterProvider, $translateProvider, language, languageVariables) {

        $translateProvider.translations('en', languageVariables['en']);
        $translateProvider.translations('de', languageVariables['de']);
        //$translateProvider.preferredLanguage('de');
        //$translateProvider.fallbackLanguage('de');
        //$translateProvider.useCookieStorage();
        $translateProvider.useSanitizeValueStrategy('escape');

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

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
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
                url: '/customer/details:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer/customerDetails.html',
                        controller: 'CustomerDetailsCtrl'
                    }
                }
            })

            .state('app.customerBookings', {
                url: '/customer/bookings:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/customer/customerBookings.html',
                        controller: 'CustomerBookingCtrl'
                    }
                }
            })


            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            })
            .state('app.general', {
                url: '/settings/general',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/general.html',
                        controller: 'GeneralCtrl'
                    }
                }
            })
            .state('app.account', {
                url: '/settings/account',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('app.agreement', {
                url: '/settings/agreement',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/agreement.html',
                        controller: 'AgreementCtrl'
                    }
                }
            })

            .state('app.portals', {
                url: '/portals',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/portals/portals.html',
                        controller: 'PortalsCtrl'
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
