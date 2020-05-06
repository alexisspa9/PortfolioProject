const gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();


exports.previewDist = () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
}

exports.deleteDistFolder = () => {
    return del('./dist');
};

exports.copyGeneralFiles = () => {
    const pathsToCopy = [
        './app/**/*', 
        '!./app/index.html',
        '!./app/assets/styles/**',
        '!./app/assets/images/**',
        '!./app/assets/scripts/**',
        '!./app/temp/',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest('./dist'))
}


exports.optimizeImages = () => {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest("./dist/assets/images"));
};

exports.useMin = () => {
    return gulp.src('./app/index.html')
    .pipe(usemin({
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()]
    }))
    .pipe(gulp.dest('./dist'));
};
