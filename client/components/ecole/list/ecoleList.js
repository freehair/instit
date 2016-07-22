'use strict';
(function() {

    class EcoleListController {

        constructor(EcoleService, $state) {
            this.EcoleService=EcoleService;
            this.page=1;
            this.limit=2;
            this.$state=$state;
        }

        delete() {
        }

        $onInit() {
            var self=this;
            this.EcoleService.getList(self.page,self.limit).then(res => {
                self.limit=res.data.limit;
                self.page=res.data.page;
                self.pages=res.data.pages;
                self.total=res.data.total;
                self.listEcoles=res.data.docs;
            });
        }

        formatDate(date){
            return moment(date).format('DD/MM/YY');
        }

        pageChanged(){
            var self=this;
            this.EcoleService.getList(self.page,self.limit).then(res => {
                self.limit=res.data.limit;
                self.page=res.data.page;
                self.pages=res.data.pages;
                self.total=res.data.total;
                self.listEcoles=res.data.docs;
            });
        }

        consult(ecole){
            this.EcoleService.setEcoleId(ecole._id);
            this.$state.go("ecoleDetail");
        }

    }

    angular.module('institApp')
      .component('ecole', {
        templateUrl: 'components/ecole/list/ecoleList.html',
        controller: EcoleListController
      });

})();
