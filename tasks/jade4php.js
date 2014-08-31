/*
 * grunt-jade4php
 * https://github.com/BookArt/grunt-jade4php
 *
 * Copyright (c) 2014 Brian Etherington
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('jade4php', 'Convert jade templates to PHP', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      pretty: false,
      filename: 'default'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var html = jade4PHP(grunt.file.read(filepath), options);
        if (html.length < 1) {
          grunt.log.warn('Destination not written because Template file was empty.');
        } else {
          grunt.file.write(f.dest, html);
          grunt.log.writeln('File ' + f.dest + ' created.');
        }
      });

    });

  });

  var jade = require('jade');
  require('jade4php')(jade);
  var jade4PHP = function (source, options) {
      try {
          return jade.render(source, options);
      } catch (e) {
          grunt.log.error(e);
          grunt.fail.warn('jade4php failed.');
      }
  };

};
