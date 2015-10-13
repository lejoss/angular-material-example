/**
 * Created by lejoss on 26/08/15.
 */
(function() {
    'use strict';

    angular.
        module('beesoft-core.menu').
        controller('MenuController', MenuController);

    MenuController.$inject = ['menuService'];

    function MenuController(menuService) {

        var menuCtrl              = this;
 
        //functions for menu-link and menu-toggle
        menuCtrl.isOpen           = isOpen;
        menuCtrl.toggleOpen       = toggleOpen;
        menuCtrl.autoFocusContent = false;
        menuCtrl.menu             = menuService;

        /*
        menuCtrl.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        */
        //////////////////////////////////////////////////////////////

        function isOpen(section) {
            return menuCtrl.menu.isSectionSelected(section);
        }

        function toggleOpen(section) {
            return menuCtrl.menu.toggleSelectSection(section);
        }
    }

})();