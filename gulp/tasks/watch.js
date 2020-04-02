const { css_task, css_inject }  = require('./styles');
const { scripts } = require("./scripts");
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

const reload = () => {
    browserSync.reload();
}


exports.begin_watch = () => {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch("./app/index.html", () => reload());

    watch("./app/assets/styles/**/*.css", gulp.series(css_task, css_inject));
    watch("./app/assets/scripts/**/*.js", gulp.series(scripts, reload));

}