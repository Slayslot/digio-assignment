(function() {
  'use strict';

  angular
    .module('digio')
    .controller('LoginController', LoginCtrlFunction);

  /** @ngInject */
  function LoginCtrlFunction(ProgressBarService, LoginService, NavService,
  $state) {
    var vm = this;

    var emailUsed = 'sanket@digio.in';
    NavService.update(emailUsed,'login');

    vm.submitEmail = function(){
      LoginService.update(true);
      $state.go('verify');
      ProgressBarService.stop();
    }
  }
})();
