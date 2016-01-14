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

  function CreateGalleryCtrl($state, GalleriesService) {
    var vm = this;
    vm.gallery = {};

    vm.createGallery = function() {
      GalleriesService.addGallery(vm.gallery);
    };

    vm.cancel = function() {
      $state.go('admin');
    };
  }
}());
