angular
   .module('digio')
   .service('LoginService', LoginServiceFunction);

 /** @ngInject */
 function LoginServiceFunction(ProgressBarService) {
   var vm = this;
   vm.loggedin=false;

   vm.update = function(loggedin){
     ProgressBarService.setPreloaderConfig();
     ProgressBarService.load();
     vm.loggedin=loggedin;
   }
 }
