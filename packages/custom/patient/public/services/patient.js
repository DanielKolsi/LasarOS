(function() {
    'use strict';

    function Patient($http, $q) {
        return {
            name: 'patient',
            checkCircle: function(circle) {
                var deferred = $q.defer();

                $http.get('/api/patient/example/' + circle).success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;

            }
        };
    }

    angular
        .module('mean.patient')
        .factory('Patient', Patient);

    Patient.$inject = ['$http', '$q'];

})();
