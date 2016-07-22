'use strict';
(function() {

    class InstitDetailController {

        constructor(InstitService, $state) {
            this.InstitService=InstitService;
            this.$state=$state;
        }

        delete() {
        }

        $onInit() {
            var self=this;
            var id=this.InstitService.getInstitId();
            if(id){
                this.InstitService.getListById().then(res => {
                    self.instit=res.data;
                });
            }else{
                this.$state.go('instit');
            }
        }

        formatDate(date){
            return moment(date).format('DD/MM/YY');
        }


    }

    angular.module('institApp')
      .component('institDetail', {
        templateUrl: 'components/instit/detail/institDetail.html',
        controller: InstitDetailController
      });

})();
