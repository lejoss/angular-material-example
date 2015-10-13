(function () {
    'use strict';

    angular
        .module('beesoft-core.radication')
        .controller('RadicationCtrl', RadicationCtrl);

    RadicationCtrl.$inject = ['Restangular',"$state", "$mdDialog"];

    function RadicationCtrl (Restangular, $state, $mdDialog) {

        var radicationCtrl            = this;
        radicationCtrl.title          = 'Bandeja de Entrada';
        radicationCtrl.documents      = [];
        radicationCtrl.inputFilter    = '';
        // methods
        radicationCtrl.getInboxList   = getInboxList;
        radicationCtrl.deleteDocument = deleteDocument;
        radicationCtrl.goToDetailDocument = goToDetailDocument;

        activate();
        ///////////////////////////////////

        function activate(){
            return getInboxList();
        }

        function getInboxList() {
            return Restangular.allUrl('messages', 'api/inbox.json').getList()
                .then(function(messages) {
                    radicationCtrl.documents = messages;
                })
                .catch();
        }

        function goToDetailDocument() {
                return $state.go('document');
        }

        function deleteDocument(e) {
            // Dialog Setup
            var confirm = $mdDialog.confirm()
                .title('Sr Usuario')
                .content('Desea Eliminar este documento ?, Podra recuperarlo luego.')
                .targetEvent(e)
                .ok('Si, por favor ELiminar.')
                .cancel('no gracias');

            // Confirm Dialog
            $mdDialog.show(confirm)
                .then(function() {

                }).catch();
        }

    }


})();