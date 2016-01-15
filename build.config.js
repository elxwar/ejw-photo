'use strict';

var outDir = 'build/'
    , argv = require('yargs').argv;

module.exports = {
  host: 'localhost',
  port: 3002,

  // app directories
  appDir: 'app',

  // unit test directories
  unitTestDir: argv.unit ? 'app/' + argv.unit : 'app',

  // e2e test directories
  e2eTestDir: argv.e2e ? 'e2e/' + argv.e2e : 'e2e',

  // build test dir
  buildTestDir: outDir + 'test/',

  // build directories
  buildDir: outDir + 'app/',
  buildCss: outDir + 'app/css/',
  buildFonts: outDir + 'app/fonts/',
  buildImages: outDir + 'app/images/',
  buildJs: outDir + 'app/js/',
  extDir: outDir + 'app/vendor/',
  extCss: outDir + 'app/vendor/css/',
  extFonts: outDir + 'app/vendor/fonts/',
  extJs: outDir + 'app/vendor/js/'
};
