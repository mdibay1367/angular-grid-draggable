(function(){
  'use strict';
  angular
    .module('GridApp')
    .config(appConfig);
  appConfig.$inject = ['$routeProvider'];
  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm'
      });
  }
})();
