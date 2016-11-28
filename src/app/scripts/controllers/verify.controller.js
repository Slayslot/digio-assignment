(function() {
  'use strict';

  angular
    .module('digio')
    .controller('VerifyController', VerifyCtrlFunction);

  /** @ngInject */
  function VerifyCtrlFunction($log) {
    $log.info('coming in from verify');
  }
})();
