(function() {
  'use strict';

  angular
    .module('digio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.info("Not your best moment peeking into others code, eh?");
  }

})();
