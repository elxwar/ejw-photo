/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GalleriesCtrl', function () {
  var ctrl;

  beforeEach(function() {
    module('mwCom');
    module('galleries');
  });

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('GalleriesCtrl');
    console.log('\n\n*************************** ejw - ctrl ***************************:\n ctrl : - ', angular.toJson(ctrl, true) + '\n\n');
  }));

  it('should have ctrlName as GalleriesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('GalleriesCtrl');
  });
});
