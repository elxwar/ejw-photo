(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name galleries.controller:GalleriesCtrl
   *
   * @description
   *
   */
  angular
    .module('galleries')
    .controller('GalleriesCtrl', GalleriesCtrl);

  function GalleriesCtrl() {
    var vm = this;
    vm.ctrlName = 'GalleriesCtrlVm';
  }
}());
