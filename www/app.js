// Ionic syncery App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'syncery' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'syncery.controllers' is found in controllers.js
angular.module('syncery', ['ionic', 'pascalprecht.translate', 'chart.js', 'ngCordova', 'jett.ionic.filter.bar', 'ionic.service.core', 'ionic.service.analytics'])

    .run(function ($ionicPlatform, $ionicLoading,$rootScope, $ionicAnalytics) {
        $ionicPlatform.ready(function () {
            $ionicAnalytics.register();
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.overlaysWebView(false);
                StatusBar.backgroundColorByHexString("#38445e");
                StatusBar.styleBlackOpaque();
            }

            $rootScope.$on('$ionicView.beforeLeave', function(){
                $ionicLoading.show();
            });

            $rootScope.$on('$ionicView.afterEnter', function(){
                $ionicLoading.hide();
            })
        });
    })

    .constant({'language': 'de'})
    .constant({'currency': '€'})

    .constant('$ionicLoadingConfig', {
        template: '<ion-spinner class="spinner light" icon="bubbles"></ion-spinner>'
    })


    .config(function ($stateProvider, $urlRouterProvider, $translateProvider, language,
                      languageVariables, $ionicFilterBarConfigProvider) {

        $translateProvider.translations('en', languageVariables['en']);
        $translateProvider.translations('de', languageVariables['de']);
        $translateProvider.useSanitizeValueStrategy('escape');

        $ionicFilterBarConfigProvider.theme('royal');
        $ionicFilterBarConfigProvider.placeholder(languageVariables['de']['search']);

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
                        templateUrl: 'templates/login/login.html',
                        controller: 'LoginCtrl'
                    }
                }

            })

            .state('app.create', {
                url: '/login/create',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login/create.html',
                        controller: 'CreateCtrl'
                    }
                }

            })

            .state('app.forgot', {
                url: '/login/forgot',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login/forgot.html',
                        controller: 'ForgotCtrl'
                    }
                }

            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html',
                        controller: 'SearchCtrl'
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
                        templateUrl: 'templates/booking/bookings.html',
                        controller: 'BookingCtrl'
                    }
                }
            })

            .state('app.addBooking', {
                url: '/bookings/add',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/booking/addBookings.html',
                        controller: 'AddBookingCtrl'
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
                },
                params: {
                    'id': null,
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

            .state('app.accommodationMapping', {
                url: '/accommodationMapping',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/accommodationMapping.html',
                        controller: 'AccommodationMappingCtrl',
                    }
                },
                params: {
                    'acc_id': null,
                    'portal_id': null,
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
                },
                params: {
                    'id': null,
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

            .state('app.informations', {
                url: '/settings/informations',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/informations.html',
                        controller: 'InformationsCtrl'
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

            .state('app.selectPortal', {
                url: '/portals/select',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/portals/selectPortal.html',
                        controller: 'SelectPortalCtrl'
                    }
                }
            })

            .state('app.addPortal', {
                url: '/portals/add:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/portals/addPortal.html',
                        controller: 'AddPortalCtrl'
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');

    });
