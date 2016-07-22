'use strict';


(function() {

    function InstitService($location, $http, $cookies, $q ) {

        var InstitService = {

            getList(page, limit){
                return $http.get('/api/instit?page='+page+"&limit="+limit).then(res => {
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            getListById(id){
                if(!id){
                    id=this.institId;
                }
                return $http.get('/api/instit/'+id).then(res => {
                    console.log("res getListById : ", res);
                    return $q.resolve(res);
                })
                .catch(err => {
                    return $q.reject(err.data);
                });
            },

            setInstitId(id){
                this.institId=id;
            },

            getInstitId(){
                return this.institId;
            }
        };

        return InstitService;
    }

    angular.module('institApp.instit')
    .factory('InstitService', InstitService);

})();
