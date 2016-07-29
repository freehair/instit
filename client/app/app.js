'use strict';

angular.module('institApp', [
    'institApp.auth',
    'institApp.rattachement',
    'institApp.admin',
    'institApp.constants',
    'institApp.instit',
    'institApp.ecole',
    'institApp.planning',
    'institApp.scolarite',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'ui.calendar'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
});
