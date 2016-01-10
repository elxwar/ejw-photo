/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('CreateGalleryCtrl', function () {
  var ctrl;

  beforeEach(module('galleries'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('CreateGalleryCtrl');
  }));

  it('should have ctrlName as CreateGalleryCtrl', function () {
    expect(ctrl.ctrlName).toEqual('CreateGalleryCtrlVm');
  });
});
