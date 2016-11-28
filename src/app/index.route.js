(function() {
  'use strict';

  angular
    .module('digio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/login');

    $stateProvider
    .state('base-home', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/base.home.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base-home',
      templateUrl: 'app/views/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('verify', {
      url: '/verify',
      parent: 'base-home',
      templateUrl: 'app/views/verify.html',
      controller: 'VerifyController',
      controllerAs: 'ver'
    })
  }

})();
