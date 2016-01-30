/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SessionsCtrl', function () {
  var ctrl;

  beforeEach(module('sessions'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SessionsCtrl');
  }));

  it('should have ctrlName as SessionsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SessionsCtrl');
  });
});
