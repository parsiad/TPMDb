module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    browserify: {
      content_js: {
        src: "src/content.js",
        dest: "build/<%= pkg.name %>/content.js"
      },
      options_js: {
        src: "src/options.js",
        dest: "build/<%= pkg.name %>/options.js"
      }
    },
    clean: {
      build: ["build/"]
    },
    compress: {
      build: {
        options: {
          archive: "build/<%= pkg.name %><%= pkg.version %>.zip",
          mode: "zip",
          level: 9
        },
        expand: true,
        cwd: "build/<%= pkg.name %>",
        src: ["**"],
        dest: "<%= pkg.name %>/"
      }
    },
    cssmin: {
      build: {
        files: [{
          "build/<%= pkg.name %>/content.min.css": ["src/content.css"]
        }]
      }
    },
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/<%= pkg.name %>/options.min.html':
              'build/<%= pkg.name %>/options.html'
        }
      }
    },
    template: {
      build: {
        options: {
          data: {
            "name": "<%= pkg.name %>",
            "version": "<%= pkg.version %>",
            "description": "<%= pkg.description %>"
          }
        },
        files: {
          "build/<%= pkg.name %>/manifest.json": ["src/manifest.json.tpl"],
          "build/<%= pkg.name %>/options.html": ["src/options.html.tpl"]
        }
      }
    },
    uglify: {
      build: {
        files: {
          // TODO: Uglify content.js.
          "build/<%= pkg.name %>/options.min.js":
              ["build/<%= pkg.name %>/options.js"],
        }
      }
    }
  });
  require("load-grunt-tasks")(grunt);
  grunt.registerTask("build", [
    "clean",
    "template",
    "browserify:content_js",
    "browserify:options_js",
    "cssmin",
    "htmlmin",
    "uglify",
    "compress"
  ]);
};
