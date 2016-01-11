(function () {
  'use strict';

  angular
    .module('galleries')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('galleries', {
        url: '/galleries',
        templateUrl: 'galleries/galleries.tpl.html',
        controller: 'GalleriesCtrl',
        controllerAs: 'galleriesVm'
      })
      .state('createGallery', {
        url: '/create-gallery',
        templateUrl: 'galleries/create-gallery.tpl.html',
        controller: 'CreateGalleryCtrl',
        controllerAs: 'createGalleryVm',
        data: {
          pageTitle: 'Create Gallery'
        }
      });
  }
}());
