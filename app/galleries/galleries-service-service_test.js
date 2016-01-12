/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GalleriesService', function () {
  var service;

  beforeEach(module('galleries'));

  beforeEach(inject(function (GalleriesService) {
    service = GalleriesService;
  }));

  it('should equal GalleriesService', function () {
    expect(service.get()).toEqual('GalleriesService');
  });
});
