'use strict';

angular.module('institApp.auth', ['institApp.constants', 'institApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
