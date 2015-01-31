var gulp = require("gulp")
var webserver = require("gulp-webserver")
var browserify = require("browserify")
var watchify = require('watchify')
var source = require('vinyl-source-stream')
var livereload = require('gulp-livereload')
var clean = require("gulp-rm")
var concat = require("gulp-concat")


gulp.task("default", ["watch"])

gulp.task("watch", ["clean", "move-files", "webserver", "bower-css", "fonts"], function() {
  gulp.watch("app/*.html", ["move-files"])
})

gulp.task("clean", function() {
  return gulp.src("build/**/*", { read: false })
    .pipe(clean())
})

gulp.task("move-files", function() {
  return gulp.src("app/*.html")
    .pipe(gulp.dest("build"))
})

gulp.task("bower-css", ["clean"], function() {
  return gulp.src([
    'app/bower/materialize/bin/materialize.css',
    'app/bower/font-awesome/css/font-awesome.css'])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest("build/css"))
})

gulp.task("fonts", ["clean"], function() {
  return gulp.src([
    './app/bower/font-awesome/fonts/**.*',
    './app/bower/materialize/font/**/*'])
    .pipe(gulp.dest('build/font'))
})

gulp.task("build-app", ["clean"], function() {
  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source("main.js"))
      .pipe(gulp.dest("./build"))
      .pipe(livereload())
  }

  var bundler = browserify("./app/main.js", watchify.args)
  bundler.on("update", bundle)
  bundler = watchify(bundler)

  return bundle()
})

gulp.task("webserver", ["clean", "move-files", "build-app"], function() {
  return gulp.src("build")
    .pipe(webserver({
      livereload: true
    }))
})
