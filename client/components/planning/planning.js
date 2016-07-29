'use strict';
(function() {

    class PlanningController {

        constructor($state, $scope, EcoleService, PlanningService, Util, Scolarite) {
            this.$state=$state;
            this.$scope=$scope;
            this.EcoleService=EcoleService;
            this.PlanningService=PlanningService;
            this.Scolarite=Scolarite;
            this.Util=Util;
            this.eventSources=[];
        }

        delete() {
        }

        $onInit() {
            var _selected;
            var self=this;

            this.EcoleService.getList().then(res =>{
                self.listEcoles = res.data.docs;
                console.log("listEcoles : ", self.listEcoles);
            });

            this.Scolarite.getList().then(res =>{
                self.listScolarite = res.data;
            })

            this.$scope.changeEcoleSelected = function(value){
                if (arguments.length) {
                    _selected = value;
                    if (value){
                        self.ecoleSelected(value);

                    }
                } else {
                    //console.log("_selected : ", _selected);
                    return _selected;
                }
            };

            this.$scope.modelOptions = {
                debounce: {
                    default: 500,
                    blur: 250
                },
                getterSetter: true
            };
        }

        ecoleSelected(value){
            //console.log("value : ", value);
            var self=this;
            this.PlanningService.getPlanningBySchool(value).then( res => {
                console.log("res planning : ", res.data);
                let events=[];
                for (var item of res.data){
                    console.log("item : ",item);
                    let event={};
                    event.title=item.classe;
                    if (!item.dateDebut && !item.dateFin){
                        event.start=new Date() ;
                        event.end=new Date() ;
                    }else{
                        event.start=item.dateDebut;
                        event.end=item.dateFin;
                    }
                    event.allDay=false;

                    console.log("event : ",event);
                    events.push(event);
                }
                console.log("events : ",events);
                if (this.eventSources.length>0){
                    this.eventSources[0]=events;
                }else{
                    this.eventSources.push(events);
                }
                console.log("this.eventSources : ",this.eventSources);
            });
        }

        /*changeEcoleSelected(val){
        console.log("ecole selected : ": val);
    }*/




}

angular.module('institApp')
.component('planning', {
    templateUrl: 'components/planning/planning.html',
    controller: PlanningController
});

})();
