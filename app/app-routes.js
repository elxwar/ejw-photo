(function() {
  'use strict';

  angular
      .module('mwCom')
      .config(config)
      .run(run);

  function config($urlRouterProvider, $authProvider, envServiceProvider) {
    $urlRouterProvider.otherwise('/admin');

    envServiceProvider.config({
      domains: {
        development: ['localhost:3002', 'dev.local', 'localhost'],
        staging: ['localhost:5000'],
        production: ['xxx.xxx.com']
      },
      vars: {
        development: {
          apiUrl: '//localhost:3000'
        },
        staging: {
          apiUrl: '//localhost:3000'
        },
        production: {
          apiUrl: ''
        }
      }
    });
    // run the environment check, so the configuration is made
    // before controllers and services are built
    envServiceProvider.check();

    $authProvider.configure({
      apiUrl: 'http://localhost:3000',
      tokenFormat: {
        'Token-Type': 'Bearer',
        'Access-Token': '{{token}}',
        Uid: '{{uid}}',
        Client: '{{clientId}}',
        Expiry: '{{expiry}}'
      }
    });
  }

  function run($rootScope) {
    var stateStart = $rootScope.$on('$stateChangeStart', function(event, toState) {
      $rootScope.pageTitle = toState.data && toState.data.pageTitle ? toState.data.pageTitle : 'Photo Site';
    });
    $rootScope.$on('$destroy', stateStart);
  }
}());
