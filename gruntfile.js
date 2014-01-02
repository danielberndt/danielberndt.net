module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      build: [
        'build', 'contents/css/main.css'
      ]
    },

    compass: {
      dist: {
        options: {
          sassDir: 'assets/stylesheets',
          cssDir: 'contents/css',
          environment: 'production',
        }
      },
      dev: {
        options: {
          sassDir: 'assets/stylesheets',
          cssDir: 'contents/css',
          environment: 'development',
        }
      }
    },

    watch: {
      sass: {
        files: [
          'assets/stylesheets/**/*.scss'
        ],
        tasks: [
          'compass:dev'
        ]
      }
    },

    hashres: {
      options: {
        encoding: 'utf8',
        fileNameFormat: '${name}-${hash}.${ext}',
        renameFiles: true
      },
      css: {
        options: {
        },
        src: ['build/css/main.css'],
        dest: 'build/**/*.html'
      },
      images: {
        options: {
        },
        src: [
          'build/**/*.png',
          'build/**/*.jpg'
        ],
        dest: [
          'build/**/*.html',
          'build/**/*.css',
          'build/**/*.md'
        ]
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: ['**/*.jpg'],
            dest: 'build/',
            ext: '.jpg'
          },
          {
            expand: true,
            cwd: 'build/',
            src: ['**/*.png'],
            dest: 'build/',
            ext: '.png'
          }
        ]
      }
    },

    wintersmith: {
      production: {
        options: {
          config: './config.json'
        }
      },
      preview: {
        options: {
          action: "preview",
          config: './config.json'
        }
      }
    },

    rsync: {
      options: {
        args: ["--verbose"],
        exclude: [".DS_Store"],
        recursive: true
      },
      prod: {
        options: {
          src: "./build/",
          dest: "/var/www/beta",
          host: "www-data@danielberndt.net",
          syncDestIgnoreExcl: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-wintersmith');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('preview', [
    'wintersmith:preview'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'compass:dist',
    'wintersmith:production',
    'imagemin:dist',
    'hashres:images',
    'hashres:css'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'rsync:prod'
  ]);

};