var gulp = require("gulp");
var webserver = require("gulp-webserver");

gulp.task("move-files", function() {
  return gulp.src("app/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("webserver", ["move-files"], function() {
  return gulp.src("build")
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task("default", ["move-files", "webserver"]);
