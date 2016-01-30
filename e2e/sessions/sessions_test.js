/* global describe, beforeEach, it, browser, expect */
'use strict';

var SessionsPagePo = require('./sessions.po');

describe('Sessions page', function () {
  var sessionsPage;

  beforeEach(function () {
    sessionsPage = new SessionsPagePo();
    browser.get('/#/sessions');
  });

  it('should say SessionsCtrl', function () {
    expect(sessionsPage.heading.getText()).toEqual('sessions');
    expect(sessionsPage.text.getText()).toEqual('SessionsCtrl');
  });
});
