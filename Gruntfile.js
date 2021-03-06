/*
 * grunt-jade4php
 * https://github.com/BookArt/grunt-jade4php
 *
 * Copyright (c) 2014 Brian Etherington
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp/default/*.phtml', 'test/tmp/prettify/*.phtml']
    },

    // Configuration to be run (and then tested).
    jade4php: {
      default_options: {
        expand: true,
        cwd: 'test/source',
        src: ['*.jade'],
        dest: 'test/tmp/default',
        ext: '.phtml'
      },
      prettify: {
        options: {
          pretty: true
        },
        expand: true,
        cwd: 'test/source',
        src: ['*.jade'],
        dest: 'test/tmp/prettify',
        ext: '.phtml'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jade4php', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
