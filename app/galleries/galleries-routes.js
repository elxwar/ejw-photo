(function () {
  'use strict';

  angular
    .module('galleries')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('galleries', {
        url: '/galleries',
        templateUrl: 'galleries/list/galleries.tpl.html',
        controller: 'GalleriesCtrl',
        controllerAs: 'galleriesVm'
      })
      .state('createGallery', {
        url: '/create-gallery',
        templateUrl: 'galleries/create/create-gallery.tpl.html',
        controller: 'CreateGalleryCtrl',
        controllerAs: 'createGalleryVm',
        data: {
          pageTitle: 'Create Gallery'
        }
      })
      .state('editGallery', {
        url: '/edit-gallery/:id',
        templateUrl: 'galleries/edit/edit-gallery.tpl.html',
        controller: 'EditGalleryCtrl',
        controllerAs: 'editGalleryVm'
      });
  }
}());
