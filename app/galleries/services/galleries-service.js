(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name galleries.service:GalleriesService
   *
   * @description
   *
   */
  angular
      .module('galleries')
      .service('GalleriesService', GalleriesService);

  function GalleriesService($state, Restangular, envService, toaster) {
    var self = {
      page: 1,
      isLoading: false,
      isSaving: false,
      selectedGallery: null,
      galleries: [],
      ordering: 'name',
      endpoint: 'galleries',
      apiUrl: envService.read('apiUrl'),
      withAuthToken: function() {
        //      var storage = $rootScope.$storage;
//      var authToken = 'Token ' + storage.auth_token;
        return Restangular.withConfig(function(RestangularConfigurer) {
          RestangularConfigurer
          //            .setDefaultHeaders({'Authorization': authToken})
              .setBaseUrl(self.apiUrl);
        });
      },
      getGalleries: function() {
        var params = {
          page: 1,
          perPage: 100,
          order: self.ordering
        };
        if (!self.isLoading) {
          self.isLoading = true;
          self.endpoint = 'galleries';

          self.withAuthToken().one(self.endpoint).get(params).then(function(result) {
            self.galleries = result.galleries;
            return self.galleries;
          }, function(error) {
            console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
          });
          self.isLoading = false;
        }
      },
      addGallery: function(gallery) {
        self.withAuthToken().all('galleries').post({
          gallery: gallery
        }).then(function() {
          toaster.pop('success', 'Gallery Created', 'You have successfully created the new gallery ' + gallery.name);
          $state.go('admin');
        }, function(error) {
          console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
          toaster.pop('error', 'Gallery Not Created', 'You have failed to created the new gallery ' + gallery.name);
        });
      },
      deleteGallery: function(gallery) {
        var endpoint = 'galleries/' + gallery.id;
        self.withAuthToken().one(endpoint).remove().then(function(result) {
          console.log('\n\n*************************** ejw - result ***************************:\n result : - ', angular.toJson(result, true) + '\n\n');
          self.selectedGallery = null;
          toaster.pop('info', 'Gallery Delete', 'You have successfully deleted the gallery ' + gallery.name);
        });
      },
      sort: function(order) {
        self.galleries = [];
        self.ordering = order;
        self.getGalleries();
      },
      serviceName: function() {
        return 'GalleriesService';
      }
    };

    self.getGalleries();

    return self;
  }
}());
