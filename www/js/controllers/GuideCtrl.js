/**
 * Controlador de pagina principal de guia
 */
controllers.controller('GuideCtrl', ["$scope", "$stateParams", "$state", "$http", "EventService",
    function ($scope, $stateParams, $state, $http, EventService) {


        $scope.filtro = ""; //Filtro de busqueda
        $scope.buscarVisible = false; //Indica si la barra de busqueda es visible

        /** Va a la pantalla de listado de eventos, mostrando los eventos del día concreto especificado.
         Puede indicarse -1 para todos los días, o un día de 8 a 15 */
        $scope.openDay = function (d) {

            $state.go('app.eventList', {day: d});
        };


        /** Abre una categoria **/
        $scope.openCategory = function (c) {

            $state.go('app.eventList', {category: c});
        };


        /** Realiza una busqueda **/
        $scope.buscar = function () {

            $state.go('app.searchList', {term: $scope.filtro});
            $scope.buscarVisible = false;
            $scope.filtro = "";
        };

        /** Alterna la visibilidad del panel de busqueda **/
        $scope.toggleSearch = function () {
            //$scope.add();
            $scope.buscarVisible = !$scope.buscarVisible;

        }

    }]);
