'use strict';

angular.module('institApp.ecole')
  .config(function($stateProvider) {
    $stateProvider
      .state('ecole', {
        url: '/ecole',
        template: '<ecole></ecole>'
      })

      .state('ecoleDetail', {
        url: '/ecoleDetail',
        template: '<ecole-detail></ecole-detail>'
      })

  });
