(function() {
  'use strict';

  /* @ngdoc object
   * @name mwCom
   * @description
   *
   */
  angular
      .module('mwCom', [
        'ui.router',
        'mgcrea.ngStrap',
        'ngAnimate',
        'ngPageTitle',
        'restangular',
        'environment',
        'angular-ladda',
        'home',
        'articles',
        'admin',
        'galleries',
        'pages',
        'toaster'
      ]);
}());
