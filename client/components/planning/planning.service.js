'use strict';


(function() {

    function PlanningService($location, $http, $cookies, $q ) {

        var PlanningService = {
            getPlanningBySchool(ecole){
                return $http.get('/api/planning?ecole='+ecole._id).then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },
        };

        return PlanningService;
    }

    angular.module('institApp.planning')
    .factory('PlanningService', PlanningService);

})();
