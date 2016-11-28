(function() {
  'use strict';

  angular
    .module('digio')
    .controller('LoginController', LoginCtrlFunction);

  /** @ngInject */
  function LoginCtrlFunction($log, NavService) {
    var emailUsed = 'sanket@digio.in';
    NavService.update(emailUsed,'login');
  }
})();
