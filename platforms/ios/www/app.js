// Ionic syncery App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'syncery' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'syncery.controllers' is found in controllers.js
angular.module('syncery', ['ionic',
        'ionic.ion.headerShrink',
        'pascalprecht.translate',
        'chart.js',
        'ngCordova',
        'jett.ionic.filter.bar',
        'ionic.service.core',
        'ionic.service.analytics',
        'ion-alpha-scroll',
        'ion-sticky',
        'ngOpenFB'])

    .run(function ($ionicPlatform, $ionicLoading, $rootScope, ngFB) { //, $ionicAnalytics) {
        $ionicPlatform.ready(function () {


            //$ionicAnalytics.register();
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.show();
                StatusBar.overlaysWebView(false);
                StatusBar.backgroundColorByHexString("#38445e");
                StatusBar.styleBlackOpaque();
            }

            ngFB.init({appId: '1024690994292025'});

            /*$rootScope.$on('$ionicView.beforeLeave', function(){
             $ionicLoading.show();
             });

             $rootScope.$on('$ionicView.afterEnter', function(){
             $ionicLoading.hide();
             })*/
        });
    })

    .constant({'language': 'de'})
    .constant({'currency': '€'})

    .constant('$ionicLoadingConfig', {
        template: '<ion-spinner class="spinner light" icon="bubbles"></ion-spinner>'
    })


    .config(function ($stateProvider, $urlRouterProvider, $translateProvider, language,
                      languageVariables, $ionicFilterBarConfigProvider, $ionicConfigProvider) {

        $translateProvider.translations('en', languageVariables['en']);
        $translateProvider.translations('de', languageVariables['de']);
        $translateProvider.useSanitizeValueStrategy('escape');

        $ionicFilterBarConfigProvider.theme('royal');
        $ionicFilterBarConfigProvider.placeholder(languageVariables['de']['search']);

        $ionicConfigProvider.backButton.text(' ').previousTitleText('').icon('ion-ios-arrow-back');

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
                url: '/bookings:tab_id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/booking/bookings.html',
                        controller: 'BookingCtrl'
                    }
                },
                params: {
                    'tab_id': null,
                    'filter': null,
                }
            })

            .state('app.addBooking', {
                url: '/bookings/add:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/booking/addBookings.html',
                        controller: 'AddBookingCtrl'
                    }
                },
                params: {
                    'id': null,
                    'customer_id': null
                }
            })

            .state('app.rangepicker', {
                url: '/bookings/add/rangepicker',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/rangepicker.html',
                        controller: 'RangepickerCtrl'
                    }
                }
            })

            .state('app.bookingDeatils', {
                url: '/bookingDetails:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/booking/bookingDetails.html',
                        controller: 'BookingDetailsCtrl'
                    }
                },
                params: {
                    'id': null,
                    'customer_id': null
                }
            })

            .state('app.searchCustomer', {
                url: '/bookings/add/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/booking/searchCustomer.html',
                        controller: 'SearchCustomerCtrl'
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
                url: '/accommodation/add',
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
                url: '/accommodation/details:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/accommodationDetails.html',
                        controller: 'AccommodationDetailsCtrl'
                    }
                }
            })

            .state('app.accommodationMapping', {
                url: '/accommodation/mapping',
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

            .state('app.accommodationMasterData', {
                url: '/accommodation/masterData:id',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/accommodation/accommodationMasterData.html',
                        controller: 'AccommodationMasterDataCtrl'
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
                url: '/settings/accountData',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/accountData.html',
                        controller: 'AccountDataCtrl'
                    }
                }
            })
            .state('app.passwordChange', {
                url: '/settings/passwordChange',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/passwordChange.html',
                        controller: 'AccountDataCtrl'
                    }
                }
            })
            .state('app.invoiceAdress', {
                url: '/settings/invoiceAdress',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/invoiceAddress.html',
                        controller: 'InvoiceAdressCtrl'
                    }
                }
            })
            .state('app.invoices', {
                url: '/settings/invoices',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/invoices.html',
                        controller: 'InvoicesCtrl'
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

            .state('app.faq', {
                url: '/settings/faq',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/faq.html',
                        controller: 'FaqCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: '/settings/contact',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/contact.html',
                        controller: 'ContactCtrl'
                    }
                }
            })

            .state('app.inviteUser', {
                url: '/settings/inviteUser',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/inviteUser.html',
                        controller: 'InviteUserCtrl'
                    }
                }
            })

            .state('app.allInvitedUser', {
                url: '/settings/allInvitedUser',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings/account/allInvitedUser.html',
                        controller: 'AllInvitedUserCtrl'
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
