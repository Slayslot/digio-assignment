(function() {
  'use strict';

  angular
    .module('digio')
    .controller('VerifyController', VerifyCtrlFunction);

  /** @ngInject */
  function VerifyCtrlFunction(NavService, $log) {
    NavService.update('', 'verify');
    $log.info('coming in from verify');
  }
})();
