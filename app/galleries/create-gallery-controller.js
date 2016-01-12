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

  function CreateGalleryCtrl(GalleriesService) {
    var vm = this;
    vm.ctrlName = 'CreateGalleryCtrlVm';
    GalleriesService.getAll().then (function (result) {
      console.log('\n\n*************************** ejw - result ***************************:\n result : - ', angular.toJson(result, true) + '\n\n');
    }, function(error) {
      console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
    });

    vm.createGallery = function() {
      GalleriesService.addGallery();
    };

//    vm.addGallery();
  }
}());
