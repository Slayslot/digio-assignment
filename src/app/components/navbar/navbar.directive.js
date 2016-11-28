(function() {
  'use strict';

  angular
    .module('digio')
    .directive('mainNavbar', acmeNavbar)
    .service('NavService', NavServiceFunction);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $log, NavService) {
      var vm = this;
      function renderer(){
        vm.name = NavService.name;
        vm.bools = NavService.bools;
      }
      renderer();

      $scope.$on('text-changed', function() {
        renderer();
      })
    }
  }

  function NavServiceFunction($rootScope){
    var vm = this;
    vm.bools = {request: false, login: false, verify: false};

    vm.update = function(name, controllerName){
      vm.name=name;
      for(var key in vm.bools){
        if(key===controllerName)
          vm.bools[key]=true;
        else
          vm.bools[key]=false;
      }
      $rootScope.$broadcast('text-changed');
    }
  }

})();
