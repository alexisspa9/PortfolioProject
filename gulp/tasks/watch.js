const { css_task, css_inject }  = require('./styles');
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

exports.begin_watch = () => {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch("./app/index.html", () => {
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", gulp.series(css_task, css_inject));
}