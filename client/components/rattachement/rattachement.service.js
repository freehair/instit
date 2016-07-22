'use strict';


(function() {

    function RattachementService($location, $http, $cookies, $q ) {

        var Rattachement = {

            getBySchool(school){
                return $http.get('/api/rattachement?ecole='+school).then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            getByInstit(instit){
                return $http.get('/api/rattachement?instit='+instit).then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            }
        };

        return Rattachement;
    }

    angular.module('institApp.rattachement')
    .factory('Rattachement', RattachementService);

})();
