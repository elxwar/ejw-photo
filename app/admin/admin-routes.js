(function() {
  'use strict';

  angular
      .module('admin')
      .config(config);

  function config($stateProvider) {
    $stateProvider
        .state('admin', {
          url: '/admin',
          templateUrl: 'admin/admin.tpl.html',
          controller: 'AdminCtrl',
          controllerAs: 'adminVm',
          data: {
            pageTitle: 'Photo Site Admin'
          },
          resolve: {
            auth: function($rootScope, $auth, $state, toaster) {
              return $auth.validateUser().then(function() {
                // Since $rootScope.user gets replaced when validating need to get tokens now rather than during log in
                $rootScope.user.tokens = $auth.retrieveData('auth_headers');
              }, function(error) {
                console.log('\n\n*************************** ejw - error ***************************:\n error : - ', angular.toJson(error, true) + '\n\n');
                toaster.pop('error', 'User not authenticated', 'You need to log in to access the admin area.');
                $state.go('sessions-new');
              });
            }
          }
        });
  }
}());
