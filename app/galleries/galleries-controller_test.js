/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GalleriesCtrl', function () {
  var ctrl;

  beforeEach(module('galleries'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GalleriesCtrl');
  }));

  it('should have ctrlName as GalleriesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GalleriesCtrlVm');
  });
});
