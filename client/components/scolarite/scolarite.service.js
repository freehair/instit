'use strict';

(function() {

    /**
    * The Util service is for thin, globally reusable, utility functions
    */
    function ScolariteService($location, $http, $cookies, $q) {
        var Scolarite = {

            getList() {
                return $http.get('/api/scolarite').then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            add(dateDebut, dateFin) {

            }


        };

        return Scolarite;
    }

    angular.module('institApp.scolarite')
    .factory('Scolarite', ScolariteService);
})();
