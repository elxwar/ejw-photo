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
    var self = this,
        apiUrl = envService.read('apiUrl');
    self.withAuthToken = function() {
//      var storage = $rootScope.$storage;
//      var authToken = 'Token ' + storage.auth_token;
      return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer
        //            .setDefaultHeaders({'Authorization': authToken})
            .setBaseUrl(apiUrl);
      });
    };

    self.getAll = function() {
      var endpoint = 'galleries';
      return self.withAuthToken().one(endpoint).get();
    };

    self.addGallery = function(gallery) {
      gallery = gallery || {name: 'Test Gallery paw', description: 'Lorem ipsum la di da...', thumbnail: 'http://animage.somewhere/it.jpg'};

      return self.withAuthToken().all('galleries').post({
        gallery: gallery
      });
    };

    return self;
  }
}());
