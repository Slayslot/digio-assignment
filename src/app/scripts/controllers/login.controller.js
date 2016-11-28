(function() {
  'use strict';

  angular
    .module('digio')
    .controller('LoginController', LoginCtrlFunction);

  /** @ngInject */
  function LoginCtrlFunction($log) {
    $log.info('coming in from login');
  }
})();
