'use strict';
 
const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
 
gulp.task("sass", function(){
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("./css"));
});
  
 
  gulp.task('sass:watch', function(){
    gulp.watch('./css/**/*.scss',['sass']);
  });
  