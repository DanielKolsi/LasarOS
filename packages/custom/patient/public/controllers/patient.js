(function() {
    'use strict';

    /* jshint -W098 */

    function PatientController($scope, Global, Patient, $stateParams) {
        $scope.global = Global;
        $scope.package = {
            name: 'patient'
        };

        $scope.checkCircle = function() {
            Patient.checkCircle($stateParams.circle).then(function(response) {
                $scope.res = response;
                $scope.resStatus = 'info';
            }, function(error) {
                $scope.res = error;
                $scope.resStatus = 'danger';
            });
        };
    }

    angular
        .module('mean.patient')
        .controller('PatientController', PatientController);

    PatientController.$inject = ['$scope', 'Global', 'Patient', '$stateParams'];

})();
