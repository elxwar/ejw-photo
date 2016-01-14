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

  function GalleriesService(Restangular, envService) {
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
        return self.withAuthToken().all('galleries').post({
          gallery: gallery
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
