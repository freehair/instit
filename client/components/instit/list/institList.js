'use strict';
(function() {

    class InstitListController {

        constructor(InstitService, $state) {
            this.InstitService=InstitService;
            this.page=1;
            this.limit=2;
            this.$state=$state;
        }

        delete() {
        }

        $onInit() {
            var self=this;
            this.InstitService.getList(self.page,self.limit).then(res => {
                self.limit=res.data.limit;
                self.page=res.data.page;
                self.pages=res.data.pages;
                self.total=res.data.total;
                self.listInstits=res.data.docs;
            });
        }

        formatDate(date){
            return moment(date).format('DD/MM/YY');
        }

        pageChanged(){
            var self=this;
            this.InstitService.getList(self.page,self.limit).then(res => {
                self.limit=res.data.limit;
                self.page=res.data.page;
                self.pages=res.data.pages;
                self.total=res.data.total;
                self.listInstits=res.data.docs;
            });
        }

        consult(instit){
            this.InstitService.setInstitId(instit._id);
            this.$state.go("institDetail");
        }

    }

    angular.module('institApp')
      .component('instit', {
        templateUrl: 'components/instit/list/institList.html',
        controller: InstitListController
      });

})();
