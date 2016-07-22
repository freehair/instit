'use strict';

angular.module('institApp.instit')
  .config(function($stateProvider) {
    $stateProvider
      .state('instit', {
        url: '/instit',
        template: '<instit></instit>'
      })

      .state('institDetail', {
        url: '/institDetail',
        template: '<instit-detail></instit-detail>'
      })

  });
