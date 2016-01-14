(function() {
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

  function GalleriesCtrl($state, GalleriesService) {
    var vm = this;
    vm.ctrlName = 'GalleriesCtrl';
    vm.title = 'Galleries';
//    All galleries related methods are defined in galleries-service.js
    vm.gsrv = GalleriesService;

    vm.sort = function(order) {
      vm.gsrv.sort(order);
    };

    vm.editGallery = function(gallery) {
      console.log('\n\n*************************** ejw - gallery ***************************:\n gallery : - ', angular.toJson(gallery, true) + '\n\n');
      vm.gsrv.selectedGallery = gallery;
      $state.go('editGallery', {id: gallery.id});
    };

    vm.deleteGallery = function(gallery) {
      console.log('\n\n*************************** ejw - DELETE gallery ***************************:\n gallery : - ', angular.toJson(gallery, true) + '\n\n');
      vm.gsrv.deleteGallery(gallery);
    };
  }
}());
