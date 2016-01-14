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

  function CreateGalleryCtrl($state, GalleriesService, toaster) {
    var vm = this;
    vm.gallery = {};

    vm.createGallery = function() {
      toaster.pop('success', 'Gallery Created', 'You have successfully created the new gallery ' + vm.gallery.name);
      GalleriesService.addGallery(vm.gallery);
      $state.go('admin');
    };
  }
}());
