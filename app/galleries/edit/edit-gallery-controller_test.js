/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('EditGalleryCtrl', function () {
  var ctrl;

  beforeEach(function() {
    module('mwCom');
    module('galleries');
  });

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('EditGalleryCtrl');
  }));

  it('should have ctrlName as EditGalleryCtrl', function () {
    expect(ctrl.ctrlName).toEqual('EditGalleryCtrl');
  });
});
