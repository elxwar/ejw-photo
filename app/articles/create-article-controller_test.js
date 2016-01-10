/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CreateArticleCtrl', function () {
  var ctrl;

  beforeEach(module('articles'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CreateArticleCtrl');
  }));

  it('should have ctrlName as CreateArticleCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CreateArticleCtrl');
  });
});
