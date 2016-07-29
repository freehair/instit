'use strict';

angular.module('institApp.planning')
  .config(function($stateProvider) {
    $stateProvider
      .state('planning', {
        url: '/planning',
        template: '<planning></planning>'
      })

  });
