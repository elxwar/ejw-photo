/* global describe, beforeEach, it, browser, expect */
'use strict';

var GalleriesPagePo = require('./galleries.po');

describe('Galleries page:', function() {
  var galleriesPage;

  beforeEach(function() {
    galleriesPage = new GalleriesPagePo();
    browser.get('/#/galleries');
  });

//  it('should say GalleriesCtrl', function() {
//    expect(galleriesPage.heading.getText()).toEqual('Galleries');
//  });
//
//  it('should be able to go to the create gallery page', function() {
//    galleriesPage.addGallery.click();
//    expect(browser.getCurrentUrl()).toContain('#/create-gallery');
//  });
//
//  it('should show a list of galleries', function() {
//    expect(galleriesPage.galleries.count() > 0);
//  });

  it('Given a gallery has been clicked it should go to the appropriate edit gallery page', function() {
//    console.log('\n\n*************************** ejw - galleriesPage.galleries[0] ***************************:\n galleriesPage.galleries[0] : - ', (galleriesPage.galleries).toJSON + '\n\n');
    expect(galleriesPage.galleries[0].getText()).toContain('after');

    // MAYBE>>>>>>>>> Just browser.get('/#/edit-gallery/1') to check it goes to the right place? Other bits in unit tests (can unit tests read x.gsrv.y?

//    galleriesPage.galleries[0].click();
//    expect(browser.getCurrentUrl()).toContain('#/edit-gallery');
  });
});
