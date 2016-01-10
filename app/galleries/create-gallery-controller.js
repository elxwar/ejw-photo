(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name galleries.controller:CreateGalleryCtrl
   *
   * @description
   *
   */
  angular
    .module('galleries')
    .controller('CreateGalleryCtrl', CreateGalleryCtrl);

  function CreateGalleryCtrl() {
    var vm = this;
    vm.ctrlName = 'CreateGalleryCtrlVm';
  }
}());
