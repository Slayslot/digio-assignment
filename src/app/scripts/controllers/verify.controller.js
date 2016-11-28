(function() {
  'use strict';

  angular
    .module('digio')
    .controller('VerifyController', VerifyCtrlFunction);

  /** @ngInject */
  function VerifyCtrlFunction(NavService, LoginService, ProgressBarService, $document, $timeout) {
    var vm = this;
    vm.aadharVerified =false;
    vm.OTPVerified = false;
    NavService.update('', 'verify');
    vm.loggedin = LoginService.loggedin;

    vm.verifyAadhar = function(){
      ProgressBarService.setPreloaderConfig();
      ProgressBarService.load();
      vm.aadharVerified = true;
      ProgressBarService.stop();
    }

    vm.verifyOTP =function(){
      ProgressBarService.setPreloaderConfig();
      ProgressBarService.load();
      if(vm.aadharVerified){
        vm.OTPVerified = true;
        angular.element( $document[0].querySelector('.transparent-sheet')).removeClass('active');
        angular.element( $document[0].querySelector('.verification')).css('display','none');
        angular.element( $document[0].querySelector('.success-message')).css('display','unset');
        $timeout(function(){
          angular.element( $document[0].querySelector('.success-message')).css('display','none');
        }, 3000);
      }else{
        alert('please verify Aadhar first');
      }
      ProgressBarService.stop();
    }
  }
})();
