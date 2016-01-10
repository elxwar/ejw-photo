(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name articles.controller:CreateArticleCtrl
   *
   * @description
   *
   */
  angular
    .module('articles')
    .controller('CreateArticleCtrl', CreateArticleCtrl);

  function CreateArticleCtrl() {
    var vm = this;
    vm.ctrlName = 'CreateArticleCtrl';
  }
}());
