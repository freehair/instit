'use strict';
(function() {

    class EcoleDetailController {

        constructor(EcoleService, $state, Rattachement) {
            this.EcoleService=EcoleService;
            this.$state=$state;
            this.Rattachement=Rattachement;
        }

        delete() {
        }

        $onInit() {
            var self=this;
            var id=this.EcoleService.getEcoleId();
            if(id){
                this.EcoleService.getListById().then(res => {
                    self.ecole=res.data;
                    this.Rattachement.getBySchool(self.ecole._id).then(res => {
                        self.rattachement=res.data;
                    })

                });
            }else{
                this.$state.go('ecole');
            }
        }

        formatDate(date){
            return moment(date).format('DD/MM/YY');
        }


    }

    angular.module('institApp')
    .component('ecoleDetail', {
        templateUrl: 'components/ecole/detail/ecoleDetail.html',
        controller: EcoleDetailController
    });

})();
