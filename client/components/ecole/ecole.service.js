'use strict';


(function() {

    function EcoleService($location, $http, $cookies, $q ) {

        var EcoleService = {

            getList(page, limit){
                return $http.get('/api/ecole?page='+page+"&limit="+limit).then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            getListById(id){
                if(!id){
                    id=this.ecoleId;
                }
                return $http.get('/api/ecole/'+id).then(res => {
                    console.log("res getListById : ", res);
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            setEcoleId(id){
                this.ecoleId=id;
            },

            getEcoleId(){
                return this.ecoleId;
            }
        };

        return EcoleService;
    }

    angular.module('institApp.ecole')
    .factory('EcoleService', EcoleService);

})();
