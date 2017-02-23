/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/jquery/dist/jquery.js');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js')
  app.import('bower_components/bootstrap/js/dropdown.js');
  app.import('bower_components/bootstrap/js/alert.js');
  app.import('bower_components/bootstrap/js/affix.js');
  app.import('bower_components/bootstrap/js/transition.js');
  app.import('bower_components/bootstrap/js/tooltip.js');
  app.import('bower_components/bootstrap/js/tab.js');
  app.import('bower_components/bootstrap/js/scrollspy.js');
  app.import('bower_components/bootstrap/js/popover.js');
  app.import('bower_components/bootstrap/js/modal.js');
  app.import('bower_components/bootstrap/js/collapse.js');
  app.import('bower_components/bootstrap/js/carousel.js');
  app.import('bower_components/bootstrap/js/button.js');
  app.import('bower_components/wow/dist/wow.js');
  app.import('bower_components/wow/css/libs/animate.css');


  return app.toTree();
};
