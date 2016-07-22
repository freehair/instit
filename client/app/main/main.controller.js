'use strict';

(function() {

    class MainController {

        constructor($http, Auth) {
            this.$http = $http;
            //this.awesomeThings = [];

            //this.Auth = Auth;
        }

        $onInit() {

        }

    }


    angular.module('institApp')
    .component('main', {
        templateUrl: 'app/main/main.html',
        controller: MainController
    });
})();
