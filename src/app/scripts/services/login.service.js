angular
   .module('digio')
   .service('LoginService', LoginServiceFunction);

 /** @ngInject */
 function LoginServiceFunction(ProgressBarService) {
  //  var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();
 }
