/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SessionsNewCtrl', function () {
  var ctrl;

  beforeEach(module('sessions'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('SessionsNewCtrl');
  }));

  it('should have ctrlName as SessionsNewCtrl', function () {
    expect(ctrl.ctrlName).toEqual('SessionsNewCtrl');
  });
});
