/**
 * Created by lejoss on 25/08/15.
 */
(function(){
    'use strict';

    angular.
        module('beesoft-core.menu').
        directive('menuToggle', menuToggle);

    function menuToggle() {
        return {
            scope: {
                section: '='
            },
            templateUrl: '../views/menu-toggle.html',
            link: function (scope, element) {
                var controller = element.parent().controller();
                scope.isOpen = function () {
                    return controller.isOpen(scope.section);
                };
                scope.toggle = function () {
                    return controller.toggleOpen(scope.section);
                };
            }
        };

    }


})();