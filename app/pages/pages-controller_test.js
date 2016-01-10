/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('PagesCtrl', function () {
  var ctrl;

  beforeEach(module('pages'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PagesCtrl');
  }));

  it('should have ctrlName as PagesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('PagesCtrl');
  });
});
