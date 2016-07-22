'use strict';

angular.module('institApp', [
    'institApp.auth',
    'institApp.rattachement',
    'institApp.admin',
    'institApp.constants',
    'institApp.instit',
    'institApp.ecole',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
});
