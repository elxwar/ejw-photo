(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name galleries.controller:EditGalleryCtrl
   *
   * @description
   *
   */
  angular
    .module('galleries')
    .controller('EditGalleryCtrl', EditGalleryCtrl);

  function EditGalleryCtrl(GalleriesService) {
    var vm = this;
    vm.ctrlName = 'EditGalleryCtrl';
    vm.title = 'Edit Gallery';
//    All galleries related methods are defined in galleries-service.js
    vm.gsrv = GalleriesService;
  }
}());
