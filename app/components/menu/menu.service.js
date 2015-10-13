/**
 * Created by lejoss on 25/08/15.
 */
(function() {
    'use strict';

    angular
        .module('beesoft-core.menu')
        .factory('menuService', menuService);

    function menuService () {

        var sections = [];

        // add sections (menu-items)
        sections.push({
            name: 'Gestion Documental',
            type: 'toggle',
            pages: [{
                name: 'Crear Documento',
                type: 'link',
                state: 'radications',
                icon: 'fa fa-file'
            }, {
                name: 'Buscar Documento',
                state: 'documents',
                type: 'link',
                icon: 'fa fa-search'
            }]
        });


        var _menuService = {
            sections: sections,
            toggleSelectSection: toggleSelectSection,
            isSectionSelected: isSectionSelected
        };

        return _menuService;

        /////////////////////////////////////////////

        function toggleSelectSection(section) {
            _menuService.openedSection = (_menuService.openedSection === section ? null : section);
        }

        function isSectionSelected(section) {
            return _menuService.openedSection === section;
        }

    }
})();