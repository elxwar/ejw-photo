/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SessionsService', function () {
  var service;

  beforeEach(module('mwCom'));

  beforeEach(inject(function (SessionsService) {
    service = SessionsService;
  }));

  it('should equal SessionsService', function () {
    expect(service.get()).toEqual('SessionsService');
  });
});
