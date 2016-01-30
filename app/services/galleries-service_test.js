/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('GalleriesService', function () {
  var service;

  beforeEach(function() {
    module('mwCom');
    module('galleries');
  });

//  beforeEach(angular.module('galleries').service('GalleriesService'));
  beforeEach(inject(function (GalleriesService) {
    service = GalleriesService;
  }));

  it('should equal GalleriesService', function () {
    expect(service.serviceName()).toEqual('GalleriesService');
  });
});
