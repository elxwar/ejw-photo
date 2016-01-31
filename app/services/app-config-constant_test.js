/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('appConfig', function () {
  var constant;

  beforeEach(module('mwCom'));

  beforeEach(inject(function (appConfig) {
    constant = appConfig;
  }));

  it('should equal 0', function () {
    expect(constant).toBe(0);
  });
});
