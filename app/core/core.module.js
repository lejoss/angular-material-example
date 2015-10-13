/**
 * Created by lejo on 01/06/2015.
 */
(function() {
    'use strict';

    angular.module('beesoft-core.core', [
        /*
         * Angular modules
         */
        'ngAnimate',

        /*
         * Our reusable cross app code modules
         */

        /*
         * 3rd Party modules
         */
        'ui.router','restangular','ngMaterial'


    ]).config(function(RestangularProvider, $mdThemingProvider, $locationProvider) {

      /*
        RestangularProvider.setBaseUrl('/api/v1');
        $locationProvider.html5Mode(true);
       */

        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': '800'
            })
            .accentPalette('light-blue',{
                'default': '500',
                'hue-1': '100',
                'hue-2': '700',
                'hue-3': 'A700'
            })
            .warnPalette('red')
            .backgroundPalette('grey');
        });





})();