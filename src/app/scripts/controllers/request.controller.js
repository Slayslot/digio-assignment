(function() {
  'use strict';

  angular
    .module('digio')
    .controller('RequestController', RequestCtrlFunction);

  /** @ngInject */
  function RequestCtrlFunction(NavService, $log) {
    var documentName = 'Mutual Non-Disclosure Agreement'
    NavService.update(documentName, 'request');
    $log.info('coming in from request');
  }
})();
