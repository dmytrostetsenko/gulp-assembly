import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config
import { path } from '../config/path.js';
import { app } from '../config/app.js';

// Plagins
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';


function js () {
    return gulp.src(path.js.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'JavaScript',
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(gulp.dest(path.js.dest))
        .pipe(browserSync.stream());
};

export default js;