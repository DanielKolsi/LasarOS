(function() {
    'use strict';

    function Patient($stateProvider) {
        $stateProvider.state('patient example page', {
            url: '/patient/example',
            templateUrl: 'patient/views/index.html'
        }).state('patient circles example', {
            url: '/patient/example/:circle',
            templateUrl: 'patient/views/example.html'
        });
    }

    angular
        .module('mean.patient')
        .config(Patient);

    Patient.$inject = ['$stateProvider'];

})();
