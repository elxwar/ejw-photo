(function () {
  'use strict';

  angular
    .module('pages')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('pages', {
        url: '/pages',
        templateUrl: 'pages/pages.tpl.html',
        controller: 'PagesCtrl',
        controllerAs: 'pagesVm'
      });
  }
}());
