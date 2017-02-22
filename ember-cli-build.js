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

  return app.toTree();
};
