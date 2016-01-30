(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name sessions.controller:SessionsNewCtrl
   *
   * @description
   *
   */
  angular
    .module('sessions')
    .controller('SessionsNewCtrl', SessionsNewCtrl);

  function SessionsNewCtrl(SessionsService) {
    var vm = this;
    vm.ctrlName = 'SessionsNewCtrl';
    vm.loginForm = {};

    vm.login = function() {
      SessionsService.login(vm.loginForm);
      console.log('\n\n*************************** ejw - SessionsService.user ***************************:\n SessionsService.user : - ', angular.toJson(SessionsService.user, true) + '\n\n');
    };
  }
}());
