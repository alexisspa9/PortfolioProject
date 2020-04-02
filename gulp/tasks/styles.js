const postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    gulp = require('gulp'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync'),
    mixins = require('postcss-mixins');


exports.css_task = () => {
    return gulp.src("./app/assets/styles/main.css")
        .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
        .on('error', (errorInfo) => {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest("./app/dist/styles/"))
};

exports.css_inject = () => {
    return gulp.src("./app/dist/styles/main.css")
        .pipe(browserSync.stream())
}