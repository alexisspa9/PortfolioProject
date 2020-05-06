const { begin_watch } = require("./gulp/tasks/watch");
const { deleteDistFolder, optimizeImages, useMin, previewDist, copyGeneralFiles } = require('./gulp/tasks/build');
const gulp = require("gulp");


gulp.task('watch', begin_watch);

gulp.task('build', gulp.series(deleteDistFolder, copyGeneralFiles, optimizeImages, useMin));


gulp.task('previewDist', previewDist);