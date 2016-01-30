/* global describe, beforeEach, it, browser, expect */
'use strict';

var SessionsNewPagePo = require('./sessions-new.po');

describe('Sessions new page', function () {
  var sessionsNewPage;

  beforeEach(function () {
    sessionsNewPage = new SessionsNewPagePo();
    browser.get('/#/log-in');
  });

  it('should say SessionsNewCtrl', function () {
    expect(sessionsNewPage.heading.getText()).toEqual('sessionsNew');
    expect(sessionsNewPage.text.getText()).toEqual('SessionsNewCtrl');
  });
});
