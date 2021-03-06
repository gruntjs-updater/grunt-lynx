/*
 * grunt-lynx
 * https://github.com/jeremy-green/grunt-lynx
 *
 * Copyright (c) 2014 Jeremy Green
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },
    lynx: {
      options: {
        args: ['-head'],
        url: 'localhost',
        dest: 'output/site.txt'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register default task
  grunt.registerTask('default', ['jshint']);
};
