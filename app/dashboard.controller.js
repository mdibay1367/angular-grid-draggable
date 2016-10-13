(function() {
  'use strict';
  angular
    .module('DashboardApp')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = [];
  function DashboardController() {
       var vm = this;
       vm.items = [{x: 0, y: 0, w: 5, h: 4, type: 'type_first'}, {x: 6, y: 5, w: 3, h: 4, type: 'type_second'}];
       vm.direction = "vertical";
       vm.directionLimit = "9";
   }
})();
