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
          auth: {
            username: '',
            password: ''
          },
          url: 'localhost',
          dest: 'output/site.txt'
        }
      }
    });

    // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
