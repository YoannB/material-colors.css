'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    // Project settings
    yeoman: {
          // configurable paths
          app: 'app',
          dist: 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      minify: {
        src: ['<%= yeoman.dist %>/material-colors.css'],
        dest: '<%= yeoman.dist %>/material-colors.min.css'
      }
    },

    watch: {
      css: {
        files: ['<%= yeoman.app %>/styles/**/*.css']
      },
      stylus: {
        files: ['<%= yeoman.app %>/styles/**/*.styl'],
        tasks: ['default']
      }
    },

    // Clean Config
    clean: {
      dist: {
          files: [{
              dot: true,
              src: [
                  '.tmp',
                  '<%= yeoman.dist %>/*'
              ]
          }]
      },
      server: '.tmp'
    },

    // Stylus Config
    stylus: {
      compile: {
          options: {
              paths: ['<%= yeoman.app %>/styles/**/*.styl'],
              use: [
                  require('fluidity'), // use stylus plugin at compile time
                  require('nib')
              ],
              import: [
                  'nib'
              ]
          },
          files: {
              '.tmp/styles/material-colors.css':[ '<%= yeoman.app %>/styles/_colors.styl' ]
          }
      }
    },

    copy : {
        styles: {
            expand: true,
            cwd: '.tmp/styles/',
            dest: '<%= yeoman.dist %>',
            src: '{,*/}*.css'
        }
    }

  });

  // register task
  grunt.registerTask('default', ['clean', 'stylus', 'copy', 'cssmin']);
  grunt.registerTask('dev', ['watch']);
};
