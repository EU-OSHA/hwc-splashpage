module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2,
          sourceMap: true,
          sourceMapFilename: "css/main.css.map",
          sourceMapBasepath: "css/",
          sourceMapURL: "main.css.map"
        },
        files: {
          "css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer-core')
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    copy: {
      scripts: {
        files: [
          { 
            expand: true,
            cwd: "node_modules/moment/min/",
            src: "moment.min.js",
            dest: "js/contrib/"
          }
        ]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      minify: {
        files: {
          'js/contrib/jquery.cookie.min.js': ['js/contrib/jquery.cookie.js']
        }
      }
    },
    zip: {
      'release.zip': [
        'css/main.css',
        'documents/**/*',
        'img/**/*',
        'js/**/*',
        'favicon.ico',
        'index.html',
        'privacy.html'
      ]
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
  grunt.registerTask('dist', ['less', 'postcss', 'copy', 'uglify']);
  grunt.registerTask('pack', ['less', 'postcss', 'copy', 'uglify', 'replace', 'zip']);
};