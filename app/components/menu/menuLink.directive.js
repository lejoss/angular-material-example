/**
 * Created by lejoss on 25/08/15.ia
 */
(function(){
    'use strict';

    angular.
        module('beesoft-core.menu').
        directive('menuLink', menuLink);

    function menuLink() {
        return {
            scope: {
                section: '='
            },
            templateUrl: '../views/menu-link.html',
            link: function ($scope, $element) {
                var controller = $element.parent().controller();

                $scope.focusSection = function () {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    }


})();