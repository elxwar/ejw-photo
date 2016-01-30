(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name sessions.controller:SessionsCtrl
   *
   * @description
   *
   */
  angular
    .module('sessions')
    .controller('SessionsCtrl', SessionsCtrl);

  function SessionsCtrl() {
    var vm = this;
    vm.ctrlName = 'SessionsCtrl';
  }
}());
