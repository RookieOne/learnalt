var gulp = require("gulp")
var webserver = require("gulp-webserver")
var browserify = require("browserify")
var watchify = require('watchify')
var source = require('vinyl-source-stream')
var livereload = require('gulp-livereload')
var clean = require("gulp-rm")
var concat = require("gulp-concat")
var sass = require("gulp-sass")

gulp.task("default", ["watch"])

gulp.task("watch", ["clean", "move-files", "webserver", "bower", "css", "fonts"], function() {
  gulp.watch("app/css/*.*", ["css"])
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

gulp.task("bower", ["bower-css", "bower-js"])

gulp.task("bower-css", ["clean"], function() {
  return gulp.src([
    'app/bower/materialize/bin/materialize.css',
    'app/bower/font-awesome/css/font-awesome.css'])
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest("build/css"))
})

gulp.task("bower-js", ["clean"], function() {
  return gulp.src([
    'app/bower/jquery/dist/jquery.js',
    'app/bower/materialize/bin/materialize.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest("build/js"))
})

gulp.task("fonts", ["clean"], function() {
  return gulp.src([
    './app/bower/font-awesome/fonts/**.*',
    './app/bower/materialize/font/**/*'])
    .pipe(gulp.dest('build/font'))
})

gulp.task('css', function () {
  return gulp.src('./app/css/*.scss')
    .pipe(sass())
    .pipe(concat("main.css"))
    .pipe(gulp.dest('build/css'))
    .pipe(livereload())
});

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
