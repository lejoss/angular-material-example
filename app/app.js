/**
 * Created by lejo on 29/05/2015.
 */
(function(){
    'use strict';

    angular
        .module('beesoft-core', [
            // application modules
            'beesoft-core.core',
            'beesoft-core.menu',
            'beesoft-core.radication'
        ])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("/app", {
                    url: '/',
                    templateUrl: 'views/inbox-list.html',
                    controller: 'RadicationCtrl',
                    controllerAs: 'radicationCtrl'
                });

        })
        .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }]);
})();