(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name mwCom.service:SessionsService
   *
   * @description
   *
   */
  angular
    .module('mwCom')
    .service('SessionsService', SessionsService);

  function SessionsService($state, $auth, Restangular, envService) {
    var self = {
      isLoggingIn: false,
      isLoggingOut: false,
      isLoggedIn: false,
      tokens: {},
      apiUrl: envService.read('apiUrl'),
      withAuthToken: function () {
        //      var storage = $rootScope.$storage;
        //      var authToken = 'Token ' + storage.auth_token;
        return Restangular.withConfig(function (RestangularConfigurer) {
          RestangularConfigurer
          //            .setDefaultHeaders({'Authorization': authToken})
            .setBaseUrl(self.apiUrl)
            .setFullResponse(true);
        });
      },
      login: function (login) {
        self.isLoggingIn = true;
        $auth.submitLogin(login)
          .then(function () {
            // handle success response
            // self.tokens = $auth.retrieveData('auth_headers');
            // console.log('\n\n*************************** ejw - ff ***************************:\n ff : - ', angular.toJson(self.tokens, true) + '\n\n');
            self.isLoggingIn = false;
            self.isLoggedIn = true;
            $state.go('admin');
          })
          .catch(function (error) {
            // handle error response
            console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
            self.isLoggingIn = false;
            self.isLoggedIn = false;
          });
        //        self.withAuthToken().all('auth/sign_in').post({
        //          email: email,
        //          password: password
        //        }).then(function(result) {
        //          console.log('\n\n*************************** ejw - result ***************************:\n result : - ', angular.toJson(result, true) + '\n\n');
        //        }, function(error) {
        //          console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
        //        });
      }
    };

    return self;
  }
} ());
