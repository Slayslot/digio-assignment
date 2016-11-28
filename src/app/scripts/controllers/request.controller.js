(function() {
  'use strict';

  angular
    .module('digio')
    .controller('RequestController', RequestCtrlFunction);

  /** @ngInject */
  function RequestCtrlFunction($log) {
    $log.info('coming in from request');
  }
})();
