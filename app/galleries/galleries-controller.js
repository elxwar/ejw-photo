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

  function GalleriesCtrl($alert, $rootScope, GalleriesService) {
    var vm = this;
    vm.ctrlName = 'GalleriesCtrlVm';
    vm.galleries = {};

    GalleriesService.getAll().then(function(result) {
      console.log('\n\n*************************** ejw - result ***************************:\n result : - ', angular.toJson(result, true) + '\n\n');
      vm.galleries = result.galleries;
    }, function(error) {
      console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
    });
    vm.alert = function() {
      vm.myAlert = $alert({title: 'Holy guacamole!', content: 'Best check yo self, you\'re not looking too good.', placement: 'top', type: 'info', show: true});
    };
  }
}());
