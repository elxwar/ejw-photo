(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name pages.controller:PagesCtrl
   *
   * @description
   *
   */
  angular
    .module('pages')
    .controller('PagesCtrl', PagesCtrl);

  function PagesCtrl() {
    var vm = this;
    vm.ctrlName = 'PagesCtrl';
  }
}());
